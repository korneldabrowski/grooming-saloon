import React from "react";
import Image from "next/image";

import PageItem from "./PageItem";

const PageDividerData = [
  {
    title: "Special grooming",
    image: "/specialGrooming.png",
    alt: "Special grooming",
    color: "red",
  },
  {
    title: "Bath",
    image: "/bathingDog.png",
    alt: "Dog in bath",
    color: "cyan",
  },
  {
    title: "Teeth Cleaning",
    image: "/teethCleaning.png",
    alt: "Dog with teeth cleaning",
    color: "green",
  },
  {
    title: "De-shredding",
    image: "/deShredding.png",
    alt: "Dog with de-shredding",
    color: "yellow",
  },
  {
    title: "Nail trimming",
    image: "/nailTrimming.png",
    alt: "Dog with nail trimming",
    color: "blue",
  },
];

const PageDivider = () => {
  return (
    <section className="flex gap-y-10 gap-x-10 lg:gap-x-40 px-4 sm:px-20 justify-around flex-wrap">
      {PageDividerData.map((item) => {
        return (
          <PageItem
            title={item.title}
            image={item.image}
            alt={item.alt}
            color={item.color}
            key={item.title}
          />
        );
      })}

      {/* <div className="flex flex-col sm:flex-row sm:gap-x-4 ">
        <div className=" bg-red-500/50 py-8 sm:px-12 sm:py-8 relative">
          <Image
            fill
            src="/specialGrooming.png"
            alt="Special grooming"
            className="absolute"
          />
        </div>
        <h3 className="sm:text-2xl text-md">Special grooming </h3>
      </div>
      <div className="flex gap-x-4">
        <div className=" bg-cyan-500/50 px-12 py-8 relative">
          <Image
            fill
            src="/bathingDog.png"
            alt="Dog in bath"
            className="absolute"
          />
        </div>

        <h3 className="text-2xl">Bath</h3>
      </div>
      <div className="flex gap-x-4">
        <div className=" bg-green-500/50 px-12 py-8"></div>
        <h3 className="text-2xl">Teeth Cleaning</h3>
      </div>
      <div className="flex gap-x-4">
        <div className=" bg-yellow-500/50 px-12 py-8"></div>
        <h3 className="text-2xl">De-shredding</h3>
      </div>
      <div className="flex gap-x-4 ">
        <div className=" bg-blue-500/50 px-12 py-8"></div>
        <h3 className="text-2xl">Nail trimming</h3>
      </div> */}
    </section>
  );
};

export default PageDivider;
