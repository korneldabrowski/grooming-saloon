export const dynamic = "force-dynamic";

import ProductTile from "../../ProductTile";

import React from "react";
import SearchBar from "../../SearchBar";
import { getProductByID } from "@/app/DataFetcher";
import GoBack from "@/components/GoBack";
import ProductAdditionalInfo from "./ProductAdditionalInfo";

export default async function Page({ params }: { params: { id: string } }) {
  const product = JSON.parse(
    JSON.stringify(await getProductByID({ id: params.id }))
  );
  return (
    <div>
      <SearchBar />
      <div className="my-12 flex justify-center text-2xl font-bold">
        <GoBack color="" />
      </div>
      <div className="mx-auto flex flex-col justify-center">
        {product && (
          <>
            <ProductTile {...product} />
            <ProductAdditionalInfo />
          </>
        )}
      </div>
    </div>
  );
}
