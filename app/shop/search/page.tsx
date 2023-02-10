// export const dynamic = "force-dynamic";

import React from "react";
import CategoriesWrapper from "../CategoriesWrapper";
import RecommendedList from "../RecommendedList";

import { getProductByTypes } from "@/components/DataFetcher";

interface Props {
  searchParams: {
    Categories: string;
    Size: string;
    Country: string;
    Pet: string;
    searchString: string;
  };
}
const Home = async (props: Props): Promise<React.ReactNode> => {
  let categories = props.searchParams.Categories || "";
  let size = props.searchParams.Size || "";
  let country = props.searchParams.Country || "";
  let pet = props.searchParams.Pet || "";
  let searchString = props.searchParams.searchString || "";

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
};

export default Home;
