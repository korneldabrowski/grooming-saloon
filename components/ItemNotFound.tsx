import React from "react";
import Image from "next/image";
import GoBack from "./GoBack";
const ItemNotFound = () => {
  return (
    <div className="relative mx-auto my-12 flex justify-center ">
      <div className="flex flex-col items-end  align-bottom">
        <h2 className=" text-xl ">
          Oopsie...We could not find what
          <br /> you were looking for.
        </h2>
        <div className="flex w-full flex-col border-opacity-50">
          <div className="divider">Try...</div>
          <GoBack color="error" />
        </div>
      </div>

      <Image
        src="/notFound.svg"
        alt="Not found picture"
        width={300}
        height={300}
        className=""
      />
    </div>
  );
};

export default ItemNotFound;
