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
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    Remove_Items: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },

    decrement: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});
export const { Add_To_Cart, Remove_Items, increment, decrement } =
  ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
