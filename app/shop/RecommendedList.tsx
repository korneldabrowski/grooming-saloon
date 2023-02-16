"use client";
import React, { useState, useEffect } from "react";

import { Product } from "../(redux)/productListSlice";

import MiniTile from "./MiniTile";
import Pagination from "./Pagination";
import ItemNotFound from "@/components/ItemNotFound";

import { useSearchParams, useRouter } from "next/navigation";

import scroll from "@/lib/scrollTo";
import PartialSearch from "@/lib/PartialSearch";

interface PartialSearchProps {
  size: string;
  country: string;
  categories: string;
  pet: string;
}

const RecommendedList = ({
  products,
  noItems,
  itemNumber,
}: {
  products: Product[];
  noItems: number;
  itemNumber: number;
}) => {
  const numberOfItems = noItems;

  // If there are no products found, return the ItemNotFound component
  if (products.length === 0) return <ItemNotFound />;

  // Below code is temporary for as long as the NextJS 13 is in beta and the documentation is incomplete
  // Get the search parameters
  const searchParams = useSearchParams();

  // Set the size, country, categories, pet, and searchString to the value
  // from the search parameters, or null if that parameter is not set
  let size = searchParams.get("Size") || null;
  let country = searchParams.get("Country") || null;
  let categories = searchParams.get("Categories") || null;
  let pet = searchParams.get("Pet") || null;
  let searchString = searchParams.get("searchString") || null;
  let page = searchParams.get("page") || 1;

  const [pageNumber, setPageNumber] = useState(page);

  // When the size, country, categories, pet, or searchString changes,
  // reset the page number
  useEffect(() => {
    setPageNumber(page);
  }, [size, country, categories, pet, searchString]);

  // Set the page number to the correct value if it is NaN or a negative number
  // or greater than the number of pages.

  const router = useRouter();

  function performChange(item: number = 1, action: string) {
    //this makes sure that user can't go to a page that doesn't exist,
    // for example page 0 or page 1000
    if (item <= 0 || item > Math.ceil(itemNumber / numberOfItems)) return;

    let size = searchParams.get("Size") || null;
    let country = searchParams.get("Country") || null;
    let categories = searchParams.get("Categories") || null;
    let pet = searchParams.get("Pet") || null;
    let searchString = searchParams.get("searchString") || null;
    let page = searchParams.get("page") || 1;

    let url = PartialSearch({
      size,
      country,
      categories,
      pet,
      searchString,
      page,
    } as PartialSearchProps);

    setPageNumber(item);

    router.push("shop/search?" + "page=" + item + "&" + url);
  }

  useEffect(() => {
    if (Number.isNaN(pageNumber)) {
      setPageNumber(pageNumber);
      return;
    }

    if (pageNumber <= 1) {
      setPageNumber(1);
      return;
    }
    if (pageNumber > itemNumber / numberOfItems) {
      setPageNumber(Math.ceil(itemNumber / numberOfItems));
      return;
    }
  }, [pageNumber]);

  return (
    <div className="">
      <div className="px-numberOfItems mx-auto flex flex-wrap content-center items-stretch justify-center gap-x-10  gap-y-10 pt-12 pb-12">
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
        noItems={numberOfItems}
        pageNumber={pageNumber}
        setPage={performChange}
        productLength={itemNumber}
        scroll={scroll}
      />
    </div>
  );
};

export default RecommendedList;
