import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" relative mx-auto flex flex-col overflow-clip rounded-xl bg-info py-4 text-neutral sm:w-3/5 md:flex-row">
      <div className=" mx-auto  flex flex-1 flex-col gap-y-4 p-2 font-maven sm:p-10">
        <h1 className="bg text-3xl sm:text-6xl">Put a smile on your cat </h1>
        <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-2xl font-semibold text-transparent">
          Without hurting your bank account!
        </span>
        <h2 className="text-xl">
          Now, grab up to <span className="font-bold ">50% Off</span> on
          selected food!
        </h2>
        <button className="btn-accent btn-wide btn mx-auto  rounded-full  text-xl font-semibold text-base-100">
          Buy now
        </button>
      </div>
      <div className="relative flex-1 ">
        <Image
          width={200}
          height={100}
          src="/bottomLeftCat.png"
          alt="happy cat"
          className=" mx-auto mt-4   "
        />
      </div>
    </div>
  );
};

export default Banner;
