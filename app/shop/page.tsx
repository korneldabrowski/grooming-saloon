import React from "react";

import Banner from "app/components/shopPage/HomePage/Banner";
import CategoriesWrapper from "app/components/shopPage/Search/categories/CategoriesWrapper";
import Recommended from "app/components/shopPage/Product/Recommended";
const page = async () => {
  return (
    <main className="bg-base-100 px-2 font-maven">
      <Banner />

      {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
      {/* @ts-expect-error Server Component */}
      <CategoriesWrapper />
      {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
      {/* @ts-expect-error Server Component */}
      <Recommended />
    </main>
  );
};

export default page;
