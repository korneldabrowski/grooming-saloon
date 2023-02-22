"use client";

import React from "react";
import { useRouter } from "next/navigation";
import scroll from "lib/scrollTo";

export default function GoBack({ color = "sucess" }: { color: string }) {
  const colorVariants: { [key: string]: string } = {
    sucess: "btn-success",
    info: "btn-info",
    primary: "btn-success",
    secondary: "btn-secondary",
    error: "btn-error",
    warning: "btn-warning",
    accent: "btn-accent",
  };

  const router = useRouter();

  const perfmormGoback = () => {
    router.back();
    setTimeout(() => {
      scroll();
      router.refresh();
    }, 10);
  };

  return (
    <button
      className={`${colorVariants[color]} btn-outline  btn flex gap-x-4    `}
      onClick={() => {
        perfmormGoback();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-8 w-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>

      <p className="text-xl">Go Back</p>
    </button>
  );
}
