import React from "react";

import MainSection from "../ServerComponents/ShopPage/HomePage/MainSection";

import { getRecommended, getRecommendedByQuery } from "@/app/DataFetcher";

async function getRecommendedItems() {
  const recommendedProductList = JSON.parse(
    JSON.stringify(await getRecommended())
  );
  return recommendedProductList;
}

async function getRecommendedDogItems() {
  const recommendedProductList = JSON.parse(
    JSON.stringify(
      await getRecommendedByQuery({
        pet: "dog",
        discount: 40,
      })
    )
  );
  return recommendedProductList;
}

async function getRecommendedHamsterItems() {
  const recommendedProductList = JSON.parse(
    JSON.stringify(
      await getRecommendedByQuery({
        pet: "hamster",
        discount: 40,
      })
    )
  );
  return recommendedProductList;
}

const Recommended = async (): Promise<React.ReactNode> => {
  const recommendedProductList = await getRecommendedItems();
  const recommendedDogProductList = await getRecommendedDogItems();
  const recommendedHamsterProductList = await getRecommendedHamsterItems();

  if (
    !recommendedProductList ||
    !recommendedDogProductList ||
    !recommendedHamsterProductList
  )
    return <div>loading...</div>;

  return (
    <div className="mt-6">
      <MainSection
        products={recommendedProductList}
        header="Recommended"
        title="The best offers, picked just for you!"
      />
      <MainSection
        products={recommendedDogProductList}
        header="Recommended dog products"
        title="Check out our top dog products"
        order="last"
        search="dog"
      />

      <MainSection
        products={recommendedHamsterProductList}
        header="Recommended hamster products"
        title="Check out our top hamster products"
        order="first"
        search="hamster"
      />
    </div>
  );
};

export default Recommended;
