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
  );
};

export default Pagination;
