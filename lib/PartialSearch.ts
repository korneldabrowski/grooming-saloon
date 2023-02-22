import { PartialSearchProps } from "@/types/types";

export default function PartialSearch({
  size = "",
  categories = "",
  pet = "",
  country = "",
  searchString = "",
  label = "",
  page = "1",
}: PartialSearchProps) {
  let sLabel = label.split(" ")[0];

  let url = "";
  if (size) url += `&Size=${size}`;
  if (country) url += `&Country=${country}`;
  if (categories) url += `&Categories=${categories}`;
  if (pet) url += `&Pet=${pet}`;
  if (searchString) url += `&searchString=${searchString}`;
  if (page) url += `&page=${page}`;

  if (url.includes(sLabel)) {
    if (sLabel === "Categories")
      url = url.replace(`&Categories=${categories}`, "");
    if (sLabel === "Country") url = url.replace(`&Country=${country}`, "");
    if (sLabel === "Size") url = url.replace(`&Size=${size}`, "");
    if (sLabel === "Pet") url = url.replace(`&Pet=${pet}`, "");
    if (sLabel === "searchString")
      url = url.replace(`&searchString=${searchString}`, "");
  }

  if (url.includes("page")) url = url.replace(`&page=${page}`, "");

  return url;
}
