import React from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { ImMenu } from "react-icons/im";

const NavBar = () => {
  return (
    <nav className="flex  items-center text-jet-gray bg-ash-gray w-full p-5 justify-between">
      <p className="font-bold tracking-wider">Paws & Pizzaz</p>
      <div className="flex text-2xl gap-5">
        <HiMiniShoppingBag />
        <ImMenu />
      </div>
    </nav>
  );
};

export default NavBar;
