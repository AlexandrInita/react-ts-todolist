const initState = { 
  userName: ''
 }

enum actions {
  setName = 'user/setName',
  clearName = 'user/clearName'
}

function userReducer(state = initState, action: { type: string, payload: any }) {
  switch(action.type) {
    case actions.setName:
      return {
        ...state,
        userName: action.payload,
      } 
    case actions.clearName:
        return {
          ...state,
          userName: '',
        } 
    default: 
      return state
  } 
 }

function setName(name: string) {
  return { type: actions.setName, payload: name }
}

function logout() {
  return { type: actions.clearName }
}

export { setName, logout } 

export default userReducer