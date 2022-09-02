import React from "react";
import { Clients, SubscriptionForm } from "../components";
const Banner: React.FC = () => {
  return (
    <section
      id="Home"
      className="flex flex-col sm:text-left text-center pt-28 ss:pl-32 pl-4 h-screen w-full bg-[url('../public/assets/images/banner-bg.png')] bg-center bg-no-repeat  bg-cover "
    >
      <h1 className="font-arvo font-bold ss:text-[48px] text-[36px] ss:leading-[70px] leading-[58px] max-w-[546px] tracking-[-1px] text-nightBlue ">
        A Creative way to grow your Exciting Business ideas
      </h1>
      <p className="font-dmSans font-normal ss:text-[18px] text-[14px] ss:leading-[42px] leading-[36px] max-w-[470px] text-nightBlue lg:pl-[25px] pl-0 mt-5 ">
        Get your tests delivered at let home collect sample from the victory of
        the managements that supplies best design system guidelines ever.
      </p>
      <div className="mt-[34px] ">
        <SubscriptionForm />
      </div>
      <div className="mt-8 ">
        <Clients />
      </div>
    </section>
  );
};

export default Banner;
