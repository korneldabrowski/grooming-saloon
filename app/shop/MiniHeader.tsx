import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const MiniHeader = () => {
  return (
    <div className="navbar glass sticky top-[56px]  z-40 flex h-fit flex-col py-4 text-neutral sm:flex-row sm:px-24 ">
      <div className="navbar-start  ">
        <Link href={"/shop"}>
          <span className="btn-ghost btn p-0 text-lg normal-case text-neutral sm:p-2 sm:text-2xl">
            // Online Shop //
          </span>
        </Link>
      </div>
      <div className="navbar-center z-50 hidden gap-x-2  lg:flex">
        <Link href="/shop/categories">
          <span className=" btn-accent  btn text-base-100">Categories</span>
        </Link>

        <Link href="/shop">
          <span className="btn-accent  btn text-base-100">What's new</span>
        </Link>

        <Link href="/shop">
          <span className="btn-accent  btn text-base-100">Deals</span>
        </Link>

        <Link href="/shop">
          <span className="btn-accent btn  text-base-100">Delivery</span>
        </Link>
      </div>
      <div className="navbar-end">
        <SearchBar />
      </div>
    </div>
  );
};

export default MiniHeader;
