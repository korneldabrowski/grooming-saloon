import React from "react";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  path: string;
};

const Header: React.FC<Props> = ({ children, path }) => {
  return (
    <div className="navbar sticky top-0 z-50 h-16 bg-neutral py-2  text-neutral-content   ">
      <div className="navbar-start  ">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-accent/90 p-2 font-medium shadow"
          >
            <li>
              <Link href="/">Home</Link>{" "}
            </li>

            <li tabIndex={0}>
              <a>
                Navigation
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className=" z-50 bg-accent p-2  shadow-xl">
                <li>
                  <Link href="/">Main Page</Link>{" "}
                </li>
                <li>
                  <Link href="/shop">Shop</Link>{" "}
                </li>
                <li>
                  <Link href="/shop">About Us</Link>{" "}
                </li>
                <li>
                  <Link href="/shop">Contact</Link>{" "}
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href={path}>
          <span className="btn-ghost btn p-0 text-lg normal-case text-secondary sm:p-2 sm:text-3xl">
            Barktiful Grooming
          </span>
        </Link>
      </div>
      <div className="navbar-center z-50 hidden lg:flex">
        <ul className=" menu menu-horizontal rounded-xl bg-accent/90 px-1 text-lg font-medium   ">
          <li className="hover:scale-110">
            <Link href="/">Home</Link>{" "}
          </li>
          <li tabIndex={0}>
            <a className="hover:scale-110 ">
              Navigation
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className=" z-50 bg-accent p-2  shadow-xl ">
              <li className=" hover:scale-110">
                <Link href="/">Main Page</Link>{" "}
              </li>
              <li className="hover:scale-110">
                <Link href="/shop">Shop</Link>{" "}
              </li>
              <li className="hover:scale-110">
                <Link href="/shop">About Us</Link>{" "}
              </li>
              <li className="hover:scale-110">
                <Link href="/shop">Contact</Link>{" "}
              </li>
            </ul>
          </li>
          <li>
            <a className="hover:scale-110">Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{children}</div>
    </div>
  );
};

export default Header;
