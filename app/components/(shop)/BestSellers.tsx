import React from "react";
import BestTile from "./BestTile";

const BestProductData = [
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 1",
    image: "https://picsum.photos/200/300",
    shape: "circle",
    color: "red",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 2",
    image: "https://picsum.photos/200/300",
    shape: "square",
    color: "yellow",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 3",
    image: "https://picsum.photos/200/300",
    shape: "circle",
    color: "blue",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 4",
    image: "https://picsum.photos/200/300",
    shape: "square",
    color: "green",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 5",
    image: "https://picsum.photos/200/300",
    shape: "circle",
    color: "cyan",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 6",
    image: "https://picsum.photos/200/300",
    shape: "square",
    color: "red",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 7",
    image: "https://picsum.photos/200/300",
    shape: "circle",
    color: "yellow",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 8",
    image: "https://picsum.photos/200/300",
    shape: "square",
    color: "blue",
  },
  {
    oldPrice: "$100",

    price: "$50",
    title: "Product 9",
    image: "https://picsum.photos/200/300",
    shape: "circle",
    color: "green",
  },
  {
    oldPrice: "$100",
    price: "$50",
    title: "Product 10",
    image: "https://picsum.photos/200/300",
    shape: "square",
    color: "cyan",
  },
];

const BestSellers = () => {
  return (
    <div className=" relative mb-12">
      <div className="flex justify-between">
        <h2 className="text-4xl">Our best Selling Products</h2>
        <button className="btn-outline btn-warning btn ml-auto rounded-full border-4 border-dashed py-2 px-4  font-black">
          See more
        </button>
      </div>
      <div
        className="absolute bottom-10 left-1/2  z--50 h-44 w-full -translate-x-1/2 bg-primary
 sm:w-4/5 "
      ></div>

      <div className=" scrollbarClass relative mx-auto mt-12 flex w-full snap-x snap-mandatory gap-x-2 overflow-x-scroll scroll-smooth sm:w-4/5 sm:gap-x-10 ">
        {BestProductData.map((product) => (
          <BestTile {...product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
