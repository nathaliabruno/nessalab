import { IProduct } from "@/utils/types"
import { Thumbnail, ResourceItem, Stack, Button, Text } from "@shopify/polaris"
import QtySelector from "./QtySelectos"

const RenderItem = (item: IProduct) => {
  const { id, title, price, description, category, image, rating } = item
  const media = <Thumbnail source={image} size="large" alt={title} />
  return (
    <ResourceItem
      id={`${id}`}
      media={media}
      accessibilityLabel={`View details for ${title}`}
      onClick={(e) => e.preventDefault}
      persistActions
      verticalAlignment="center"
    >
      <Stack wrap={false}>
        <Stack.Item fill>
          <Text variant="bodyMd" fontWeight="bold" as="h3">
            {title}
          </Text>
          <div>{description}</div>
        </Stack.Item>
        <Stack.Item>
          <Text variant="headingSm" fontWeight="bold" as="p">
            ${price}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Button
            onClick={() => console.log("added - implement redux store")}
            primary
          >
            Add to Cart
          </Button>
          <QtySelector />
        </Stack.Item>
      </Stack>
    </ResourceItem>
  )
}

export default RenderItem
