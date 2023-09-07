import React from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { ImMenu } from "react-icons/im";

const NavBar = () => {
  return (
    <nav className="flex absolute items-center text-white w-full p-5 justify-between z-10">
      <p className="font-bold tracking-wider">Paws & Pizzaz</p>
      <div className="flex text-2xl gap-5">
        <HiMiniShoppingBag />
        <ImMenu />
      </div>
    </nav>
  );
};

export default NavBar;
