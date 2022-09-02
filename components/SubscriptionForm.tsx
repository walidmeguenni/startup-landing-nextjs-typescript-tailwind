import React from "react";
import Button from "./Button";

const SubscriptionForm: React.FC = () => (
  <div  className="flex flex-1 flex-row flex-nowrap">
    <input
      type="email"
      name="email"
      placeholder="Type your domain name"
      className="py-3 px-4 font-dmSans font-normal focus:outline-secondary rounded-[8px] shadow-md ss:w-[350px] max-w-[350px] overflow-hidden"
    />
    <Button />
  </div>
);
export default SubscriptionForm;
