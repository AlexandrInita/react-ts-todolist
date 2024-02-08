import { thunk } from "redux-thunk"
import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit"
import userReducer from "./user"


const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store