"use client";
import { Product } from "@/components/store/productListSlice";
import React, { useState } from "react";
import Link from "next/link";
import { setItemQuantity } from "../../../components/store/cartSlice";
import { useDispatch } from "react-redux";

const TableItem = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  const [quantityState, setQuantityState] = useState(quantity);
  const dispatch = useDispatch();

  function handleSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOption = parseInt(event.target.value);

    setQuantityState(selectedOption);
    dispatch(setItemQuantity({ _id: product._id, quantity: selectedOption }));
  }

  if (!product) return null;
  if (quantityState === 0) return null;

  return (
    <div className="prose mt-0 flex max-w-none flex-col font-exo prose-h2:mt-0 prose-p:mt-0 sm:prose-h2:text-2xl lg:grid lg:grid-cols-5  xl:prose-h2:text-3xl">
      <div className=" col-span-2 flex gap-x-2">
        <img
          src={product.product_image}
          alt="product image"
          className="mt-0 h-48 w-32 object-cover"
        />
        <div className="ml-0 flex flex-col">
          <Link href={`/shop/product/${product._id}`}>
            <h2 className=" ">{product.product_name}</h2>
          </Link>
          Size: {product.sizes && product.sizes.split("_").join(" ")}
          <br />
          Country: {product.countries}
          <br />
          Pet Type: {product.pet_types}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start lg:flex-col lg:items-center">
        Each:
        {product.discounted && (
          <span className=" text-xs font-bold  line-through	">
            <span className="label-text-alt items-center font-medium">
              PLN{" "}
            </span>
            {product.old_price.toFixed(2)}
          </span>
        )}
        <span className={` font-bold ${product.discounted && "text-red-500"}`}>
          <span className="label-text-alt items-center font-medium ">PLN </span>
          {product.price.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-start lg:flex-col">
        <p className="mb-0">Quantity:</p>
        <select
          className="select-ghost select"
          onChange={handleSelect}
          value={quantityState}
        >
          <option disabled defaultValue={quantityState}>
            {quantityState}
          </option>
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-start sm:items-center lg:flex-col">
        Total Price:
        <span className=" font-bold">
          <span className="label-text-alt items-center font-medium">PLN </span>
          {(product.price * quantityState).toFixed(2)}
        </span>
        <label
          htmlFor={product._id}
          className="ml-auto flex cursor-pointer justify-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className=" h-6 w-6   hover:stroke-red-500 lg:mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </label>
        <input type="checkbox" id={product._id} className="modal-toggle" />
        <div className="modal modal-bottom prose  max-w-none text-start font-maven prose-h3:text-3xl sm:modal-middle">
          <div className="modal-box">
            <h3 className="mt-0 text-lg font-bold">
              Think, before you continue!
            </h3>
            <p className="py-4">
              Are you sure you want to remove this item from your cart?
            </p>
            <div className="modal-action flex justify-end gap-x-2">
              <label
                htmlFor={product._id}
                className=" btn-outline btn-error btn-sm btn"
                onClick={() => {
                  setQuantityState(0);
                  dispatch(setItemQuantity({ _id: product._id, quantity: 0 }));
                }}
              >
                Yes, delete it!
              </label>
              <label
                htmlFor={product._id}
                className="btn-outline btn-success btn-sm btn"
              >
                No, keep it!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableItem;
