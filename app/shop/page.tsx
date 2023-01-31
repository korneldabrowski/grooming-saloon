import React from "react";
import Header from "../components/Header";
import MiniHeader from "./MiniHeader";
const page = () => {
  return (
    <main className="font-maven  ">
      <Header>
        <>
          <button className="font-bold px-4 py-2 border-dashed	flex gap-x-2 border-orange-500/70 border-[3px] rounded-full text-base tems-center text-orange-500/80 hover:text-black hover:bg-orange-300/50 hover:border-orange-400">
            4
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </>
      </Header>

      <MiniHeader />

      <div className="h-screen"></div>
      <div className="bg-[#fffded]">
        <div className="max-w-screen-xl  mx-auto"></div>
      </div>
    </main>
  );
};

export default page;
