import React from "react";

import RecommendedList from "./RecommendedList";

import { getRecommended } from "@/components/DataFetcher";

const Recommended = async (): Promise<React.ReactNode> => {
  const recommendedProductList = JSON.parse(
    JSON.stringify(await getRecommended())
  );

  if (!recommendedProductList) return <div>loadings...</div>;
  if (recommendedProductList.length === 0)
    return <div>No recommended items were found...</div>;

  console.log(typeof recommendedProductList + ": my types");

  return (
    <div className="">
      <h2 id="recommended" className="p-numberOfItems  text-4xl font-semibold">
        Recommended items, just for you!
      </h2>
      <div className="px-numberOfItems mx-auto flex flex-wrap content-center items-stretch justify-center gap-x-10  gap-y-10 pt-12 pb-12">
        <RecommendedList noItems={4} products={recommendedProductList} />
      </div>
    </div>
  );
};

export default Recommended;
