import Image from "next/image";
import React from "react";
import { ListSupport } from "../constants";
import Support from "../public/assets/images/support.png";
import CheckmarkCircle from "../public/assets/icon/SVG/CheckmarkCircle.svg"
const customerSupport: React.FC = () => {
  return (
    <section className="flex justify-center items-start sm:flex-row flex-col-reverse py-10 ">
      <div className="ss:pt-0 pt-[45px]">
        <Image
          src={Support}
          alt="supports"
          className="w[800px] h-[770px] object-contain"
        />
      </div>
      <div className="sm:pl-0 pl-4 ss:text-left text-center">
        <h1 className="font-arvo font-bold ss:text-[36px] text-[20px] ss:leading-[55px] leading-[45px] tracking-[1px] max-w-[600px]  text-trappedDarkness">
          Customer support is our main priority with their hundred percent
          satisfaction.
        </h1>
        <p className="font-dmSans font-normal text-[12px] ss:text-[16px] ss:leading-[36px] leading-[25px] text-nightBlue  max-w-[470px] pt-[25px]">
          Get your tests delivered at let home collect sample from the victory
          of the managments that supplies best design system guidelines ever.
        </p>
        <div className="grid ss:grid-cols-2 grid-cols-1 pt-[25px]">
          {ListSupport.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <Image
                src={CheckmarkCircle}
                alt="supports"
                className="object-contain"
              />
              <span className="font-dmSans font-medium ss:text-[16px] text-[12px] ss:leading-[45px] leading-[30px] text-nightBlue">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default customerSupport;
