import React from "react";
import { Masonry } from "../components";

const Bolg: React.FC = () => {
  return (
    <section
      id="Blog"
      className="flex justify-center items-center flex-col py-[70px] px-8"
    >
      <div className="text-center">
        <span className="font-dmSans font-medium text-[16px] text-secondary">
          Ideal solutions for you
        </span>
        <h2 className="font-arvo font-bold text-[24px] text-trappedDarkness tracking-[0.5px] mt-5">
          Go beyond ultimate features
        </h2>
      </div>
      <Masonry />
    </section>
  );
};

export default Bolg;
