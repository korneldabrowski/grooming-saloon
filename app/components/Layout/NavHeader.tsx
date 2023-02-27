import React from "react";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  path: string;
};

const NavHeader: React.FC<Props> = ({ children, path }) => {
  return (
    <nav className="navbar sticky top-0 z-[999] h-16 overflow-x-clip bg-neutral p-0 px-0 py-2 text-neutral-content sm:px-6   ">
      <div className="mr-auto p-0   ">
        <div className="dropdown z-50 lg:hidden">
          <ul className="menu menu-compact menu-horizontal bg-neutral sm:px-1">
            <li tabIndex={0}>
              <a className="p-0">
                Menu
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
              <ul className="bg-neutral p-2">
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
          </ul>
        </div>
      </div>
      <h1 className="btn-ghost btn   justify-end p-0 text-lg normal-case text-secondary sm:p-2 sm:text-3xl">
        <Link href={path}>Barktiful Grooming</Link>
      </h1>
      <div className="navbar-center z-50 hidden lg:mx-auto lg:flex">
        <ul className=" menu menu-horizontal rounded-xl bg-accent/90 px-1 text-lg font-medium   ">
          <li className="hover:scale-110">
            <Link href={path}>Home</Link>{" "}
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
          {path === "/" ? (
            <li>
              <a className="hover:scale-110">Item 3</a>
            </li>
          ) : (
            <li>
              <Link href="shop/search" className="hover:scale-110">
                Search
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="ml-auto flex">{children}</div>
    </nav>
  );
};

export default NavHeader;
