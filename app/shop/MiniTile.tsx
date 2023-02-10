import React from "react";

import Link from "next/link";

interface Props {
  id: string;
  price: number;
  name: string;
  oldPrice: number;
  discounted: boolean;
  image: string;
  rating: number;
}

const MiniTile = ({
  id,
  price,
  name,
  oldPrice,
  discounted,
  image,
  rating,
}: Props) => {
  return (
    <div className="card card-compact w-96   border-2 hover:scale-110 hover:shadow-2xl">
      <figure>
        <Link href={`/shop/product/${id}`}>
          <img src={image} alt="product picture" />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center font-bold">
          {name}
          {discounted && (
            <>
              <span className="badge-warning badge    font-exo font-bold">
                -{Math.round(((oldPrice - price) / oldPrice) * 100).toFixed(2)}%
              </span>
              <span className="badge-error badge font-exo font-bold">SALE</span>
            </>
          )}
        </h2>
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`mask mask-star-2 ${
                i < Math.round(rating) ? "bg-yellow-300" : "bg-gray-300"
              } p-3`}
            />
          ))}

          <p className=" text-xs">{rating} out of 5</p>
        </div>
        {discounted && (
          <p className="text-start text-xs font-medium">
            You save:{" "}
            <span className="text-sm font-bold">
              {(oldPrice - price).toFixed(2)}
            </span>{" "}
            PLN
          </p>
        )}

        <div className="card-actions mt-auto justify-end pt-4">
          <p className="text-start text-xs font-bold text-neutral">
            {discounted && (
              <span className="text-start  text-4xl font-bold  text-error">
                <span className="text-sm font-bold text-neutral line-through">
                  {oldPrice.toFixed(2)}
                </span>{" "}
                {price && price.toFixed(2)}
              </span>
            )}
            {!discounted && (
              <span className="text-start  text-2xl font-bold  ">
                {price && price.toFixed(2)}
              </span>
            )}{" "}
            <span className="text-xs ">PLN</span>
          </p>
          <Link href={`/shop/product/${id}`}>
            <button className=" btn-info btn hover:scale-110 ">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniTile;
