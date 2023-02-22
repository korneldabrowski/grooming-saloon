import CategoriesWrapper from "../../ServerComponents/ShopPage/categories/CategoriesWrapper";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full sm:flex">
      <div className=" scrollbarClass  top-16  hidden  w-32 bg-accent p-4  px-4  overflow-x-hidden scrollbar-thumb-info sm:sticky  sm:flex sm:w-64  ">
        <CategoriesWrapper categoryType="side" />
      </div>

      <div className="w-full">{children}</div>
    </div>
  );
}
