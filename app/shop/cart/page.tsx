"use client";
import CartEmpty from "@/components/CartEmpty";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useInterval } from "usehooks-ts";
import TableItem from "./TableItem";
import { Product } from "../../(redux)/productListSlice";
import { RootState } from "../../(redux)/store";

const page = () => {
  const getProducts = useSelector((state: RootState) =>
    state.cart.products.map((item) => item)
  );

  const getTotalPrice = useSelector((state: RootState) =>
    state.cart.products.reduce((curNumber, item) => {
      return curNumber + item.price * item.quantity;
    }, 0)
  );
  const getDiscount = useSelector((state: RootState) =>
    state.cart.products.reduce(
      (curNumber, item) =>
        item.discounted
          ? curNumber + (item.old_price - item.price) * item.quantity
          : curNumber,
      0
    )
  );

  const [isAdded, setIsAdded] = useState(false);

  useInterval(() => setIsAdded(false), isAdded ? 4000 : null);

  const [totalPrice, setTotalPrice] = useState(getTotalPrice);

  useEffect(() => {
    setTotalPrice(getTotalPrice);
  }, [getTotalPrice]);

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
        </svg>{" "}
        My Cart
        <ul className="steps mt-6 text-base">
          <li className="step-secondary step">Cart review</li>
          <li className="step">Shipping </li>
          <li className="step">Payment </li>
          <li className="step">Review and confirm</li>
        </ul>
      </div>

      <div className=" mx-auto flex w-full flex-col px-2  lg:flex-row  lg:px-4 xl:gap-x-16 xl:px-32">
        <div className="   mx-auto  grid flex-1  ">
          <div className="divider mb-0 flex  w-full "></div>

          <div className="mt-0 grid w-full grid-flow-row items-center justify-between gap-y-8 ">
            {getProducts.map((item) => (
              <TableItem
                key={item._id}
                product={item}
                quantity={item.quantity}
              />
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
          <div className="form-control ">
            <div className=""></div>
            <label className="label">
              <span className="label-text">ENTER PROMO CODE</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Promo"
                className="input-bordered input rounded-none "
              />
              <button className=" btn rounded-none font-medium text-base-100">
                SUBMIT
              </button>
            </label>
            <div className=" mt-12">
              <span className="flex ">
                <span className="text-start">Shipping Cost</span>
                <span className="ml-auto items-end text-end">
                  {totalPrice < 99 ? "TBD" : "Free"}
                </span>
              </span>

              <span className="flex ">
                <span className="text-start">Tax</span>
                <span className="ml-auto items-end text-end">TBD</span>
              </span>
              <span className="flex ">
                <span className="text-start">Total Savings</span>
                <span className=" relative ml-auto items-end text-end font-bold text-error">
                  <span className="label-text-alt">PLN</span>{" "}
                  {getDiscount.toFixed(2)}
                </span>
              </span>
              <span className="flex text-lg font-semibold ">
                <span className="text-start">Estimated Total</span>
                <span className="ml-auto items-end text-end">
                  <span className="label-text-alt">PLN</span>{" "}
                  {totalPrice.toFixed(2)}
                </span>
              </span>
            </div>
            {totalPrice < 99 ? (
              <p className="font-medium">
                You're{" "}
                <span className="text-error">
                  ${(99 - totalPrice).toFixed(2)}
                </span>{" "}
                away from free shipping!
              </p>
            ) : (
              <p className="font-medium">
                You've secured{" "}
                <span className="text-error">free shipping!</span>
              </p>
            )}

            <button
              onClick={() => {
                setIsAdded(true);
              }}
              className="btn-secondary btn-block btn-lg btn mx-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                  clipRule="evenodd"
                />
              </svg>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>

      {isAdded && (
        <div className="toast-end toast z-50">
          <div className="alert alert-error shadow-xl">
            <div>
              <span>
                The following functionality is still under construction.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
