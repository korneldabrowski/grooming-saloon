"use client";
import React, { useRef } from "react";

import { Product } from "@/components/store/productListSlice";

import MiniTile from "./MiniTile";
import ItemNotFound from "@/components/ItemNotFound";
import Link from "next/link";

const RecommendedList = ({
  products,
  noItems,
  title,
  description,
  order,
  search,
}: {
  products: Product[];
  noItems: number;
  title: string;
  description: string;
  order: string;
  search: string;
}) => {
  const scrollableRef = useRef<HTMLUListElement>(null);

  // If there are no products found, return the ItemNotFound component
  if (products.length === 0) return <ItemNotFound />;

  const orderVariants: Record<string, string> = {
    first: "sm:order-first",
    last: "sm:order-last",
  };

  function handleClick() {
    if (scrollableRef.current) {
      // Move the scrollbar bit to the right
      scrollableRef.current.scrollBy({
        left: 330,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="relative mx-auto flex w-full content-center  items-stretch  justify-center gap-x-10 gap-y-10 pt-12  pb-12 ">
      <div className=" mx-auto max-w-screen-2xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch ">
          <div
            className={` relative grid place-content-center rounded bg-primary/70 p-6 sm:p-8 ${orderVariants[order]} `}
          >
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-neutral sm:text-3xl ">
                  {title || "Recommended"}
                </h2>

                <p className="mt-4 text-base-content">
                  {description
                    ? description
                    : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet provident nulla error!"}
                </p>
              </header>

              <Link
                href={`shop/search?Pet=${search}`}
                className="btn-neutral btn-wide btn  mt-4  text-base-100"
              >
                Shop All
              </Link>
            </div>
          </div>

          <div className=" relative border-2 border-r-0 border-l-0 border-secondary shadow-sm lg:col-span-2 lg:py-8">
            <button
              onClick={handleClick}
              className="absolute top-1/2 right-0 z-20  transform animate-wiggle cursor-pointer text-info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            <ul
              ref={scrollableRef}
              className="scrollbarClass relative  grid grid-cols-2 overflow-x-scroll p-10"
            >
              <li className=" flex gap-x-4   sm:gap-x-10">
                {products.map((product: Product) => (
                  <MiniTile
                    key={product._id}
                    id={product._id}
                    name={product.product_name}
                    price={product.price}
                    oldPrice={product.old_price}
                    discounted={product.discounted}
                    image={product.product_image}
                    rating={product.rating}
                  />
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedList;
