import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className=" flex flex-col items-center gap-5 py-10  ">
      <p className="font-semibold tracking-wide">Follow Us:</p>
      <div className="flex gap-3">
        <div className="w-8 h-8 bg-gray-blue flex items-center justify-center rounded-full text-jet-gray">
          <BiLogoFacebook />
        </div>
        <div className="w-8 h-8 bg-gray-blue flex items-center justify-center rounded-full text-jet-gray">
          <BiLogoLinkedin />
        </div>
        <div className="w-8 h-8 bg-gray-blue flex items-center justify-center rounded-full text-jet-gray">
          <AiOutlineTwitter />
        </div>
        <div className="w-8 h-8 bg-gray-blue flex items-center justify-center rounded-full text-jet-gray">
          <BsFillPlayFill />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
