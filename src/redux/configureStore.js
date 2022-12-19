import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userReducer from "./authSlice";
import tokenReducer from "./authSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
  },
});
