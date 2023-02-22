"use client";
import React, { useState, useEffect, useTransition } from "react";
import { Product } from "types/types";

import MiniTile from "app/components/shopPage/Product/MiniTile";
import ItemNotFound from "app/components/Misc/404 Elements/ItemNotFound";

import useSearchAllParams from "hooks/useSearchAllParams";

import scroll from "lib/scrollTo";
import Pagination from "./Pagination";
import usePerformChange from "hooks/usePerformChange";
import cn from "lib/cn";

const RecommendedList = ({
  products,
  noItems = 10,
  itemNumber = 0,
}: {
  products: Product[];
  noItems: number;
  itemNumber: number;
}) => {
  // If there are no products found, return the ItemNotFound component
  if (products.length === 0) return <ItemNotFound />;

  // Set the size, country, categories, pet, and searchString to the value
  // from the search parameters, or null if that parameter is not set
  const { size, country, categories, pet, searchString, page } =
    useSearchAllParams();

  const [pageNumber, setPageNumber] = useState(page);

  // When the size, country, categories, pet, or searchString changes,
  // reset the page number
  useEffect(() => {
    setPageNumber(page);
  }, [size, country, categories, pet, searchString]);

  // Set the page number to the correct value if it is NaN or a negative number
  // or greater than the number of pages.

  const setPageRoute = usePerformChange({ label: "page" });

  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  function performChange(event: { selected: number }) {
    let item = event.selected + 1;
    scroll();
    setIsFetching(true);

    setPageNumber(item);

    startTransition(() => {
      setPageRoute(item.toString(), "add");
    });

    setIsFetching(false);
  }

  return (
    <div>
      <Pagination
        noItems={noItems}
        itemNumber={itemNumber}
        pageNumber={pageNumber}
        pageChange={performChange}
      />
      <div
        className={cn(
          "mx-auto flex flex-wrap content-center items-stretch justify-center gap-x-10 gap-y-10  pt-12 pb-12 sm:px-4",
          isMutating ? " opacity-70 blur-sm " : " opacity-100 blur-0"
        )}
      >
        {products.map((product: Product) => {
          return (
            <MiniTile
              key={product._id}
              id={product._id}
              name={product.product_name}
              price={product.price}
              oldPrice={product.old_price}
              discounted={product.discounted}
              image={product.product_image}
              rating={product.rating}
            />
          );
        })}
      </div>

      <Pagination
        noItems={noItems}
        itemNumber={itemNumber}
        pageNumber={pageNumber}
        pageChange={performChange}
      />
    </div>
  );
};

export default RecommendedList;
