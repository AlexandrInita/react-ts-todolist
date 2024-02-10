import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./user"
import { thunk } from "redux-thunk"

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: () => [thunk],
})

export default store