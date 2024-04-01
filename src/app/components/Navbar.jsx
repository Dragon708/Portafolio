"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguaje from "./SwitchLanguaje";
import LenguajeContext from "../Providers/LenguajeProvider";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { text } = useContext(LenguajeContext);
  const navLinks = [
    {
      title: text.About,
      path: "#about",
    },
    {
      title: text.Projects,
      path: "#projects",
    },
    {
      title: text.Contact,
      path: "#contact",
    },
  ];
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 dark:bg-[#121212] bg-[#f7f4f7] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-black dark:text-white font-semibold">
          {text.Portafolio}
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex  justify-between items-center p-2">
          <div className="menu hidden md:flex gap-2 md:w-auto">
            <SwitchTheme />
            <SwitchLanguaje />
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
