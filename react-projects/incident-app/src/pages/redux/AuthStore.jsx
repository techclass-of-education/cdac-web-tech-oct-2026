import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlicer.jsx"
export const authStore=configureStore({
reducer:{
    AuthReducer:AuthReducer
}
})