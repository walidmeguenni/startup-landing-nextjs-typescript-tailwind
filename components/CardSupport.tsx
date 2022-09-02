import Image from "next/image";
import React from "react";
import { CardSupportProps } from "../packages/interfaces";
import arrow from "../public/assets/images/icons/arrow.svg";
const CardSupport: React.FC<CardSupportProps> = (props) => {
  return (
    <div className="flex justify-start items-center flex-row mt-10">
      <Image
        src={props.image}
        alt={props.title}
        className="w-[60pw] h-[60px] object-contain"
      />
      <div className="flex flex-col ml-5">
        <div className="flex flex-row items-center justify-start">
          <h2 className="font-dmSans font-bold text-[18px] leading-[30px] text-trappedDarkness mr-[10px]">
            {props.title}{" "}
          </h2>
          <Image src={arrow} alt={props.title} />
        </div>
        <p className="font-dmSans font-normal text-[12px] ss:text-[16px] ss:leading-[26px] leading[16px] text-featurecolor max-w-[351px] mt-[10px]">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default CardSupport;
