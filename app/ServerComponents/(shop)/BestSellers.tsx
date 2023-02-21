import React from "react";
import { getRecommended } from "@/app/DataFetcher";
import ItemNotFound from "@/components/ItemNotFound";
import { Product } from "@/components/store/productListSlice";
import BestTile from "./BestTile";

const colors = ["red", "cyan", "green", "yellow", "blue"];
const shapes = ["circle", "square"];

async function getRecommendedItems() {
  const recommendedProductList = JSON.parse(
    JSON.stringify(await getRecommended())
  );
  return recommendedProductList;
}

const BestSellers = async (): Promise<React.ReactNode> => {
  const recommendedProductList = await getRecommendedItems();

  if (!recommendedProductList) return <div>loading...</div>;
  if (recommendedProductList.length === 0) return <ItemNotFound />;

  return (
    <div className=" relative mb-12">
      <div className="flex justify-between">
        <h2 className="text-4xl">Our best Selling Products</h2>
        <button className="btn-outline btn-warning btn ml-auto rounded-full border-4 border-dashed py-2 px-4  font-black">
          See more
        </button>
      </div>
      <div
        className="absolute bottom-10 left-1/2  z--50 h-44 w-full -translate-x-1/2 bg-primary
 sm:w-4/5 "
      ></div>

      <div className=" scrollbarClass relative mx-auto mt-12 flex w-full snap-x snap-mandatory gap-x-2 overflow-x-scroll scroll-smooth sm:w-4/5 sm:gap-x-10 ">
        {recommendedProductList.map((product: Product, index: number) => (
          <BestTile
            key={product._id}
            oldPrice={product.old_price || 0}
            price={product.price}
            title={product.product_name}
            image={product.product_image}
            color={colors[index % colors.length]}
            shape={shapes[index % shapes.length]}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
