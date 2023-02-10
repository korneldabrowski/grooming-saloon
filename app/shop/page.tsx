import React from "react";

import HomePage from "./HomePage";

const page = async () => {
  return (
    <main className="">
      {/* @ts-expect-error Server Component */}
      <HomePage />
    </main>
  );
};

export default page;
