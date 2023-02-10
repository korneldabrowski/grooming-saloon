import React from "react";

interface Props {
  oldPrice: string;
  price: string;
  title: string;
  image: string;
  color: string;
  shape: string;
}

const BestTile = ({ oldPrice, price, title, image, color, shape }: Props) => {
  const colorVariants: Record<string, string> = {
    red: "bg-error",
    cyan: "bg-info",
    green: "bg-green-200",
    yellow: "bg-success",
    blue: "bg-accent",
  };

  const shapeVariants: Record<string, string> = {
    circle: "rounded-t-full mt-12",
    square: "rounded-none",
  };

  return (
    <div>
      <div
        className={` relative mb-24 snap-start px-20 py-28 ${colorVariants[color]} ${shapeVariants[shape]}`}
      >
        <div className="absolute left-0 bottom-0 h-1/3 w-full bg-base-100 p-4">
          <h3 className="text-center text-lg font-bold">{title}</h3>
          <div className="flex gap-x-2 text-center">
            <span className=" text-neutral/70 line-through">{oldPrice}</span>
            <span className=" font-semibold text-error">{price} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTile;
