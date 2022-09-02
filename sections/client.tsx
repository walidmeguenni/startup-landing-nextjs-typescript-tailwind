import Image from "next/image";
import React from "react";
import { LearnMoreLink } from "../components";
import clientImage from "../public/assets/images/clients.png"
const Client: React.FC = () => {
  return (
    <section className="flex justify-center items-center flex-col py-[70px] px-8">
      <div className="ss:ml-0 ml-2 text-center">
        <h1 className="font-arvo font-bold ss:text-[30px] text-[20px] ss:leading-[45px] leading-[30px] tracking-[-0.5px] text-trappedDarkness">
          Company who also worked us
        </h1>
        <p className="font-dmSans font-normal text-[12px] ss:text-[16px] ss:leading-[35px] leading-[25px] text-nightBlue  max-w-[623px] pt-[15px]">
          Every email, web page, and social media post makes an impression on
          your customers. With our software you can be confident it&apos;s
          impression.
        </p>
        <div className="mt-[30px]">
          <LearnMoreLink path="#" style="text-blueChaos" />
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <Image src={clientImage} width={1100} objectFit="contain" alt='client'/>
      </div>
    </section>
  );
};

export default Client;
