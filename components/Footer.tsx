import Link from "next/link";
import React from "react";
import { menuItems, footerNav } from "../constants";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <section id="" className="mt-20 flex flex-col bg-alpineGoat">
      <div className="flex flex-[1.5] flex-row justify-between flex-wrap mx-24 md:mt-0 mt-10 pt-[30px]">
        {menuItems.map((footerLink, index) => (
          <div
            key={index}
            className="flex flex-col ss:my-0 my-4 min-w-[150px] ss:mr-0 mr-4 sm:mb-0 mb-5"
          >
            <h4 className="font-dmSans font-bold text-[18px] leading-[27px] text-trappedDarkness mb-5">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.items.map((link, index) => (
                <li
                  key={link.label}
                  className={`font-dmSans font-medium text-[16px] leading-[24px] text-nightBlue hover:text-secondary cursor-pointer ${
                    index !== footerLink.items.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-24 flex flex-col sm:flex-row sm:justify-between justify-center items-center border-t border-t-bordergray-1 mt-16 py-8">
        <div className="flex items-center justify-center sm:justify-start sm:flex-row flex-col gap-4">
          <Logo />
          <p className="pt-2 font-dmSans font-normal text-trappedDarkness opacity-60 text-[14px] leading-normal">
            Copyright by 2022 RedQ, Inc
          </p>
        </div>
        <div>
          <ul className="flex flex-row md:mt-0 mt-6">
            {footerNav.map((item, index) => (
              <div key={index}>
                <Link href={item.path} key={index}>
                  <a
                    className={`font-dmSans font-normal text-[16px] leading-normal text-nightBlue ${
                      index === footerNav.length - 1 ? "mr-0" : "mr-7"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
