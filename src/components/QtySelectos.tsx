import { getItemQuantity } from "@/utils"
import { Button, TextField } from "@shopify/polaris"
import { useSelector, useDispatch } from "react-redux"
import { incrementQuantity, decrementQuantity } from "@/redux/cartSlice"
import { useEffect, useState } from "react"

const QtySelector = (id) => {
  const cart = useSelector((state) => state.cart)
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    setQuantity(getItemQuantity(id, cart))
  }, [id, cart])

  return (
    <div style={{ maxWidth: "140px" }}>
      <TextField
        label="Quantity"
        type="text"
        value={quantity}
        autoComplete="off"
        labelHidden={true}
        maxLength={2}
        max={99}
        inputMode="numeric"
        align="center"
        disabled
        connectedLeft={
          <Button onClick={() => dispatch(decrementQuantity(id.id))} primary>
            -
          </Button>
        }
        connectedRight={
          <Button onClick={() => dispatch(incrementQuantity(id.id))} primary>
            +
          </Button>
        }
      />
    </div>
  )
}

export default QtySelector
