import Categories from "./Categories";
import SearchBar from "./SearchBar";

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

const CategoriesWrapper = () => {
  return (
    <div className="  pt-12 ">
      <div className="relative mx-auto grid max-w-fit grid-cols-2 gap-x-2 sm:mr-auto sm:flex sm:flex-row">
        <Categories
          petTypes={petShop.pet_types}
          sizes={petShop.sizes}
          countries={petShop.countries}
          categoriess={petShop.categories}
        />
      </div>
      <SearchBar />
    </div>
  );
};

export default CategoriesWrapper;
