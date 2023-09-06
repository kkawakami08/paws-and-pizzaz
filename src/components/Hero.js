import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('/assets/images/home-pg.png')] bg-cover  bg-center flex flex-col gap-8  bg-no-repeat h-3/4 items-start justify-end px-5 py-5">
      <button className="bg-gray-blue text-jet-gray text-sm py-3 px-5 tracking-widest">
        SHOP NOW
      </button>
      <div className="w-1/2">
        <h1 className="text-white font-semibold text-3xl tracking-widest ">
          CLOTHING & ACCESSORIES
        </h1>
        <h1 className="text-white text-2xl font-extralight">FOR DOGS</h1>
      </div>
    </div>
  );
};

export default Hero;
