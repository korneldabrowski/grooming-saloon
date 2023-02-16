import React from "react";

import { useSearchParams, useRouter } from "next/navigation";

import PartialSearch from "@/lib/PartialSearch";

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
  const searchParams = useSearchParams();
  const router = useRouter();

  function performChange(item: string = "", action: string) {
    let size = searchParams.get("Size") || null;
    let country = searchParams.get("Country") || null;
    let categories = searchParams.get("Categories") || null;
    let pet = searchParams.get("Pet") || null;
    let searchString = searchParams.get("searchString") || null;

    let sLabel = label.split(" ")[0];

    let url = PartialSearch({
      size,
      country,
      categories,
      pet,
      label,
      searchString,
    } as PartialSearchProps);

    if (action === "add") {
      router.push("shop/search?" + sLabel + "=" + item + "&" + url);
    } else if (action === "remove") {
      router.push("shop/search?" + url);
    }
  }

  return (
    <div className="form-control z-20 font-exo">
      <label className="label text-end">
        <span className="label-text">{label}</span>
      </label>
      <div className="dropdown dropdown-hover  ">
        <label
          tabIndex={0}
          className="btn-accent btn m-1 w-32 text-base-100 hover:scale-110  "
        >
          {searchParams.get(label.split(" ")[0]) || title}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu   glass w-44 rounded-md  p-2 shadow"
        >
          {items.map((item) => (
            <li key={item} className="relative">
              <button
                className="hover:scale-110  hover:bg-accent hover:font-semibold hover:text-base-100 "
                onClick={() => {
                  performChange(item, "add");
                }}
              >
                {item}
              </button>
              {searchParams.get(label.split(" ")[0]) === item && (
                <button
                  onClick={() => {
                    performChange("", "remove");
                  }}
                  className="hover:scale-120 btn-square btn-xs absolute right-0 top-1/2 h-full -translate-y-1/2 transform	 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="red"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
