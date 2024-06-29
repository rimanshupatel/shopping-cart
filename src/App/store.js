import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartSlice from "./slice";

export const store = configureStore({
  reducer: {
    ShoppingCart: ShoppingCartSlice,
  },
});
