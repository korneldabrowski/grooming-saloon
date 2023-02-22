"use client";
import React from "react";

import { useSearchParams } from "next/navigation";

import usePerformChange from "../../../hooks/usePerformChange";

interface CategoryProps {
  label: string;
  title: string;
  items: string[];
}

const SearchCategory = ({ label, title, items }: CategoryProps) => {
  const searchParams = useSearchParams();

  const performChange = usePerformChange({ label: label });

  return (
    <>
      <label className="label-text label mb-0  text-neutral-content">
        {label}
      </label>

      <div className=" collapse-arrow collapse mt-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary font-semibold text-primary-content">
          {searchParams?.get(label.split(" ")[0]) || title}
        </div>
        <div className="scrollbarClass collapse-content mb-0 h-72 overflow-y-scroll bg-primary p-0 pb-0 text-primary-content overflow-x-hidden scrollbar-thumb-info ">
          <ul className="menu mr-2 flex w-full justify-start  overflow-hidden rounded-md bg-secondary   ">
            {items.map((item) => (
              <li
                key={item}
                className={`relative flex w-full ${
                  searchParams?.get(label.split(" ")[0]) === item
                    ? " font-bold"
                    : ""
                }`}
              >
                <button
                  className=" hover:scale-110  hover:bg-accent hover:font-semibold hover:text-base-100 "
                  onClick={() => {
                    if (searchParams?.get(label.split(" ")[0]) === item) {
                      performChange("", "remove");
                      return;
                    }

                    performChange(item, "add");
                  }}
                >
                  {item}
                  {searchParams?.get(label.split(" ")[0]) === item && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="#3abff8"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchCategory;
