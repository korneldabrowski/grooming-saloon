"use client";
import React, { useState, useEffect } from "react";
import { addItem } from "app/components/store/cartSlice";
import { Product } from "types/types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "app/components/store/store";
import { LocalProduct } from "app/components/store/cartSlice";

import ShowToast from "app/components/Misc/Toast";

const AddItem = ({ product }: { product: Product }) => {
  const [myProduct, setMyProduct] = useState<LocalProduct>();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [tooMany, setTooMany] = useState(false);

  const productsState = useSelector<RootState, LocalProduct[]>(
    (state) => state.cart.products
  );

  useEffect(() => {
    const productFound = productsState.find((p) => p._id === product._id);
    if (productFound) {
      setMyProduct(productFound);
    }
  }, [productsState]);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (myProduct && myProduct.quantity + quantity > 5) {
      setTooMany(true);
      return;
    }

    for (let i = 0; i < quantity; i++) dispatch(addItem({ ...product }));
    setIsAdded(true);
  };

  return (
    <div>
      <div className=" flex gap-x-2 ">
        <div className=" flex rounded-l-full  rounded-r-full bg-base-200 ">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
            className="btn-ghost btn-square btn rounded-l-full text-4xl "
          >
            -
          </button>
          <input
            value={quantity}
            type="number"
            className="hideArrows m-0 w-12  rounded-t-none rounded-b-none rounded-l-full rounded-r-full p-0 text-center text-2xl text-primary   hover:text-neutral "
            placeholder="1"
            onChange={(e) => {
              setQuantity(parseInt(e.target.value));
            }}
            min={1}
            max={5}
          />
          <button
            onClick={() => {
              if (quantity < 5) {
                setQuantity(quantity + 1);
              }
            }}
            className="btn-ghost btn-square btn rounded-r-full text-4xl  text-primary   hover:bg-inherit "
          >
            +
          </button>
        </div>

        <button onClick={addToCartHandler} className=" btn-warning btn  ">
          Add to cart!
        </button>
        {isAdded && (
          <ShowToast
            onClose={() => setIsAdded(false)}
            message="Product(s) added successfully!"
            className="alert-success"
          />
        )}
        {tooMany && (
          <ShowToast
            onClose={() => setTooMany(false)}
            message="Maximum 5 of each item per order!"
            className="alert-error"
          />
        )}
      </div>
    </div>
  );
};

export default AddItem;
