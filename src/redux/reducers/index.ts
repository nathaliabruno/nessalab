import { combineReducers } from "redux"

import productsReducers from "./productReducers"
import categoryReducers from "./categoryReducers"

const reducers = combineReducers({
  products: productsReducers,
  categories: categoryReducers,
})

export default reducers
