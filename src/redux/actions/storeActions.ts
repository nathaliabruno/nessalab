import { IProduct } from "@/utils/types"

export const getProducts = (productsData: IProduct[]) => {
  return {
    type: "getProducts",
    payload: productsData,
  }
}
export const getProductsByCategory = (
  category: string,
  productsData: IProduct[]
) => {
  return {
    type: "getProductsByCategory",
    payload: productsData,
  }
}

export const getCategories = (categories: string[]) => {
  return {
    type: "getCategories",
    payload: categories,
  }
}

export const sortProductList = (order: string, productsData: IProduct[]) => {
  return {
    type: "sortProducts",
    payload: productsData,
  }
}
