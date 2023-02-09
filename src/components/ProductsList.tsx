import {
  TextField,
  Filters,
  Button,
  Card,
  ResourceList,
  Avatar,
  ResourceItem,
  Text,
  ChoiceList,
} from "@shopify/polaris"
import { useState, useCallback, useEffect } from "react"
import { fetchProducts, filterByCategory } from "@/utils/axios-requests"
import { IProduct } from "@/utils/types"

const ProductsList = ({ filterList, firstProducts }) => {
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [sortValue, setSortValue] = useState("ASC")
  const [products, setProducts] = useState(firstProducts)

  const handleCategoryFilterChange = useCallback(
    (value) => setCategoryFilter(value),
    []
  )

  const handleCategoryFilterRemove = useCallback(
    () => setCategoryFilter(null),
    []
  )
  const handleClearAll = useCallback(() => {
    handleCategoryFilterRemove()
  }, [handleCategoryFilterRemove])

  const resourceName = {
    singular: "product",
    plural: "products",
  }

  const items = [
    {
      id: 112,
      url: "customers/341",
      name: "Mae Jemison",
      location: "Decatur, USA",
      latestOrderUrl: "orders/1456",
    },
    {
      id: 212,
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      latestOrderUrl: "orders/1457",
    },
  ]

  useEffect(() => {
    categoryFilter
      ? filterByCategory(sortValue, categoryFilter).then((data) =>
          setProducts(data)
        )
      : fetchProducts(sortValue).then((data) => setProducts(data))
  }, [categoryFilter, sortValue])

  const mapCategoryChoices = () => {
    let choices: { label: string; value: string }[] = []
    filterList &&
      filterList.map((category: string) => {
        choices.push({ label: category, value: category })
      })
    return choices
  }

  const filters = [
    {
      key: "categories",
      label: "Category",
      filter: (
        <ChoiceList
          title="Categories"
          titleHidden
          choices={mapCategoryChoices()}
          selected={categoryFilter || []}
          onChange={handleCategoryFilterChange}
        />
      ),
      shortcut: true,
    },
  ]

  const appliedFilters = !isEmpty(categoryFilter)
    ? [
        {
          key: "categories",
          label: disambiguateLabel("categories", categoryFilter),
          onRemove: handleCategoryFilterRemove,
        },
      ]
    : []

  const filterControl = (
    <Filters
      filters={filters}
      appliedFilters={appliedFilters}
      onClearAll={handleClearAll}
      hideQueryField={true}
      onQueryChange={() => {}}
      onQueryClear={() => {}}
    >
      <div style={{ paddingLeft: "8px" }}>
        <Button onClick={() => console.log("New filter saved")}>Save</Button>
      </div>
    </Filters>
  )

  return (
    <Card title="Products List">
      <ResourceList
        resourceName={resourceName}
        items={products}
        renderItem={renderItem}
        sortValue={sortValue}
        sortOptions={[
          { label: "A -> Z", value: "ASC" },
          { label: "Z -> A", value: "DESC" },
        ]}
        onSortChange={(selected) => {
          setSortValue(selected)
          console.log(`Sort option changed to ${selected}.`)
        }}
        filterControl={filterControl}
      />
    </Card>
  )

  function renderItem(item: IProduct) {
    const { id, title, price, description, category, image, rating } = item
    const media = <Avatar source={image} customer size="medium" name={title} />
    const shortcutActions = [
      {
        content: "Add to Cart",
        onAction: () => {
          console.log("added - implement redux store")
        },
      },
    ]
    return (
      <ResourceItem
        id={`${id}`}
        media={media}
        accessibilityLabel={`View details for ${title}`}
        shortcutActions={shortcutActions}
        onClick={() => console.log("added - implement redux store")}
        persistActions
      >
        <Text variant="bodyMd" fontWeight="bold" as="h3">
          {title}
        </Text>
        <div>{description}</div>
        <Text variant="bodySm" fontWeight="bold" as="p">
          {price}
        </Text>
      </ResourceItem>
    )
  }

  function disambiguateLabel(key, value) {
    switch (key) {
      case "categories":
        return `Category: ${value}`
      default:
        return value
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0
    } else {
      return value === "" || value == null
    }
  }
}

export default ProductsList
