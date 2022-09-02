import React from "react";
import { PricingProps } from "../packages/interfaces";
import ButtonPlan from "./ButtonPlan";
import Checkmarkcricle from "./Checkmarkcricle";

const PricingTable: React.FC<PricingProps> = (props) => {
  return (
    <div
      className={`${
        props.is_recommended ? "relative top-[-24px] shadow-sm" : ""
      }`}
    >
      {props.is_recommended && (
        <span className="font-dmSans font-bold text-[16px] leading-[18.23px] px-[55px] py-[9px] rounded-t-[8px] uppercase text-white bg-joustBlue">
          recommended
        </span>
      )}
      <div
        className={`border border-bordergray-1 flex flex-col text-center rounded-lg pt-[30px] pb-[66px] ${
          props.is_recommended
            ? "bg-white border-none mt-[1px] rounded-t-none"
            : ""
        }`}
      >
        <h2 className="font-dmSans font-medium text-[16px] leading-5 opacity-50 text-trappedDarkness px-[30px]">
          {props.title}
        </h2>
        <h1 className="font-dmSans font-bold text-[26px] leading-[34px] tracking-[-0.55px] text-trappedDarkness pt-[25px] px-[30px]">
          ${props.amount}/
          <span className="font-medium text-[17px] leading-[22px]">per mo</span>
        </h1>

        <Checkmarkcricle
          checkmarkcricle={props.library_access}
          style="mt-[60px]"
        />
        <Checkmarkcricle checkmarkcricle={props.multiple_user} />
        <Checkmarkcricle checkmarkcricle={props.refund_policy} />
        <Checkmarkcricle checkmarkcricle={props.google_analytics} />
        <Checkmarkcricle checkmarkcricle={props.support} />
        <Checkmarkcricle
          checkmarkcricle={props.refund_policy}
          style="before:content-none border-none pl-[16px]"
        />
        <div className="px-[30px]">
          <ButtonPlan />
        </div>
        <span className="font-dmSans font-normal text-[15px] leading-[20px] opacity-50 text-trappedDarkness mt-[25px]">
          {props.trial_period} days free trial
        </span>
      </div>
    </div>
  );
};

export default PricingTable;
