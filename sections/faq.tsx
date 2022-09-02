import React from "react";
import { ButtonFaq, FaqItem } from "../components";

const Faq: React.FC = () => {
  return (
    <section
      id="Faq"
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
      <div className="mt-28 sm:mx-16 mx-6">
          <FaqItem/>
      </div>
      <ButtonFaq/>
    </section>
  );
};

export default Faq;
