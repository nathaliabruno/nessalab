import { IProduct } from "@/utils/types"
import {
  Thumbnail,
  ResourceItem,
  Stack,
  Button,
  Text,
  Badge,
} from "@shopify/polaris"
import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/cartSlice"

const RenderItem = (item: IProduct) => {
  const { id, title, price, description, category, image } = item

  const dispatch = useDispatch()

  const media = <Thumbnail source={image} size="large" alt={title} />

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, price, image, category }))
  }

  return (
    <ResourceItem
      id={`${id}`}
      media={media}
      accessibilityLabel={`View details for ${title}`}
      onClick={() => {
        return false
      }}
      verticalAlignment="center"
    >
      <Stack wrap={false}>
        <Stack.Item fill>
          <Text variant="bodyMd" fontWeight="bold" as="h3">
            {title}
          </Text>
          <div style={{ padding: "10px 0" }}>{description}</div>
          <Badge>{category}</Badge>
        </Stack.Item>
        <Stack.Item>
          <Text variant="headingSm" fontWeight="bold" as="p">
            ${price}
          </Text>
        </Stack.Item>
        <Stack.Item>
          <Button onClick={handleAddToCart} primary>
            Add to Cart
          </Button>
        </Stack.Item>
      </Stack>
    </ResourceItem>
  )
}

export default RenderItem
