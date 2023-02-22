"use client";
import PartialSearch from "@/lib/PartialSearch";
import { useRouter } from "next/navigation";
import scroll from "@/lib/scrollTo";

import useSearchAllParams from "./useSearchAllParams";
import { usePerformChangeProps, PartialSearchProps } from "@/types/types";

const usePerformChange = ({ label }: usePerformChangeProps) => {
  const router = useRouter();
  const { size, country, categories, pet, searchString } = useSearchAllParams();

  const performChange = (item: string, action: "add" | "remove"): void => {
    let sLabel = label.split(" ")[0];

    let url = PartialSearch({
      size,
      country,
      categories,
      pet,
      label,
      searchString,
    } as PartialSearchProps);

    if (action === "add") {
      scroll();
      router.push("shop/search?" + sLabel + "=" + item + "&" + url);
    } else if (action === "remove") {
      router.push("shop/search?" + url);
    }
  };

  return performChange;
};

export default usePerformChange;
