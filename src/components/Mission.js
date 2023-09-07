import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="flex flex-col items-center px-6 gap-5 py-5">
      <Image
        src="/assets/images/mission.png"
        width={450}
        height={450}
        alt="Picture of the author"
      />
      <p className="text-2xl font-semibold tracking-widest">OUR MISSION</p>
      <p className="text-sm font-light leading-6">
        Welcome to Paws & Pizzazz, where our mission is to bring joy and style
        to the lives of your beloved canine companions. We are dedicated to
        offering a curated selection of high-quality clothing, accessories, and
        gear that enhance both the comfort and fashion of your furry friends.
        Our commitment is to ensure every dog stands out with confidence,
        whether it's through playful fashion statements or functional outdoor
        gear. At Paws & Pizzazz, we're not just a store; we're a celebration of
        the unique bond between you and your four-legged family members.
      </p>
    </div>
  );
};

export default Mission;
