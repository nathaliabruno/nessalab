import { getItemQuantity } from "@/utils"
import { Button, TextField } from "@shopify/polaris"
import { useSelector, useDispatch } from "react-redux"
import { incrementQuantity, decrementQuantity } from "@/redux/cartSlice"

const QtySelector = (id) => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const handleQtyChange = (type: string) => {
    type === "increment"
      ? dispatch(incrementQuantity)
      : dispatch(decrementQuantity)
  }

  return (
    <div style={{ maxWidth: "140px" }}>
      <TextField
        label="Quantity"
        type="text"
        value={cart?.item ? `${getItemQuantity(cart, id)}` : "0"}
        autoComplete="off"
        labelHidden={true}
        maxLength={2}
        max={99}
        inputMode="numeric"
        align="center"
        disabled
        connectedLeft={
          <Button onClick={() => handleQtyChange("decrement")} primary>
            -
          </Button>
        }
        connectedRight={
          <Button onClick={() => handleQtyChange("increment")} primary>
            +
          </Button>
        }
      />
    </div>
  )
}

export default QtySelector
