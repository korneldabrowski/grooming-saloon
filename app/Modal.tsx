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
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />

      {open === "open" && (
        <div className={`modal ${modals[open as keyof typeof modals]} glass`}>
          <div className=" modal-box relative bg-info">
            <label
              htmlFor="my-modal-3"
              className="btn-sm btn-circle btn absolute right-2 top-2"
              onClick={() => {
                console.log("clicked");
                setOpen("closed");
              }}
            >
              ✕
            </label>
            <h1>Still in production!</h1>
            <p>
              Please keep in mind that this version is still under construction
              and may lead to unexpected behaviour and errors. <br />
              I'm working on it!
            </p>
            <p className="font-semibold">
              Some functionalities of the shop, search by category & search by
              name are working!{" "}
              <Link href="/shop" className="link-neutral link">
                Check me out!
              </Link>
            </p>
          </div>
        </div>
      )}
    </article>
  );
};

export default Modal;
