"use client";
import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineChevronDoubleLeft } from "react-icons/hi";
import Link from "next/link";

const menus = [
  { url: "/", text: "home" },
  { url: "/", text: "about" },
  { url: "/", text: "testimonials" },
  { url: "/", text: "contact" },
];
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className={`${
          navbar
            ? "backdrop-filter backdrop-blur-sm border-b border-gray-200 bg-opacity-20"
            : "bg-transparent"
        } fixed py-12 px-6 mx-auto w-full lg:pt-[46px] lg:px-44`}
      >
        <div className="flex flex-row justify-between items-cente">
          <h1 className="font-bold text-sm lg:text-xl">Digital Agency</h1>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-11">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.url}
                    className="md:text-base lg:text-lg leading-[27.5%]"
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Overlay Start */}
          <nav
            className={`md:hidden absolute top-0 bg-white shadow-2xl w-80 h-screen z-50 ${
              show ? "left-0" : "-left-full"
            } transition-all duration-300`}
          >
            <ul className="flex flex-col py-12 px-6 gap-4">
              <div className="flex items-center justify-between mb-5">
                <h1 className="font-bold text-sm">Digital Agency</h1>
                <HiOutlineChevronDoubleLeft
                  onClick={() => setShow(false)}
                  className="w-5 h-[15.6px] cursor-pointer md:hidden"
                />
              </div>
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.url}
                    className="md:text-base lg:text-lg leading-[27.5%]"
                  >
                    {menu.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* Overlay End */}
          <HiOutlineMenu
            onClick={(prev) => setShow(!prev.show)}
            className={`w-5 h-[15.6px] cursor-pointer md:hidden ${
              show ? "hidden" : "block"
            } transition-all duration-300`}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
