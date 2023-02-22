"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/components/store/store";
import { LocalProduct } from "@/components/store/cartSlice";

const CartAmount = () => {
  const [numItems, setNumItems] = useState<number>(0);
  const cartProducts = useSelector<RootState, LocalProduct[]>(
    (state) => state.cart.products
  );

  useEffect(() => {
    if (cartProducts) {
      const totalItems = cartProducts.reduce(
        (acc, curr) => acc + curr.quantity,
        0
      );
      setNumItems(totalItems);
    }
  }, [cartProducts]);

  return (
    <div className="badge-warning badge badge-sm indicator-item">
      {numItems}
    </div>
  );
};

export default CartAmount;
