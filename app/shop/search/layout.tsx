import CategoriesWrapper from "app/components/shopPage/Search/categories/CategoriesWrapper";
import SearchMobile from "./SearchMobile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-clip sm:flex">
      <div className=" scrollbarClass  top-16  hidden  w-32 bg-accent p-4  px-4  overflow-x-hidden scrollbar-thumb-info sm:sticky  sm:flex sm:w-64  ">
        {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
        {/* @ts-expect-error Server Component */}
        <CategoriesWrapper categoryType="side" />
      </div>

      {/* Workaround because in React, there's a restriction around 
      importing Server Components inside Client Components; 
      SearchMobile is a client component and CategoriesWrapper is Server  */}
      <SearchMobile>
        {/* Below ts exception is required as TypeScript doesn't support async Server Components yet*/}
        {/*  @ts-expect-error Server Component */}
        <CategoriesWrapper categoryType="side" />
      </SearchMobile>

      <div className="w-full">{children}</div>
    </div>
  );
}
