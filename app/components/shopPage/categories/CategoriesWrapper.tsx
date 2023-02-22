import ResetButton from "app/components/shopPage/Search/ResetButton";
import SearchBar from "app/components/shopPage/Search/SearchBar";
import Category from "app/components/shopPage/categories/Category";
import SearchCategory from "app/components/shopPage/Search/SearchCategory";

const petShop = {
  categories: [
    "accessory",
    "bedding",
    "clothes",
    "equipment",
    "food",
    "grooming",
    "housing",
    "medicine",
    "snack",
    "supplements",
    "toys",
  ],
  countries: [
    "belgium",
    "germany",
    "japan",
    "poland",
    "Singapore",
    "Sri Lanka",
    "Turkey",
    "USA",
    "vietnam",
  ],
  sizes: ["extra_large", "large", "medium", "small", "extra_small"],
  pet_types: ["bird", "cat", "dog", "fish", "hamster", "rabbit"],
};

const categories = [
  {
    label: "Categories",
    title: "Categories",
    items: petShop.categories,
  },
  {
    label: "Country of Origin",
    title: "Country of Origin",
    items: petShop.countries,
  },
  { label: "Size", title: "Size", items: petShop.sizes },
  {
    label: "Pet Type",
    title: "Pet Type",
    items: petShop.pet_types,
  },
];

const CategoriesWrapper = ({
  categoryType = "normal",
}: {
  categoryType?: string;
}) => {
  return (
    <>
      {categoryType === "normal" && (
        <>
          <div id="category" className="mx-auto flex justify-center  pt-12 ">
            <div className="relative mx-auto grid  max-w-fit grid-cols-2 justify-center gap-x-2 sm:mr-auto sm:flex sm:flex-row ">
              {categories.map(({ label, title, items }) => (
                <Category
                  key={label}
                  items={items}
                  title={title}
                  label={label}
                />
              ))}
            </div>
          </div>

          <SearchBar />
        </>
      )}

      {categoryType === "side" && (
        <div>
          <div className=" flex flex-col gap-y-4">
            {categories.map(({ label, title, items }) => (
              <SearchCategory
                key={label}
                label={label}
                title={title}
                items={items}
              />
            ))}
          </div>
          <ResetButton />

          <SearchBar />
        </div>
      )}
    </>
  );
};

export default CategoriesWrapper;
