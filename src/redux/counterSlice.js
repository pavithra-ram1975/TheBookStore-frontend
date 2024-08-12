import {createSlice} from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state,action)=>{
            // state.count +=1;
            state.count += action.payload; //increment (argument) productcard.js
        }
    }
})
export const {increment} = counterSlice.actions; //destructuring named eport
export default counterSlice.reducer; //default exp
// only one default exp and n no of named exp

// consuming
// import {createSlice} from "@reduxjs/toolkit";
// const counterSlice=createSlice({
//     name:"counter",
//     initialState:{
//         count:25
//     },
//     reducers:{
//         increment:(state,action)=>
//     {    slicing
//         state.count +=1
//     }

//     }
// }
// )
// export default counterSlice.reducer;