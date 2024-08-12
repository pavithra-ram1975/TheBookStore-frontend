// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [] 
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.cart = [...state.cart, action.payload];
        //  state.items.push({...actions.payload})
//     },
//     removeItem: (state, action) => {
//       state.cart = state.cart.filter(cart => cart.id !== action.payload.id); // Corrected the variable name
//     }
//   }
// });

// export const { addItem, removeItem } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartt",
  initialState: {
    cart: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
// we can use find or map if we use map we will be taking the whole array and we change it
  // state.items = state.items.map((item)=>{
    // if(item.id ===action.payload.id){
    // return{...item.quantity:item.quantity +1};
    // else{
    // return item;}
    // }
    // });
    removeItem: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

