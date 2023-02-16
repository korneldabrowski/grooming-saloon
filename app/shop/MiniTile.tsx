import React from "react";

import Link from "next/link";
import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

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
    <div className="card card-compact border-2 hover:scale-105 hover:shadow-2xl">
      <figure>
        <Link href={`/shop/product/${id}`}>
          <Image
            width={400}
            height={300}
            quality={40}
            // loading="lazy"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(400, 300)
            )}`}
            src={`https://source.unsplash.com/400x300/?${name}`}
            alt="product picture"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center font-bold">
          <Link href={`/shop/product/${id}`}>{name}</Link>
          {discounted && (
            <>
              <span className="badge badge-warning    font-exo font-bold">
                -{Math.round(((oldPrice - price) / oldPrice) * 100).toFixed(2)}%
              </span>
              <span className="badge badge-error font-exo font-bold">SALE</span>
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
            <button className=" btn btn-info hover:scale-110 ">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniTile;
