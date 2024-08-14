import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";
 const store= configureStore({
    reducer:{
        counter: counterSlice,
        cartt: cartSlice,
        searchSlice:searchSlice
    }
 })
 export default store;
 