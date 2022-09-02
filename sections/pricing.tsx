import React from "react";
import { PricingTable } from "../components";
import { catagoryFeatures, PricingData } from "../constants";

const Pricing: React.FC = () => {
  return (
    <section
      id="Pricing"
      className="flex justify-center items-center flex-col w-full bg-gray-1 py-[30px]"
    >
      <div className="text-center">
        <span className="font-dmSans font-medium text-[16px] text-secondary">
          Ideal solutions for you
        </span>
        <h2 className="font-arvo font-bold text-[24px] text-trappedDarkness tracking-[0.5px] mt-5">
          Go beyond ultimate features
        </h2>
      </div>

      <main className="flex flex-row justify-center items-start py-[50px]">
        <ul className="pt-[170px] pr-[40px] hidden md:block ">
          {catagoryFeatures.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-left w-full min-h-[59px] font-dmSans font-medium text-[16px] leading-[21px] border-b border-b-bordergray-1  before:relative before:top-[29px] before:left-[164px] before:content-[' '] before:w-[26px] before:h-[1px] before:bg-bordergray-1 text-featurecolor overflow-hidden "
            >
              {item} 
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-4 ss:grid-cols-2 grid-cols-1 gap-[15px]">
          {PricingData.map((item, index) => (
            <PricingTable key={item.id} index={index} {...item} />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Pricing;
