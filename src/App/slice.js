import { createSlice } from "@reduxjs/toolkit";
import data from "../data/StoreItems.json";

const initialState = {
  cart: [],
  items: data,
  quantity: 0,
  totalPrice: 0,
};

export const ShoppingCartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    Add_To_Cart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { Add_To_Cart } = ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
