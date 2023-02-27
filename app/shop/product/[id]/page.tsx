export const dynamic = "force-dynamic";

import ProductTile from "app/components/shopPage/Product/ProductTile";

import React from "react";
import SearchBar from "app/components/shopPage/Search/SearchBar";
import { getProductByID } from "app/MongoDB/DataFetcher";
import GoBack from "app/components/shopPage/GoBack";
import ProductAdditionalInfo from "app/components/shopPage/Product/ProductAdditionalInfo";
import SimilarItems from "app/components/shopPage/Product/SimilarItems";

export default async function Page({ params }: { params: { id: string } }) {
  const product = JSON.parse(
    JSON.stringify(await getProductByID({ id: params.id }))
  );
  return (
    <div>
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
        {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
        {/* @ts-expect-error Server Component */}
        <SimilarItems category={product.categories} pet={product.pet_types} />
      </div>
    </div>
  );
}
