import React from "react";

import Banner from "../ServerComponents/ShopPage/HomePage/Banner";
import CategoriesWrapper from "../ServerComponents/ShopPage/categories/CategoriesWrapper";
import Recommended from "./Recommended";
const page = async () => {
  return (
    <main className="bg-base-100 px-2 font-maven">
      <Banner />

      <CategoriesWrapper />
      {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
      {/* @ts-expect-error Server Component */}
      <Recommended />
    </main>
  );
};

export default page;
