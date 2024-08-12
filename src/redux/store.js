import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
 const store= configureStore({
    reducer:{
        counter: counterSlice,
        cartt: cartSlice
    }
 })
 export default store;
 