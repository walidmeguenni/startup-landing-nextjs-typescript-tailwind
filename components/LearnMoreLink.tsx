import Image from "next/image";
import Link from "next/link";
import React from "react";
import LearnMore from "../public/assets/icon/SVG/Vector.svg";

type LearnMoreLink = {
  path: string;
  style?: string;
};
const LearnMoreLink: React.FC<LearnMoreLink> = ({ path, style }) => {
  return (
    <Link href={path}>
      <a className={`${style}`}>
        <span className="font-dmSans font-medium text-[15px] leading-5 mr-[10px]">
          Learn More
        </span>
        <span className="translate-x-[3px] hover:animate-svg">
          <Image src={LearnMore} alt="learnMore" className="object-contain " />
        </span>
      </a>
    </Link>
  );
};

export default LearnMoreLink;
