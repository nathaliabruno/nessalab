import { removeItem } from "../redux/cartSlice"
import { DeleteMinor } from "@shopify/polaris-icons"
import { useDispatch } from "react-redux"
import {
  Text,
  ResourceItem,
  Stack,
  Thumbnail,
  Button,
  Icon,
} from "@shopify/polaris"
import QtySelector from "./QtySelectos"

const CartItem = ({ id, image, title, price }) => {
  const dispatch = useDispatch()

  return (
    <>
      <ResourceItem
        id={`${id}`}
        media={<Thumbnail source={image} size="large" alt={title} />}
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
          </Stack.Item>
          <Stack.Item>
            <Text variant="headingSm" fontWeight="bold" as="p">
              ${price}
            </Text>
          </Stack.Item>
          <Stack.Item>
            <QtySelector id={id} />
          </Stack.Item>
          <Stack.Item>
            <Button
              outline
              destructive
              onClick={() => dispatch(removeItem(id))}
            >
              <Icon source={DeleteMinor} />
            </Button>
          </Stack.Item>
        </Stack>
      </ResourceItem>
    </>
  )
}

export default CartItem
