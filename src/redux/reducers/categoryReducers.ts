const initialState = {
  categories: [],
  loading: true,
}

const categoryReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "getCategories":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      }

    default:
      return state
  }
}

export default categoryReducers
