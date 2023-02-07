const initialState = {
  products: [],
  loading: true,
}

const productsReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "getProducts":
      return {
        ...state,
        productsData: action.payload,
        loading: false,
      }

    case "getCategories":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      }
    case "getProductsByCategory":
      return {
        ...state,
        productsData: action.payload,
        loading: false,
      }

    case "sortProducts": {
      return {
        ...state,
        productsData: action.payload,
        loading: false,
      }
    }

    default:
      return state
  }
}
