import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Image from "next/image";

const TestimonialTile = () => {
  return (
    <div className="flex flex-col gap-3">
      <BiSolidQuoteLeft className="text-light-purple text-2xl" />
      <p className="text-jet-gray text-sm leading-6">
        Bailey, my adventurous Australian Shepherd, looked absolutely adorable
        in the Pawfect Cowboy Hat! It stayed securely on his head during our
        outdoor playtime, and the adjustable strap ensured a comfortable fit. It
        added a fun twist to our daily walks and brought out his inner cowboy
        charisma – a definite must-have for any dog looking to strut their stuff
        with a western flair!
      </p>
      <div className="flex items-center gap-5">
        <Image
          src="/assets/images/test-customer.png"
          width={50}
          height={50}
          alt="customer"
          className="rounded-full"
        />
        <p className="font-semibold tracking-widest text-xs">
          EMILY MONTGOMERY
        </p>
      </div>
    </div>
  );
};

export default TestimonialTile;
