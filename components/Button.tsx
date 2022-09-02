import React from "react";

const Button: React.FC = () => {
  return (
    <button
      type="button"
      className="py-3 px-8 bg-secondary hover:bg-nightBlue text-white font-dmSans font-bold font-[16px] overflow-hidden rounded-[8px] outline-none sm:ml-4"
    >
      Get Started
    </button>
  );
};

export default Button;
