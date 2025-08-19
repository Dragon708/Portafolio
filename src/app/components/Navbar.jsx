"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import LenguajeContext from "../Providers/LenguajeProvider";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";
import SwitchLanguaje from "./SwitchLanguaje";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { text, EmailSectionref, ProjectsSectionRef, AboutSectionRef } =
    useContext(LenguajeContext);
  const navLinks = [
    {
      title: text.About,
      path: AboutSectionRef,
    },
    {
      title: text.Projects,
      path: ProjectsSectionRef,
    },
    {
      title: text.Contact,
      path: EmailSectionref,
    },
  ];
  return (
    <nav className="fixed mx-auto border dark:border-[#33353F] border-slate-200 top-0 left-0 right-0 z-10 dark:bg-[#121212] bg-[#f7f4f7] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* <Link
          href={"/"}
          className="text-2xl md:text-5xl text-black dark:text-white font-semibold">
          {text.Portafolio}
        </Link> */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded dark:border-slate-200 dark:text-slate-200 text-slate-700 hover:text-white hover:border-white">
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
        <div className="flex  justify-between items-center p-2">
          <div className="menu flex gap-2 md:w-auto">
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
