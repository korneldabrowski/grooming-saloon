import React from "react";
import RecommendedList from "./RecommendedList";

import { Product } from "../../components/store/productListSlice";

const MainSection = ({
  products,
  title,
  header,
  order = "first",
  search = "",
}: {
  products: Product[];
  title: string;
  header: string;
  order?: string;
  search?: string;
}) => {
  return (
    <div>
      <h2
        id="recommended"
        className="text-center  font-exo text-4xl font-semibold"
      >
        {title}
      </h2>

      <RecommendedList
        noItems={4}
        products={products}
        title={header}
        description=""
        order={order}
        search={search}
      />
    </div>
  );
};

export default MainSection;
