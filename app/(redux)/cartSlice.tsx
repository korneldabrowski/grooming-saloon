"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productListSlice";

interface CartState {
  value: number;
  products: Product[];
}

const initialState: CartState = {
  value: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.value += 1;
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.value -= 1;
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCart = (state: CartState) => state.value;

export default cartSlice.reducer;
