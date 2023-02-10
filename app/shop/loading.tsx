"use client";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="lg:1/2 xl:1/3 mx-auto my-36 flex flex-col justify-center space-y-5 rounded-2xl bg-accent p-4 sm:w-2/3">
      <div className="h-96 animate-pulse rounded-lg bg-primary"></div>
      <div className="space-y-3">
        <div className="h-3 w-3/5 animate-pulse rounded-lg bg-primary"></div>
        <div className="h-3 w-4/5 animate-pulse rounded-lg bg-primary"></div>
        <div className="h-3 w-2/5 animate-pulse rounded-lg bg-primary"></div>
      </div>
    </div>
  );
}
