import axios from "axios"

export const fetchCategories = async () => {
  try {
    const response = await apiInstance.get("/products/categories")
    const data = await response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchProducts = async (order: string) => {
  const sortDirection = order ? order : "ASC"
  try {
    const response = await apiInstance.get("/products", {
      params: { sort: sortDirection },
    })
    const data = await response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const filterByCategory = async (order: string, category: string) => {
  const sortDirection = order ? order : "ASC"
  try {
    const response = await apiInstance.get(`/products/category/${category}`, {
      params: { sort: sortDirection },
    })
    const data = await response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const apiInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 100000,
})
