import { createStore } from "@reduxjs/toolkit"
import { combineReducers, createStore } from "@reduxjs/toolkit"
import userReducer from "./user"


const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer)

export default store