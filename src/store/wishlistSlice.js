import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
  name:"wishlist",
  initialState:[],
  reducers:{
    addToWishlist :(state,action)=>{
      state.push(action.payload) // payload will contain id of the items and since its array so push can be used
    },
    removeFromWishlist :(state,action)=>{
      return state.filter((itemId)=> itemId !== action.payload)
    }
  }
})

export const wishlistActions= wishlistSlice.actions;
export default wishlistSlice