import React from "react";

import Banner from "./Banner";
import CategoriesWrapper from "./CategoriesWrapper";
import Recommended from "./Recommended";

const HomePage = async () => {
  return (
    <div className="bg-base-100 py-4 font-maven">
      <Banner />

      <CategoriesWrapper />
      {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
      {/* @ts-expect-error Server Component */}
      <Recommended />
    </div>
  );
};

export default HomePage;
