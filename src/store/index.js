import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice"
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import wishlistSlice from "./wishlistSlice";
import userReducer from "./userSlice";

const myntraStore=configureStore({
  reducer:{
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
    wishlist:wishlistSlice.reducer,
    user:userReducer,
  }
})

export default myntraStore