import {
  Filters,
  Card,
  ResourceList,
  OptionList,
} from "@shopify/polaris"
import { useState, useCallback, useEffect } from "react"
import { fetchProducts, filterByCategory } from "@/utils/axios-requests"
import RenderItem from "./ProductListItem"

interface ProductsListProps {
  filterList: any
  firstProducts: any
}
const ProductsList = ({ filterList, firstProducts }: ProductsListProps) => {
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [sortValue, setSortValue] = useState("asc")
  const [products, setProducts] = useState(firstProducts)

  const handleCategoryFilterChange = useCallback(
    (value: any) => setCategoryFilter(value),
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
        <OptionList
          title="Categories"
          options={mapCategoryChoices()}
          selected={[categoryFilter || ""]}
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
    />
  )

  return (
    <Card>
      {products.length && (
        <ResourceList
          resourceName={resourceName}
          items={products}
          renderItem={RenderItem}
          sortValue={sortValue}
          sortOptions={[
            { label: "ASC", value: "asc" },
            { label: "DESC", value: "desc" },
          ]}
          onSortChange={(selected) => {
            setSortValue(selected)
          }}
          filterControl={filterControl}
        />
      )}
    </Card>
  )

  function disambiguateLabel(key: string, value: any) {
    switch (key) {
      case "categories":
        return `Category: ${value}`
      default:
        return value
    }
  }

  function isEmpty(value: any) {
    if (Array.isArray(value)) {
      return value.length === 0
    } else {
      return value === "" || value == null
    }
  }
}

export default ProductsList
