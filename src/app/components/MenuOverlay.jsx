import React from "react";
import NavLink from "./NavLink";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguaje from "./SwitchLanguaje";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 gap-2 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <li>
        <SwitchTheme />
      </li>
      <li>
        <SwitchLanguaje />
      </li>
    </ul>
  );
};

export default MenuOverlay;
