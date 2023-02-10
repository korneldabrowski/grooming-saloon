export const dynamic = "force-dynamic";

import React from "react";
import CategoriesWrapper from "../CategoriesWrapper";
import RecommendedList from "../RecommendedList";

import { getProductByTypes } from "@/app/DataFetcher";

interface Props {
  searchParams?: {
    Categories?: string;
    Size?: string;
    Country?: string;
    Pet?: string;
    searchString?: string;
  };
}
export default async function Home(props: Props) {
  if (!props.searchParams) return;

  const categories: string = props.searchParams.Categories || "";
  const size: string = props.searchParams.Size || "";
  const country: string = props.searchParams.Country || "";
  const pet: string = props.searchParams.Pet || "";
  const searchString: string = props.searchParams.searchString || "";

  const recommendedProductList = JSON.parse(
    JSON.stringify(
      await getProductByTypes({ categories, size, country, pet, searchString })
    )
  );

  console.log(typeof recommendedProductList + ": all types");

  console.log(recommendedProductList.length);
  return (
    <div>
      <h1 className=" text-center text-6xl">Search Page</h1>
      <CategoriesWrapper />

      {recommendedProductList && (
        <RecommendedList noItems={10} products={recommendedProductList} />
      )}
    </div>
  );
}
