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
    <section className="flex flex-wrap justify-around gap-y-10 gap-x-10 p-4 sm:px-20 lg:gap-x-40">
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
    </section>
  );
};

export default PageDivider;
