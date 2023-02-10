import React, { useState } from "react";

const Pagination = ({
  noItems,
  pageNumber,
  setPage,
  productLength,
  scroll,
}: {
  noItems: number;
  pageNumber: number;
  setPage: (page: number) => void;
  productLength: number;
  scroll: (name: string) => void;
}) => {
  const startIndex = (pageNumber - 1) * noItems + 1;
  const endIndex = startIndex + noItems - 1;
  const total = productLength;
  return (
    <div>
      <p className="text-center text-sm">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">{startIndex}</span> -{" "}
          <span className="font-semibold text-gray-900 ">
            {endIndex > total ? total : endIndex}{" "}
          </span>
          of{" "}
          <span className="font-semibold text-gray-900 ">{productLength}</span>{" "}
          Entries
        </span>
      </p>
      <div className=" flex justify-center">
        <div className="btn-group flex items-stretch ">
          <button
            className="btn-outline btn  "
            onClick={() => {
              setPage(pageNumber - 1);
              scroll("#category");
            }}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPage(pageNumber);
              scroll("#category");
            }}
          >
            <input
              type="number"
              className="btn-outline  btn w-24 "
              placeholder={pageNumber.toString()}
              value={pageNumber.toString()}
              onChange={(e) => {
                // if (parseInt(e.target.value) >= 1) {
                setPage(parseInt(e.target.value));
                scroll("#category");

                // }
              }}
            />
          </form>

          <button
            className="btn-outline btn  "
            onClick={() => {
              setPage(pageNumber + 1);
              scroll("#category");
            }}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <p className="text-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          <span className="font-semibold text-gray-900 ">{pageNumber}</span> out
          of{" "}
          <span className="font-semibold text-gray-900 ">
            {Math.ceil(productLength / noItems)}
          </span>
        </span>
      </p>
    </div>
  );
};

export default Pagination;
