import React from "react";

import CategoriesWrapper from "app/components/shopPage/Search/categories/CategoriesWrapper";

const page = () => {
  return (
    <div>
      Categories
      {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
      {/* @ts-expect-error Server Component */}
      <CategoriesWrapper />
    </div>
  );
};

export default page;
