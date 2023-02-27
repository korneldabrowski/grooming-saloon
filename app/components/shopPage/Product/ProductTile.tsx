import React from "react";

import AddItem from "app/components/shopPage/Product/AddItem";
import { Product } from "types/types";
import Image from "next/image";

const ProductTile: React.FC<Product> = (product) => {
  return (
    <div className="flex flex-col bg-primary/10">
      <div className=" card relative  mx-auto mb-12 flex w-11/12 flex-col  justify-center  p-4 sm:w-full md:w-3/4 xl:flex-row">
        <Image
          width={400}
          height={600}
          quality={80}
          // src={product.product_image}
          src="https://picsum.photos/600/400"
          alt="product picture"
          className="w-full "
        />

        <div className="card-body prose-xl mx-auto mt-0 w-full pt-2 font-maven  prose-headings:text-6xl">
          <h2 className="card-title relative z-10 mb-0 font-bold">
            {product.product_name}
          </h2>

          {product.discounted && (
            <p className=" mt-0">
              <span className="badge-warning badge badge-lg   font-exo font-bold">
                -
                {Math.round(
                  ((product.old_price - product.price) / product.old_price) *
                    100
                ).toFixed(2)}
                %
              </span>
              <span className="badge-error badge badge-lg   font-exo font-bold">
                SALE
              </span>
            </p>
          )}

          <p className=" mx-0 w-full  px-0 ">
            {product.product_description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor vitae eius enim blanditiis iure nobis quod
            dolore a, sint illo possimus? Voluptates rem nemo sunt.
          </p>

          <div className="card-actions  flex-col justify-end pt-4 ">
            <div className="mt-auto flex w-full  flex-auto flex-col items-end justify-end sm:flex-row">
              <p className="m-0 p-0 text-start text-xs font-bold text-neutral">
                {product.discounted && (
                  <span className="text-start  text-6xl font-bold  text-error">
                    <span className="text-base font-bold text-neutral line-through">
                      {product.old_price.toFixed(2)}
                    </span>{" "}
                    {product.price && product.price.toFixed(2)}
                  </span>
                )}
                {!product.discounted && (
                  <span className=" text-start  text-4xl font-bold  ">
                    {product.price && product.price.toFixed(2)}
                  </span>
                )}{" "}
                <span className=" text-base ">PLN</span>
              </p>
              <AddItem product={product} />
            </div>

            <div className="ml-auto mt-0 flex  ">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`mask mask-star-2 ${
                    i < Math.round(product.rating)
                      ? "bg-yellow-300"
                      : "bg-gray-300"
                  } p-3`}
                />
              ))}
              <p className=" text-xs ">{product.rating} out of 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
