"use client";
import React from "react";

const SearchMobile = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-50 flex justify-end  bg-neutral px-10 sm:hidden  ">
      <div className="z-50 ">
        <input type="checkbox" id="hamburger" className="peer" hidden />

        <label
          htmlFor="hamburger"
          className="peer-checked:hamburger relative z-20 -mr-6 mt-2 block cursor-pointer overflow-hidden  px-2 py-4 sm:hidden"
        >
          <div className="m-auto h-1.5 w-8 rounded bg-primary shadow-2xl transition-all duration-300 peer-checked:bg-yellow-500"></div>
          <div className="m-auto mt-2  h-1.5 w-8 rounded bg-primary transition duration-300  peer-checked:bg-yellow-500"></div>
        </label>

        <div className="  absolute top-0 right-0 h-auto w-full translate-y-[-200%] rounded-md border-r border-b-4 border-l-amber-400 border-b-amber-400 bg-neutral pb-4 shadow-xl duration-1000 peer-checked:translate-y-0">
          <ul className="space-y-8 px-6 pt-24 text-center  text-amber-400">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
