"use client";
import React, { useState } from "react";
import Category from "./Category";
import SearchBar from "./SearchBar";

const Categories = ({
  categoriess,
  countries,
  sizes,
  petTypes,
}: {
  categoriess: string[];
  countries: string[];
  sizes: string[];
  petTypes: string[];
}) => {
  const [category, setCategory] = useState("Categories");
  const [country, setCountry] = useState("Country of Origin");
  const [size, setSize] = useState("Size");
  const [petType, setPetType] = useState("Pet Type");

  const categories = [
    {
      label: "Categories",
      title: category,
      items: categoriess,
      setTitle: setCategory,
    },
    {
      label: "Country of Origin",
      title: country,
      items: countries,
      setTitle: setCountry,
    },
    { label: "Size", title: size, items: sizes, setTitle: setSize },
    {
      label: "Pet Type",
      title: petType,
      items: petTypes,
      setTitle: setPetType,
    },
  ];

  return (
    <div id="category" className="  pt-12 ">
      <div className="relative mx-auto grid max-w-fit grid-cols-2 gap-x-2 sm:mr-auto sm:flex sm:flex-row">
        {categories.map(({ label, title, items, setTitle }) => (
          <Category key={label} items={items} title={title} label={label} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
