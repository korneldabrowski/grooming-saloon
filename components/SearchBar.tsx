"use client";
import React, { useState } from "react";
import usePerformChange from "../app/shop/search/usePerformChange";
const SearchBar = () => {
  const [search, setSearch] = useState("");

  const performChange = usePerformChange({ label: "searchString" });

  return (
    <div className="form-control mx-auto my-4  max-w-fit ">
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
            className="input-group-sm input-bordered input-accent input w-32  focus:outline-none focus:ring-1 focus:ring-accent	"
          />
          <button type="submit" className="btn-primary btn-square btn ">
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
