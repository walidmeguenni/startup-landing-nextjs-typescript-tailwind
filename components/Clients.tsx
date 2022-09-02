import Image from "next/image";
import React from "react";
import { logos } from "../constants";

const Clients:React.FC = () => (
  <div className="flex flex-row flex-wrap items-center gap-4 ">
    <span className="font-dmSans text-gray ">Our Clients</span>
    {logos.map((logo) => (
      <div key={logo.name}>
        <Image
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
    ))}
  </div>
);

export default Clients;
