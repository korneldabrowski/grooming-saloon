export const dynamic = "force-dynamic";

import React from "react";
import CategoriesWrapper from "../../CategoriesWrapper";

export default function Home(props: unknown) {
  return (
    <main>
      <CategoriesWrapper />
      <pre>sdaasdad{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
}
