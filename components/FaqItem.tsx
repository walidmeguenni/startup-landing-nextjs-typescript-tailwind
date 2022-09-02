import Image from "next/image";
import React from "react";
import { FaqData } from "../constants";
import munis from "../public/assets/icon/SVG/munis.svg";
import plus from "../public/assets/icon/SVG/plus.svg";

const FaqItem: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(0);

  return (
    <>
      {FaqData.map((item, index) => (
        <div
          id="accordion-collapse"
          data-accordion="collapse"
          key={item.id}
          className={`w-full grid grid-cols-3.5 sm:gap-16 gap-6 border-b-2  ${
            isOpen === index
              ? "border-b-trappedDarkness"
              : "border-b-bordergray "
          } mb-10 pb-10`}
        >
          <h4 className="font-dmSans font-medium text-[15px] ss:text-[20px] leading-normal tracking-[-0.5px] text-trappedDarkness max-w-[450px]">
            {item.title}
          </h4>
          <p
            className={`font-dmSans font-normal  text-[12px]  ss:text-[16px] leading-normal text-featurecolor max-w-[470px] overflow-hidden   answer_wrapper ${
              isOpen === index ? "open" : ""
            }`}
          >
            {item.contents}
          </p>
          <div
            className="cursor-pointer transition-all delay-[4s] duration-[4s] focus:h-auto"
            onClick={() => setIsOpen(index)}
          >
            <Image src={isOpen === index ? munis : plus} alt="object-contain" />
          </div>
        </div>
      ))}
    </>
  );
};

export default FaqItem;
