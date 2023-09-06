import React from "react";

const Postcard = () => {
  return (
    <div className="bg-[url('/assets/images/cta.png')] bg-cover  bg-center  ">
      <div className="py-24 flex  justify-center items-center backdrop-brightness-50 flex-col gap-5">
        <div className="px-5 flex flex-col gap-5 text-center">
          <p className="text-white font-semibold text-3xl tracking-widest ">
            Give the Gift of a Postcard
          </p>
          <p className="text-white font-extralight">
            Give the gift of a lasting memory with a postcard
          </p>
        </div>
        <button className="bg-gray-blue text-jet-gray text-sm py-3 px-5 tracking-widest">
          PURCHASE A POSTCARD
        </button>
      </div>
    </div>
  );
};

export default Postcard;
