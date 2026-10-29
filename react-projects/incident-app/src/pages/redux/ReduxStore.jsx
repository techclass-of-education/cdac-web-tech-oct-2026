import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlicer.jsx"
import IncidentReducer from "./IncidentSlicer.jsx"

export const store=configureStore({
reducer:{
   AuthReducer,
   IncidentReducer
}
})