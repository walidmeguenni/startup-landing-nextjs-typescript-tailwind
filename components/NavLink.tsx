import Link from "next/link";
import React from "react";
import { NavbarListData } from "../constants";
import { useOnScreen } from "../packages/hooks";
const NavLink: React.FC = () => {

  const currentSection = useOnScreen(); 
  return (
    <ul className=" hidden sm:flex justify-start items-end flex-1 sm:ml-10 ml-0 sidebar">
      {NavbarListData.map(({ label, path }, index) => (
        <Link key={index} href={path} className="">
          <a
            className={`transition ease-in-out delay-[0s] duration-[0.3s] font-dmSans font-normal text-[16px] text-trappedDarkness 
           motion-safe:animate-fadeIn ${
             currentSection === label ? "text-secondary" : "text-nightBlue"
           }
            ${index === NavbarListData.length ? "mr-0" : "mr-8"}`}
          >
            {label}
          </a>
        </Link>
      ))}
    </ul>
  );
};
export default NavLink;
