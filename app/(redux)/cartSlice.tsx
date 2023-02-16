import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./productListSlice";

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
  localStorage.setItem("cartState", JSON.stringify(state));
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

  localStorage.setItem("cartState", JSON.stringify(state));
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
  localStorage.setItem("cartState", JSON.stringify(state));
};

export interface CounterState {
  products: LocalProduct[];
}

const cartStateString = localStorage.getItem("cartState");

const cartState = cartStateString
  ? JSON.parse(cartStateString)?.products ?? []
  : [];

const initialState: CounterState = {
  products: cartState,
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
