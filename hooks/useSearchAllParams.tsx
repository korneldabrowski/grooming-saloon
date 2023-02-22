"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function useSearchAllParams() {
  const searchParams = useSearchParams();

  const size = searchParams?.get("Size") || null;
  const country = searchParams?.get("Country") || null;
  const categories = searchParams?.get("Categories") || null;
  const pet = searchParams?.get("Pet") || null;
  const searchString = searchParams?.get("searchString") || null;
  const page = Number(searchParams?.get("page")) || 1;

  return { size, country, categories, pet, searchString, page };
}
