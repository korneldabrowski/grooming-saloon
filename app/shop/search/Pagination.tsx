import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  itemNumber: number;
  noItems: number;
  pageNumber: any;
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
      breakLinkClassName="btn btn-disabled btn-outline btn-xs sm:btn-md rounded-l-none rounded-r-none"
      nextLabel="NEXT >>"
      nextLinkClassName="btn btn-primary  rounded-l-none  btn-xs sm:btn-md "
      className=" btn-group mx-auto my-4 flex justify-center overflow-hidden "
      onPageChange={pageChange}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="<< PREVIOUS"
      forcePage={Number(pageNumber) - 1}
      previousLinkClassName="btn btn-primary rounded-r-none  btn-xs sm:btn-md "
      activeLinkClassName=" bg-secondary  "
      // initialPage={Number(pageNumber) - 1}
      pageLinkClassName="btn btn-outline rounded-l-none rounded-r-none  btn-xs sm:btn-md"
      containerClassName="btn-group "
    />
  );
};

export default Pagination;
