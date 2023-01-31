import React from "react";

const MiniHeader = () => {
  return (
    <div className="flex justify-around bg-[#FBF8D8] items-center py-4">
      <div>Online Shop</div>
      <div className="flex gap-x-4">
        <h2>Categories</h2>
        <h2>What's new</h2>
        <h2>Deals</h2>
        <h2>Delivery</h2>
      </div>
      <div className="text-orange-500 bg-gray-300/40 rounded-full px-3 py-1 flex">
        <input
          type="text"
          className="  bg-transparent outline-none "
          placeholder="Search product..."
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="flex items-center gap-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-orange-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <h2 className="">Account</h2>
      </div>
    </div>
  );
};

export default MiniHeader;
