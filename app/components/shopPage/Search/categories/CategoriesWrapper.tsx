import ResetButton from "app/components/shopPage/Search/ResetButton";
import SearchBar from "app/components/shopPage/Search/SearchBar";
import Category from "app/components/shopPage/Search/categories/Category";
import SearchCategory from "app/components/shopPage/Search/categories/SearchCategory";
import { getCategories } from "app/MongoDB/DataFetcher";

export const revalidate = 3600; // revalidate every hour

import React from "react";
async function getCategoriesArray() {
  const categories = JSON.parse(JSON.stringify(await getCategories()));
  return categories;
}

const CategoriesWrapper = async ({
  categoryType = "normal",
}: {
  categoryType?: string;
}) => {
  const { categories, sizes, countries, petTypes } = await getCategoriesArray();

  const petShop = new Map(
    Object.entries({
      Categories: categories,
      Size: sizes,
      "Country of Origin": countries,
      "Pet Type": petTypes,
    })
  );

  return (
    <>
      {categoryType === "normal" && (
        <>
          <div className="pt-12 ">
            <div className="relative mx-auto grid  max-w-fit grid-cols-2 justify-center gap-x-2  sm:mr-auto sm:flex sm:flex-row ">
              {Array.from(petShop.entries()).map(([label, items]) => (
                <Category key={label} items={items} label={label} />
              ))}
            </div>
          </div>

          <SearchBar />
        </>
      )}

      {categoryType === "side" && (
        <div>
          <div className=" flex flex-col gap-y-4">
            {Array.from(petShop.entries()).map(([label, items]) => (
              <SearchCategory key={label} items={items} label={label} />
            ))}
          </div>
          <ResetButton />

          <SearchBar />
        </div>
      )}
    </>
  );
};

export default CategoriesWrapper;
