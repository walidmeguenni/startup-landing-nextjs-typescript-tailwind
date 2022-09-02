import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import LearnMoreLink from "./LearnMoreLink";
type featuresProps = {
  icon: StaticImageData;
  path: string;
  title: string;
  description: string;
  index: number;
};
const Card: React.FC<featuresProps> = (props) => {
  const { icon, path, title, description, index } = props;
  return (
    <div
      className={`sm:transition sm:ease-in-out sm:delay-150 sm:hover:-translate-y-1  sm:duration-300 pl-[50px] pt-[60px] sm:hover:bg-white sm:hover:z-[1] sm:hover:shadow-sm ${
        index < 2 || (index > 2 && index < 5)
          ? "sm:border-r sm:border-r-bordergray"
          : ""
      } ${index < 3 ? "sm:border-b sm:border-b-bordergray" : ""}
      `}
    >
      <Image
        src={icon}
        alt={path}
        width={70}
        height={70}
        className="object-contain"
      />
      <h4 className="font-dmSans font-bold text-[18px] text-trappedDarkness leading-[30px] mt-[30px]">
        {title}
      </h4>
      <p className="font-dmSans font-normal text-[16px] text-featurecolor max-w-[265px] mt-[10px] mr-[60px]">
        {description}
      </p>
      <div className="mt-[30px] mb-[60px]">
      <LearnMoreLink path="#"/>
      </div>
    </div>
  );
};

export default Card;
