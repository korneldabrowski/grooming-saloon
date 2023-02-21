"use client";
import React from "react";
import usePerformChange from "./search/usePerformChange";

interface CategoryProps {
  label: string;
  title: string;
  items: string[];
}

interface PartialSearchProps {
  size: string;
  country: string;
  categories: string;
  pet: string;
  label: string;
}

const Category = ({ label, title, items }: CategoryProps) => {
  const performChange = usePerformChange({ label: label });

  return (
    <div className="form-control mx-auto justify-center  font-exo">
      <label className="label text-end">
        <span className="label-text">{label}</span>
      </label>
      <div className="dropdown-hover dropdown   ">
        <label
          tabIndex={0}
          className="btn-primary btn m-1 w-32 border-2  border-base-300 text-base-100 hover:scale-110  "
        >
          {title}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu   glass w-44 rounded-md  p-2 shadow"
        >
          {items.map((item) => (
            <li key={item} className="relative z-50">
              <button
                className="hover:scale-110 hover:bg-secondary  hover:font-semibold "
                onClick={() => {
                  performChange(item, "add");
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
