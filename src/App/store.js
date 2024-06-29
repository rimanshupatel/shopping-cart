import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartSlice from "./Slice";

export const store = configureStore({
  reducer: {
    ShoppingCart: ShoppingCartSlice,
  },
});
