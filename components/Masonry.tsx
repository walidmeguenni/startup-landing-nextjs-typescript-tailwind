import Image from "next/image";
import React from "react";
import { BlogData } from "../constants";
import LearnMoreLink from "./LearnMoreLink";

const Masonry: React.FC = () => {
  return (
    <div className="sm:columns-2 md:columns-3 columns-1 gap-8 sm:mx-14 md:mx-20 mx-0 mt-[65px]">
      {BlogData.map((item, index) => (
        <div key={item.id} className="flex flex-col mb-3">
          <Image
            src={item.image}
            alt={item.title}
            className="w-full rounded-[5px]"
          />
          <h4 className="font-arvo font-bold text-[20px] text-trappedDarkness leading-normal mt-[15px]">
            {item.title}
          </h4>
          <p className="font-dmSans font-normal text-[16px] text-featurecolor leading-normal max-w-[334.24px] mt-[15px] ">
            {item.desc}
          </p>
          {item.extit && (
            <LearnMoreLink path="#!" style="mt-4 text-blueChaos" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
