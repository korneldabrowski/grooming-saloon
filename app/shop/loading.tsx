"use client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <Skeleton width={1200} height={200} count={3} />;
}
