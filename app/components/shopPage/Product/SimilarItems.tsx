import React from "react";
import { getProductByTypes } from "app/MongoDB/DataFetcher";
import MainSection from "app/components/shopPage/HomePage/MainSection";
import ItemNotFound from "app/components/Misc/404 Elements/ItemNotFound";

interface Props {
  category: string;
  pet: string;
}

async function getSimilarProducts({ category, pet }: Props) {
  const recommendedProductList = JSON.parse(
    JSON.stringify(
      await getProductByTypes({
        categories: category,
        pet,
      })
    )
  );
  return recommendedProductList;
}

export default async function SimilarItems<Promise>({ category, pet }: Props) {
  const products = await getSimilarProducts({ category, pet });

  if (!products) return <div>loading...</div>;
  if (products.length === 0) return <ItemNotFound />;

  return (
    <div>
      pet: {pet} <br />
      category: {category}
      <MainSection
        products={products}
        header="People who bought this also bought"
        title="Why don't you try..."
      />
    </div>
  );
}
