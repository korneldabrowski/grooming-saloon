import React from "react";

import Banner from "./Banner";
import CategoriesWrapper from "./CategoriesWrapper";
import Recommended from "./Recommended";

const HomePage = ({ results }: any) => {
  return (
    <div className="bg-base-100 py-4">
      <Banner />

      <CategoriesWrapper />
      <Recommended />
    </div>
  );
};

export default HomePage;
