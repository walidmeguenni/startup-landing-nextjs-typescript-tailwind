import Image from "next/image";
import checkmark from "../public/assets/icon/SVG/check.svg";
import uncheckmark from "../public/assets/icon/SVG/uncheckmark.svg";

type CheckmarkProps = {
  checkmarkcricle: boolean;
  style?: string;
};
const Checkmarkcricle: React.FC<CheckmarkProps> = ({
  checkmarkcricle,
  style,
}) => (
  <li
    className={`flex justify-center items-center  min-h-[59px] border-b border-b-bordergray-1 before:relative before:top-[29px] before:right-[114px] before:content-[''] before:w-[15px] before:h-[1px] before:bg-bordergray-1 ${style} `}
  >
    <Image
      src={checkmarkcricle ? checkmark : uncheckmark}
      alt="checkmark"
      className="object-contain"
    />
  </li>
);
export default Checkmarkcricle;
