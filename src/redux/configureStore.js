import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/UserReducers";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
console.log(userInfo, "at store");

const initialState = {
  userSignin: {
    userInfo: userInfo,
    isLoggedIn: !!userInfo,
  },
};

const reducer = combineReducers({
  userSignin: userReducer,
});

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  componseEnhancer(applyMiddleware(thunk))
);

export default store;
