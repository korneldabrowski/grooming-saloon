import React from "react";

import Link from "next/link";

interface Props {
  category: string;
  price: number;
  id: string;
  name: string;
  description: string;
  oldPrice: number;
  discounted: boolean;
  image: string;
  rating: number;
}

const ProductTile = ({
  category,
  price,
  id,
  name,
  description,
  oldPrice,
  discounted,
  image,
  rating,
}: Props) => {
  return (
    <div className="card-compact card w-96 bg-base-100 shadow-xl">
      <figure>
        <Link href={`/shop/product/${id}`}>
          <img src={image} alt="product picture" />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>

        <div className="card-actions justify-end pt-4">
          <p className="text-start text-xs font-bold text-neutral">
            {discounted && (
              <span className="text-start  text-3xl font-bold  text-error">
                <span className="text-sm font-bold text-neutral line-through">
                  {oldPrice.toFixed(2)}
                </span>{" "}
                {price && price.toFixed(2)}
              </span>
            )}
            {!discounted && (
              <span className="text-start  text-3xl font-bold  ">
                {price && price.toFixed(2)}
              </span>
            )}{" "}
            <span className="text-xs ">PLN</span>
          </p>
          <button className=" btn-accent btn  ">Add to cart!</button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
