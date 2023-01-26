import React from "react";

const PageDivider = () => {
  return (
    <section className="flex  gap-x-64 gap-y-10  justify-around flex-wrap py-4">
      <div className="flex gap-x-4">
        <div className=" bg-red-500/50 px-12 py-8 relative">
          <img
            src="specialGrooming.png"
            alt="Women grooming dog"
            className="  absolute top-0 left-0"
          />
        </div>

        <h3 className="text-2xl">Special grooming </h3>
      </div>
      <div className="flex gap-x-4">
        <div className=" bg-cyan-500/50 px-12 py-8"></div>
        <h3 className="text-2xl">Bath</h3>
      </div>
      <div className="flex gap-x-4">
        <div className=" bg-green-500/50 px-12 py-8"></div>
        <h3 className="text-2xl">Teeth Cleaning</h3>
      </div>
      <div className="flex gap-x-4">
        <div className=" bg-yellow-500/50 px-12 py-8"></div>
        <h3 className="text-2xl">De-shredding</h3>
      </div>
      <div className="flex gap-x-4">
        <div className=" bg-blue-500/50 px-12 py-8"></div>
        <h3 className="text-2xl">Nail trimming</h3>
      </div>
    </section>
  );
};

export default PageDivider;
