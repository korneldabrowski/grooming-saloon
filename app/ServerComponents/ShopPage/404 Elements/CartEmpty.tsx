import React from "react";
import Image from "next/image";
import GoBack from "@/app/ClientComponents/shopPage/GoBack";
const CartEmpty = () => {
  return (
    <div className="relative mx-auto my-36 flex flex-col justify-center px-4 sm:flex-row ">
      <div className="flex flex-col text-center align-bottom  sm:items-end">
        <h2 className=" text-xl ">
          Oopsie...Your cart is empty
          <br /> Add some items to your cart.
        </h2>
        <div className="flex w-full flex-col border-opacity-50">
          <div className="divider">Try...</div>
          <GoBack color="secondary" />
        </div>
      </div>

      <Image
        src="/emptyCart.svg"
        alt="empty cart image"
        width={300}
        height={300}
        className=""
      />
    </div>
  );
};

export default CartEmpty;
