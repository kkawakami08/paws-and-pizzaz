import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-sm font-light flex flex-col items-center gap-8 py-16">
      <div className="text-center flex flex-col gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className="font-bold text-2xl tracking-widest">PETS & PIZZAZ</p>
      <p className="text-xs tracking-wider">
        Copyright © 2023 Kaori Kawakami Dev
      </p>
    </div>
  );
};

export default Footer;
