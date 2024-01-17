import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./Reducers/SavedReducer";

export default configureStore({
    reducer:{
        booking:SavedReducer
    }
})