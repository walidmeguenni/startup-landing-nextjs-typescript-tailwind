import React, { useState } from "react";
import { NavLink, Logo, MenuToggle } from ".";
import {  useScrollPosition } from "../packages/hooks";

const Navbar: React.FC = () => {
  const scrollPosition = useScrollPosition();
  return (
    <nav
      className={`fixed scroll-smooth hover:scroll-auto flex sm:justify-between items-center  w-full z-10 sm:px-32 ss:px-5 px-4 transition ease-in-out delay-[0s] duration-[0.3s] ${
        scrollPosition > 5
          ? "bg-white shadow-custom py-[15px]"
          : "py-[25px] bg-transparent"
      }`}
    >
      <Logo />
      <NavLink />
      <MenuToggle/>
    </nav>
  );
};

export default Navbar;
