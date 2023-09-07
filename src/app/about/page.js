import React from "react";
import Postcard from "@/components/Postcard";
import Mission from "@/components/Mission";

const About = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-[url('/assets/images/about-us.png')] bg-cover  bg-center text-center py-44 ">
        <p className="text-white font-semibold text-3xl tracking-widest ">
          WHO ARE WE?
        </p>
      </div>
      <Mission />
      <Postcard />
    </div>
  );
};

export default About;
