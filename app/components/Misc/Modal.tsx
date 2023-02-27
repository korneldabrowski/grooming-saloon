"use client";
import Link from "next/link";
import React, { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState("open");

  type Modals = {
    open: string;
    closed: string;
  };
  const modals: Modals = {
    open: "modal-open",
    closed: "",
  };
  return (
    <article className="prose  ">
      {open === "open" && (
        <div
          className={`modal ${
            modals[open as keyof typeof modals]
          } glass z-[9999]`}
        >
          <div className=" modal-box relative bg-info">
            <label
              htmlFor="my-modal-3"
              className="btn btn-primary btn-sm btn-circle absolute right-2 top-2 text-primary-content"
              onClick={() => {
                setOpen("closed");
              }}
            >
              ✕
            </label>
            <h2 className="mt-0">Still in production!</h2>
            <p>
              Please keep in mind that this version is still under construction
              and may lead to unexpected behaviour and errors. <br />
              I'm working on it!
            </p>
            <p className="font-semibold">
              Most of the features should be working correctly, but keep in mind
              that everything is hosted on a free tiers of services, so it may
              take a while to load.{" "}
              <Link href="/shop" className="link-neutral link">
                Check out the shop!
              </Link>
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

export default Modal;
