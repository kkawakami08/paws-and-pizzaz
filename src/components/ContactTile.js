import React from "react";
import { MdOutlineMail } from "react-icons/md";

const ContactTile = () => {
  return (
    <div className="flex flex-col gap-5  items-center text-center  py-10 ">
      <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center border-light-purple text-light-purple">
        <MdOutlineMail />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-light text-sm text-light-purple">EMAIL</p>
        <p className="text-jet-gray text-lg">k.kawakami08@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactTile;
