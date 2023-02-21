import PartialSearch, { PartialSearchProps } from "@/lib/PartialSearch";
import { useRouter } from "next/navigation";
import scroll from "@/lib/scrollTo";

import useSearchAllParams from "./useSearchAllParams";

interface PerformChangeProps {
  label: string;
}

const usePerformChange = ({ label }: PerformChangeProps) => {
  const router = useRouter();
  const { size, country, categories, pet, searchString } = useSearchAllParams();

  const performChange = (item: string, action: string) => {
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
