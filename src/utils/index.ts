import { IProduct } from "./types"

export const getTotalQuantity = (cart) => {
  let total = 0
  cart.forEach((item) => {
    total += item.quantity
  })
  return total
}

export const getItemQuantity = (cart, itemID) => {
  const item = cart.find((item: IProduct) => item.id === itemID)
  console.log(item?.quantity)
  return item ? item.quantity : 0
}
