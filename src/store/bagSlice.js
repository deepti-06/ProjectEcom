import { createSlice } from "@reduxjs/toolkit";

const bagSlice=createSlice({
  name:"bag",
  initialState:[],
  reducers:{
    addToBag :(state,action)=>{
      state.push(action.payload) // payload will contain id of the items and since its array so push can be used
    },
    removeFromBag :(state,action)=>{
      return state.filter((itemId)=> itemId !== action.payload)
    }
  }
})

export const bagActions= bagSlice.actions;
export default bagSlice