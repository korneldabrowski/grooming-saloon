export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import RecommendedList from "./SearchList";

import {
  getProductByTypes,
  getSizeOfCollectionByTypes,
} from "@/app/DataFetcher";

interface Props {
  searchParams?: {
    Categories?: string;
    Size?: string;
    Country?: string;
    Pet?: string;
    searchString?: string;
    page?: number;
  };
}
export default async function Home(props: Props) {
  if (!props.searchParams) return;

  const categories: string = props.searchParams.Categories || "";
  const size: string = props.searchParams.Size || "";
  const country: string = props.searchParams.Country || "";
  const pet: string = props.searchParams.Pet || "";
  const searchString: string = props.searchParams.searchString || "";
  const page: number = props.searchParams.page || 1;

  const recommendedProductList = JSON.parse(
    JSON.stringify(
      await getProductByTypes({
        categories,
        size,
        country,
        pet,
        searchString,
        page,
      })
    )
  );

  const sizeOfCollection = JSON.parse(
    JSON.stringify(
      await getSizeOfCollectionByTypes({
        categories,
        size,
        country,
        pet,
        searchString,
      })
    )
  );

  return (
    <div>
      <h3 id="category" className=" text-center text-2xl">
        Search...
      </h3>

      <Suspense fallback={<p className="text-6xl">Loading...</p>}>
        <RecommendedList
          noItems={10}
          products={recommendedProductList}
          itemNumber={sizeOfCollection}
        />
      </Suspense>
    </div>
  );
}
