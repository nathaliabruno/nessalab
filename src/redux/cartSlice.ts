import { IProduct } from "@/utils/types"
import { createSlice } from "@reduxjs/toolkit"

type CartState = any

const initialState: CartState = { cart: [] }
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart: any = state.cart.find(
        (item: IProduct) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
      const item: any = state.cart.find(
        (item: IProduct) => item.id === action.payload
      )
      item.quantity++
    },
    decrementQuantity: (state, action) => {
      const item: any = state.cart.find(
        (item: IProduct) => item.id === action.payload
      )
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item: IProduct) => item.id !== action.payload
      )
      state.cart = removeItem
    },
  },
})
export const cartReducer = cartSlice.reducer
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions

