"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/app/ClientComponents/store/store";
import { LocalProduct } from "@/app/ClientComponents/store/cartSlice";

import TableItem from "@/app/ClientComponents/shopPage/cartPage/TableItem";
import RightPanel from "@/app/ClientComponents/shopPage/cartPage/RightPanel";
import CartEmpty from "@/app/ServerComponents/ShopPage/404 Elements/CartEmpty";

// Client component as it uses redux toolkit data from the store
const page = () => {
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountValue, setDiscountValue] = useState(0);

  const productsState = useSelector<RootState, LocalProduct[]>(
    (state) => state.cart.products
  );

  useEffect(() => {
    if (productsState) {
      const total = productsState.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      const totalDiscount = productsState.reduce(
        (acc, curr) =>
          curr.discounted
            ? acc + (curr.old_price - curr.price) * curr.quantity
            : acc,
        0
      );
      setTotalPrice(total);
      setDiscountValue(totalDiscount);
      setProducts(productsState);
    }
  }, [productsState, products]);

  if (products.length === 0) return <CartEmpty />;

  return (
    <div className="my-32 mb-64 font-maven ">
      <div className=" mx-auto mb-12 flex flex-col items-center justify-center font-exo text-5xl font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-12 w-12 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
        My Cart
        <ul className="steps mt-6 text-base">
          <li className="step-secondary step">Cart review</li>
          <li className="step">Shipping </li>
          <li className="step">Payment </li>
          <li className="step">Review and confirm</li>
        </ul>
      </div>

      <div className=" mx-auto flex w-full flex-col px-2  lg:flex-row  lg:px-4 xl:gap-x-16 xl:px-32">
        <div className="mx-auto  grid flex-1  ">
          <div className="divider mb-0 flex  w-full "></div>

          <div className="mt-0 grid w-full grid-flow-row items-center justify-between gap-y-8 ">
            {products.map((item) => (
              <TableItem key={item._id} product={item} />
            ))}
          </div>
          <div className="grid grid-cols-1">
            <div className="divider mb-0  flex w-full "></div>
            <span className="justify-end  text-end text-lg font-semibold ">
              Subtotal <span className="label-text-alt font-medium"> PLN</span>
              {totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="hidden border-opacity-50  lg:divider lg:divider-horizontal"></div>
        <div className=" prose mx-auto  max-w-none place-content-start text-lg lg:ml-auto  ">
          <RightPanel totalPrice={totalPrice} getDiscount={discountValue} />
        </div>
      </div>
    </div>
  );
};

export default page;
