import { IProduct } from "./types"


export const getTotalQuantity = (cart: any) => {
  let total = 0

  cart.length &&
    cart.forEach((item: any) => {
      total += item.quantity
    })

  return total
}

export const getTotalPrice = (cart: any) => {
  let total = 0

  cart.length &&
    cart.forEach((item: any) => {
      total += item.price * item.quantity
    })

  return total
}

export const getItemQuantity = (itemID: any, cart: any) => {
  const item = cart.find((item: IProduct) => item.id === itemID.id)

  return item ? item.quantity : 0
}

export const checkItemInCart = (itemID: any, cart: any) => {
  const item = cart.find((item: IProduct) => item.id === itemID.id)
  return item ? true : false
}

export const convertToMoney = (value: number) => {
  return `$${value.toFixed(2)}`
}