import { featuresData } from "../constants";
import React from "react";
import { Card } from "../components";

const Features: React.FC = () => {
  return (
    <section
      id="Features"
      className="flex justify-center items-center flex-col w-full bg-sectionbackground py-[50px]"
    >
      <div className="text-center">
        <span className="font-dmSans font-medium text-[16px] text-secondary">
          Ideal solutions for you
        </span>
        <h2 className="font-arvo font-bold text-[24px] text-trappedDarkness tracking-[0.5px] mt-5">
          Go beyond ultimate features
        </h2>
      </div>
      <div className="grid md:grid-cols-3 ss:grid-cols-2 grid-cols-1 sm:border sm:border-bordergray mt-[35px]">
        {featuresData.map((feature, index) => (
          <Card key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
