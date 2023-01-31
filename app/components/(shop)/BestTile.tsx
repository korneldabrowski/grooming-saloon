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
    red: "bg-red-200",
    cyan: "bg-cyan-200",
    green: "bg-green-200",
    yellow: "bg-yellow-200",
    blue: "bg-blue-200",
  };

  const shapeVariants: Record<string, string> = {
    circle: "rounded-t-full mt-12",
    square: "rounded-none",
  };

  return (
    <div>
      <div
        className={` mb-24 px-20 py-28 snap-start relative ${colorVariants[color]} ${shapeVariants[shape]}`}
      >
        <div className="absolute left-0 bottom-0 w-full h-1/3 bg-white p-4">
          <h3 className="font-bold text-lg text-center">{title}</h3>
          <div className="flex gap-x-2 text-center">
            <span className=" line-through text-black/70">{oldPrice}</span>
            <span className=" font-semibold text-red-500">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestTile;
