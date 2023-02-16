"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../(redux)/store";

const CartAmount = () => {
  const numberOfCartItems = useSelector((state: RootState) =>
    state.cart.products.reduce((curNumber, item) => {
      return curNumber + item.quantity;
    }, 0)
  );

  return (
    <span className="badge-warning badge badge-sm indicator-item">
      {numberOfCartItems || 0}
    </span>
  );
};

export default CartAmount;
