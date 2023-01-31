import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-between text-xl font-exo p-4 sm:p-6 items-center sm:flex-row flex-col sm:gap-x-2 gap-y-2 sm:gap-y-0 bg-[#fffded]">
      <div className="flex-1 w-full">
        <div className="flex flex-col">
          <p className="text-3xl font-extrabold ">Bark-tiful Grooming</p>
          <p className="text-gray-800/50 text-base font-maven ">by Karolina</p>
        </div>
      </div>
      <div className="flex flex-1 text-sm sm:text-base  gap-x-4 text-orange-800/60">
        <button className="text-black">Home</button>
        <button>Who we are</button>
        <button>Services</button>
        <button>F.A.Q</button>
        <button>Contact</button>
      </div>
      <div className=" ">{children}</div>
    </div>
  );
};

export default Header;
