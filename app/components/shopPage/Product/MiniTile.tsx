import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import scroll from "lib/scrollTo";
import cn from "lib/cn";

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
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="card-compact card max-w-xs rounded-md  border-2 ">
      <figure>
        <Link onClick={scroll} href={`/shop/product/${id}`}>
          <Image
            width={300}
            height={300}
            quality={30}
            // src={image}
            src="https://picsum.photos/200/300"
            alt="product picture"
            className={cn(
              "transition duration-500 hover:scale-110 sm:h-72",
              isLoading ? " blur-sm" : " blur-0"
            )}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center font-bold">
          <Link href={`/shop/product/${id}`}>{name}</Link>
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

        <div className="card-actions mt-auto justify-center pt-4">
          <p className="text-end text-xs font-bold text-neutral">
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
            <button className=" btn-primary btn-wide btn hover:scale-110 ">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniTile;
