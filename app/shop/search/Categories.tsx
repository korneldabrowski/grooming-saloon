"use client";

import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Category from "./Category";
interface CategoryProps {
  label: string;
  title: string;
  items: string[];
}

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
    <div className="   ">
      <div className=" flex flex-col gap-y-4">
        {categories.map(({ label, title, items }) => (
          <Category key={label} label={label} title={title} items={items} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
