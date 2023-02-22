import React from "react";

import HomePage from "./HomePage";

const page = async () => {
  return (
    <main className="px-2">
      {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
      {/* @ts-expect-error Server Component */}
      <HomePage />
    </main>
  );
};

export default page;
