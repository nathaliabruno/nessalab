import { IProduct } from "./types"


export const getTotalQuantity = (cart) => {
  let total = 0

  cart.length &&
    cart.forEach((item) => {
      total += item.quantity
    })

  return total
}

export const getTotalPrice = (cart) => {
  let total = 0

  cart.length &&
    cart.forEach((item) => {
      total += item.price * item.quantity
    })

  return total
}

export const getItemQuantity = (itemID, cart) => {
  const item = cart.find((item: IProduct) => item.id === itemID.id)

  return item ? item.quantity : 0
}

export const checkItemInCart = (itemID, cart) => {
  const item = cart.find((item: IProduct) => item.id === itemID.id)
  return item ? true : false
}

export const convertToMoney = (value) => {
  return `$${value.toFixed(2)}`
}