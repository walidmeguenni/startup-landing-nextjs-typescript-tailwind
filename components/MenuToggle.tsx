import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { NavbarListData } from '../constants';
import { useOnScreen } from '../packages/hooks';
import menu from "../public/assets/icon/SVG/menu.svg";
import close from "../public/assets/icon/SVG/close.svg";

const MenuToggle: React.FC= () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const currentSection = useOnScreen();
  return (
    <div className="sm:hidden flex justify-end items-center flex-1">
      <Image
        src={isMenuOpen ? close : menu}
        alt="menu"
        className="object-contain cursor-pointer "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <ul
        className={`${
          !isMenuOpen ? "hidden" : "flex"
        } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl justify-end items-start flex-1 flex-col bg-white shadow-md
        `}
      >
        {NavbarListData.map(({ label, path }, index) => (
          <Link key={index} href={path}>
            <a
              className={`transition ease-in-out delay-[0s] duration-[0.3s] font-dmSans font-normal text-[16px] text-trappedDarkness 
                    motion-safe:animate-fadeIn ${
                      currentSection === label
                        ? "text-secondary"
                        : "text-nightBlue"
                    }
                      ${index === NavbarListData.length ? "mb-0" : "mb-4"}`}
            >
              {label}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default MenuToggle