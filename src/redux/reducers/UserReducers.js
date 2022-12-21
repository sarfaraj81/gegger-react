const initialState = {
  userInfo: {},
  isLoggedIn: false,
}
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGNIN_REQUEST':
      return { ...state,  userInfo: action.payload, isLoggedIn: true }
    default:
      return state
  }
}
