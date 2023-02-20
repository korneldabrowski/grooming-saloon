"use client";
import React from "react";
import Link from "next/link";

const ResetButton = () => {
  return (
    <Link href={"shop/search?"}>
      <button className="btn-info btn-block btn-sm btn my-4 rounded-sm">
        RESET
      </button>
    </Link>
  );
};

export default ResetButton;
