export const dynamic = "force-dynamic";

import ProductTile from "../../ProductTile";

import React from "react";
import SearchBar from "../../SearchBar";
import { getProductByID } from "@/app/DataFetcher";
import GoBack from "@/components/GoBack";

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
      <div className="mx-auto flex justify-center">
        {product && (
          <ProductTile
            // key={product._id}
            // id={product._id}
            // name={product.product_name}
            // description={product.product_description}
            // category={product.categories}
            // price={product.price}
            // pet_type={product.pet_type}
            // countries={produict.countries}
            // discounted={product.discounted}
            // oldPrice={product.old_price}
            // image={product.product_image}
            // rating={product.rating}
            {...product}
          />
        )}
      </div>
    </div>
  );
}
