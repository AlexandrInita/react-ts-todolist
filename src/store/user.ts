import { fakeUserApi } from "../api"
import { createSlice } from "@reduxjs/toolkit"

const initialState = { 
  userName: ''
}

const userSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setName(state, action) {
      state.userName = action.payload
    },
    clearName(state) {
      state.userName = ''
    }
  }
})

export const { setName, clearName } = userSlice.actions

export default userSlice.reducer

export function logout() {
  return function(dispatch) {
    dispatch(clearName())
  }
}

export function setFakeUserName() {
  return async function(dispatch, getState) {
    const data = await fakeUserApi.getRandomUser()

    dispatch(setName(data.results[0].login.username))
  }
}