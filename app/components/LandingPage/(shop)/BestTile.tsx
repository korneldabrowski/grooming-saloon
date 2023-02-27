import React from "react";
import { BestTileProps } from "types/types";
import cn from "lib/cn";
import Image from "next/image";

const BestTile = ({
  oldPrice,
  price,
  title,
  image,
  color,
  shape,
}: BestTileProps) => {
  const colorVariants: Record<string, string> = {
    red: "bg-error",
    cyan: "bg-info",
    green: "bg-purple-200",
    yellow: "bg-success",
    blue: "bg-accent",
  };

  const shapeVariants: Record<string, string> = {
    circle: "rounded-t-full  mt-12",
    square: "rounded-md",
  };

  return (
    <div className="flex  flex-col">
      <div
        className={cn(
          " relative z-10  snap-start overflow-hidden px-20 py-12 pt-28 ",
          colorVariants[color],
          shapeVariants[shape]
        )}
      >
        <Image
          fill
          className=" absolute top-0 left-0 -z-10 h-full w-full object-cover  opacity-50 hue-rotate-30"
          alt="product image"
          // src={image}
          src="https://picsum.photos/200/300"
        />
      </div>
      <div className=" mb-24 w-full bg-base-100 p-4">
        <h3 className="text-center text-lg font-bold">{title}</h3>
        <div className="flex gap-x-2 text-center">
          <span className=" text-neutral/70 line-through">{oldPrice}</span>
          <span className=" font-semibold text-error">{price} </span>
        </div>
      </div>
    </div>
  );
};

export default BestTile;
