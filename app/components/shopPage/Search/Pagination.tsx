"use client";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  itemNumber: number;
  noItems: number;
  pageNumber: number;
  pageChange: any;
}

const Pagination = ({
  itemNumber,
  noItems = 10,
  pageNumber = 1,
  pageChange,
}: PaginationProps) => {
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(itemNumber / noItems));
  }, [itemNumber, noItems]);

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        breakLinkClassName="btn btn-disabled btn-outline btn-sm sm:btn-md rounded-l-none rounded-r-none"
        nextLabel=" >>"
        nextLinkClassName="btn btn-primary btn-square  rounded-l-none  btn-sm sm:btn-md "
        className=" btn-group mx-auto my-4 flex justify-center overflow-hidden "
        onPageChange={pageChange}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<< "
        forcePage={Number(pageNumber) - 1}
        previousLinkClassName="btn btn-primary rounded-r-none btn-square  btn-sm sm:btn-md "
        activeLinkClassName=" bg-secondary  "
        pageLinkClassName="btn btn-outline rounded-l-none rounded-r-none btn-sm sm:btn-md"
        containerClassName="btn-group "
      />
      <div className="text-center text-sm font-semibold">
        Total of {itemNumber} items.
        <div className=" dropdown dropdown-right dropdown-hover">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-xs btn-circle text-info"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content compact card rounded-box w-64  bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title text-sm">
                Why are these products displayed first?
              </h2>
              <p className="link-success link text-xs font-medium">
                Get to know our search engine and the way we position products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
