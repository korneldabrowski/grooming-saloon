"use client";
import React, { useState, useEffect } from "react";

import { Product } from "../(redux)/productListSlice";

import ProductTile from "./ProductTile";
import MiniTile from "./MiniTile";
import Pagination from "./Pagination";
import ItemNotFound from "@/components/ItemNotFound";

import { useSearchParams } from "next/navigation";

import scroll from "@/lib/scrollTo";

const RecommendedList = ({
  products,
  noItems,
}: {
  products: Product[];
  noItems: number;
}) => {
  const numberOfItems = noItems;

  // If there are no products found, return the ItemNotFound component
  if (products.length === 0) return <ItemNotFound />;

  const [pageNumber, setPageNumber] = useState(1);

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

  // When the size, country, categories, pet, or searchString changes,
  // reset the page number
  useEffect(() => {
    setPageNumber(1);
  }, [size, country, categories, pet, searchString]);

  // Set the page number to the correct value if it is NaN or a negative number
  // or greater than the number of pages.
  useEffect(() => {
    if (Number.isNaN(pageNumber)) {
      setPageNumber(pageNumber);
      return;
    }

    if (pageNumber <= 1) {
      setPageNumber(1);
      return;
    }
    if (pageNumber > products.length / numberOfItems) {
      setPageNumber(Math.ceil(products.length / numberOfItems));
      return;
    }
  }, [pageNumber]);

  return (
    <div className="">
      <div className="px-numberOfItems mx-auto flex flex-wrap content-center items-stretch justify-center gap-x-10  gap-y-10 pt-12 pb-12">
        {products
          .slice((pageNumber - 1) * numberOfItems, pageNumber * numberOfItems)
          .map((product: Product) => {
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

              // <ProductTile
              //   key={product._id}
              //   id={product._id}
              //   name={product.product_name}
              //   description={product.product_description}
              //   category={product.categories}
              //   price={product.price}
              //   discounted={product.discounted}
              //   oldPrice={product.old_price}
              //   image={product.product_image}
              //   rating={product.rating}
              // />
            );
          })}
      </div>
      <Pagination
        noItems={numberOfItems}
        pageNumber={pageNumber}
        setPage={setPageNumber}
        productLength={products.length}
        scroll={scroll}
      />
    </div>
  );
};

export default RecommendedList;
