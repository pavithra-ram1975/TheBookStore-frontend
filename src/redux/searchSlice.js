import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../constants";
const searchSlice=createSlice({
    name:"searchslice",
    initialState:{
        searchList:[],
    },
    reducers:{
        setProducts:(state,action)=>{
            state.items=action.payload
        },
        searchProducts:(state,action)=>{
            if(action.payload===''){
                state.searchList=PRODUCTS
            }
            else{
                state.searchList=PRODUCTS.filter(
                    (el)=>el.title.includes(action.payload)
                )
            }
        }
    }

})
export const {searchProducts,setProducts} =searchSlice.actions;
export default searchSlice.reducer;