"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import PartialSearch from "@/lib/PartialSearch";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  function performChange(item: string = "", action: string) {
    let size = searchParams.get("Size") || null;
    let country = searchParams.get("Country") || null;
    let categories = searchParams.get("Categories") || null;
    let pet = searchParams.get("Pet") || null;
    let searchString = searchParams.get("searchString") || null;

    let label = "searchString";

    let url = PartialSearch({
      size,
      country,
      categories,
      pet,
      label,
      searchString,
    } as any);

    if (
      item === "" ||
      item === "Clear" ||
      action === "remove" ||
      item == null
    ) {
      console.log("clear");
      router.push("shop/search?" + url);
    }
    console.log(url);

    if (action === "add") {
      // router.push("shop/search?" + "searchString" + "=" + search + url);
      router.push("shop/search?" + "searchString" + "=" + search + "&" + url);
    }
  }

  return (
    <div className="form-control mx-auto my-4 max-w-fit ">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          performChange(search, "add");
        }}
      >
        <div className="input-group ">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            type="text"
            value={search}
            placeholder="Search…"
            className="input-bordered input-accent input  focus:outline-none focus:ring-1 focus:ring-accent	"
          />
          <button type="submit" className="btn-primary btn btn-square ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
