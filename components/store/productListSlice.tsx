"use client";
import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  _id: string;
  pet_types: string;
  categories: string;
  countries: string;
  sizes: string;
  price: number;
  discounted: boolean;
  old_price: number;
  rating: number;
  product_name: string;
  product_description: string;
  product_image: string;
}

export interface CounterState {
  products: Product[];
}

const initialState: CounterState = {
  products: [],
};

export const productListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    fillProductList: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      if (
        !state.products.find((product) => product._id === action.payload._id)
      ) {
        state.products.push(action.payload);
      }
    },
  },
});

export const { fillProductList, addProduct } = productListSlice.actions;

// export products
export const selectProducts = (state: CounterState) => state.products;

export const selectProductById = createSelector(
  [selectProducts, (state, productId: string) => productId],
  (products = [], productId) =>
    products.find((product) => product._id === productId)
);

export default productListSlice.reducer;
