import React from "react";
import { SectionHeaderProps } from "../packages/interfaces";

const SectionHeader: React.FC<SectionHeaderProps> = (props) => {
  return (
    <React.Fragment>
      <h1
        className={`font-arvo font-bold 
        ss:text-[ ${props.sizeHead} px] text-[ ${props.sizeHead - 12} px]
        ss:leadingHead-[ ${props.leadingHead} px] leadingHead-[ ${
          props.leadingHead - 12
        }px] 
        max-w-[ ${props.witdthHead}px] trackingHead-[ ${props.trackingHead}px]
         text-nightBlue`}
      >
        {props.title}
      </h1>
      <p
        className={`font-dmSans font-normal
          ss:text-[${props.sizeText} px] text-[ ${props.sizeText - 4}px]
        ss:leadingHead-[ ${props.leadingText}px] leadingHead-[ ${
          props.leadingHead - 8
        }px] 
        max-w-[ ${props.witdthText}px]
        
          text-trappedDarkness lg:pl-[ ${props.pl}px] pl-0 mt-5`}
      >
        {props.description}
      </p>
    </React.Fragment>
  );
};

export default SectionHeader;
