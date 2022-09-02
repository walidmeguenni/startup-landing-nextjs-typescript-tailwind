import Image from "next/image";
import React from "react";
import { CardSupport } from "../components";
import { supportCardData } from "../constants";
import support from "../public/assets/images/support-2.png";
const Support: React.FC = () => {
  return (
    <section
      id="Support"
      className="flex sm:flex-row flex-col items-center justify-center py-9"
    >
      <div className="ss:ml-0 ml-2">
        <h1 className="font-arvo font-bold ss:text-[36px] text-[20px] ss:leading-[55px] leading-[45px] tracking-[-0.5px] max-w-[469px]  text-trappedDarkness">
          Do you need help? Our support team ready to help you
        </h1>
        <p className="font-dmSans font-normal text-[12px] ss:text-[16px] ss:leading-[36px] leading-[25px] text-nightBlue  max-w-[470px] pt-[25px]">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
        </p>
        <div>
          {supportCardData.map((item, index) => (
            <CardSupport key={index} {...item} />
          ))}
        </div>
      </div>
      <div>
        <Image
          src={support}
          alt="supports"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Support;
