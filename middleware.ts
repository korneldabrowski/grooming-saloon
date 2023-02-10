import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  // const { nextUrl } = request;
  // const { searchParams } = new URL(nextUrl, `http://localhost:3000`);
  // const size = searchParams.get("Size") || "";
  // const country = searchParams.get("Country of Origin") || "";
  // const categories = searchParams.get("Categories") || "";
  // const pet = searchParams.get("Pet Type") || "";
  // const searchQuery = searchParams.get("s4r3ch") || "";
  // console.log(
  //   "size",
  //   size +
  //     " country: " +
  //     country +
  //     " categories: " +
  //     categories +
  //     " pet: " +
  //     pet +
  //     " searchQuery: " +
  //     searchQuery
  // );
  // const redirectUrl = new URL(
  //   `/shop/search${generateSearchString(
  //     size,
  //     country,
  //     categories,
  //     pet,
  //     searchQuery
  //   )}`,
  //   request.nextUrl
  // );
  // return NextResponse.redirect(redirectUrl);
};

function generateSearchString(
  size: string,
  country: string,
  categories: string,
  pet: string,
  searchQuery: string
) {
  let searchString = "/search?";
  if (size) searchString += `Size=${size}&`;
  if (country) searchString += `Country of Origin=${country}&`;
  if (categories) searchString += `Categories=${categories}&`;
  if (pet) searchString += `Pet Type=${pet}&`;
  if (searchQuery) searchString += `s4r3ch=${searchQuery}`;
  return searchString.slice(0, -1);
}

export const config = {
  matcher: "/shop/search",
};
