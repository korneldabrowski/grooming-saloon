"use client";

import { useRouter } from "next/navigation";

export default function Loading() {
  const router = useRouter();
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mx-auto mt-12 flex flex-col items-center justify-center">
      <div className="contenedor">
        <div className="text-center">
          <p className=" my-4 text-3xl font-bold">Taking too long? Try...</p>
          <button
            className="btn-outline btn btn-info btn-wide"
            onClick={() => router.refresh()}
          >
            Reload
          </button>
          <p>OR F5</p>
        </div>
        <div className="todo">
          <div className="dog">
            <span className="leg3"></span>
            <div className="body">
              <span className="cola"></span>
              <span className="leg"></span>
            </div>
            <div className="cabezota">
              <div className="orejas">
                <span className="orejitas"></span>
              </div>
              <div className="orejas3">
                <span className="orejitas3"></span>
              </div>
              <div className="cabeza">
                <span className="cabeza3"></span>
                <span className="ojos">
                  <span className="iris"></span>
                </span>
                <span className="nariz"></span>
                <span className="nariz3"></span>
              </div>
            </div>

            <div className="canasta"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
