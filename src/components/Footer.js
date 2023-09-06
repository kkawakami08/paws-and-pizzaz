import React from "react";

const Footer = () => {
  return (
    <div className="text-sm font-light flex flex-col items-center gap-8 py-10">
      <div className="text-center flex flex-col gap-3">
        <p>Home</p>
        <p>About</p>
        <p>Shop</p>
        <p>Contact</p>
      </div>
      <p className="font-bold text-2xl tracking-widest">PETS & PIZZAZ</p>
      <p className="text-xs tracking-wider">
        Copyright © 2023 Kaori Kawakami Dev
      </p>
    </div>
  );
};

export default Footer;
