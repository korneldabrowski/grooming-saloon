import { connectToDatabase } from "@/lib/mongodb";
import React from "react";

import HomePage from "./HomePage";

const page = async () => {
  return (
    <main className="">
      <HomePage />
    </main>
  );
};

export default page;
