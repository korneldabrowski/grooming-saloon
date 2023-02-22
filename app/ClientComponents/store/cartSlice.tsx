"use client";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/types/types";

export interface LocalProduct extends Omit<Product, "quantity"> {
  quantity: number;
}

const pushItem = (state: CounterState, action: { payload: LocalProduct }) => {
  const newItem = action.payload;

  const existingItem = state.products.find((item) => item._id === newItem._id);

  if (!existingItem) {
    state.products.push({
      ...newItem,
      quantity: 1,
    });
  } else {
    existingItem.quantity++;
  }

  typeof window !== "undefined"
    ? localStorage.setItem("cartState", JSON.stringify(state))
    : null;
};

const unpushItem = (state: CounterState, action: { payload: LocalProduct }) => {
  const newItem = action.payload;
  const existingItemIndex = state.products.findIndex(
    (item) => item._id === newItem._id
  );

  if (existingItemIndex === -1) {
    return;
  }

  const existingItem = state.products[existingItemIndex];

  existingItem.quantity === 1
    ? state.products.splice(existingItemIndex, 1)
    : existingItem.quantity--;

  typeof window !== "undefined"
    ? localStorage.setItem("cartState", JSON.stringify(state))
    : null;
};

const setQuantities = (
  state: CounterState,
  action: { payload: LocalProduct }
) => {
  const { _id, quantity } = action.payload;
  const existingItem = state.products.find((item) => item._id === _id);

  if (existingItem) {
    existingItem.quantity = quantity;
  }

  if (existingItem?.quantity === 0) {
    const existingItemIndex = state.products.findIndex(
      (item) => item._id === _id
    );
    state.products.splice(existingItemIndex, 1);
  }

  typeof window !== "undefined"
    ? localStorage.setItem("cartState", JSON.stringify(state))
    : null;
};

export interface CounterState {
  products: LocalProduct[];
}

const cartStateString =
  typeof window !== "undefined" ? localStorage.getItem("cartState") : null;

if (typeof window !== "undefined") {
  // Perform localStorage action
  var data =
    typeof window !== "undefined" && cartStateString
      ? JSON.parse(cartStateString).products
      : [];
}

const initialState: CounterState = {
  products: data,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      pushItem(state, action);
    },
    removeItem: (state, action) => {
      unpushItem(state, action);
    },
    setItemQuantity: (state, action) => {
      setQuantities(state, action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, setItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
