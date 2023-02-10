"use client";
import { configureStore } from "@reduxjs/toolkit";
import { productListSlice } from "./productListSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    productList: productListSlice.reducer,
    cartCounter: cartSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
