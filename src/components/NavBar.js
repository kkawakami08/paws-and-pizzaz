"use client";

import { useState } from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { ImMenu } from "react-icons/im";
import Link from "next/link";
import MenuDropdown from "./MenuDropdown";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const closeDropdown = () => {
    setMenuToggle(false);
  };

  return (
    <nav className="flex flex-col absolute text-white    z-10">
      <div className="flex  justify-between items-center w-screen p-4">
        <Link href="/">
          <p className="font-bold tracking-wider text-lg">Paws & Pizzaz</p>
        </Link>
        <div className="flex text-2xl gap-5">
          <HiMiniShoppingBag />
          <ImMenu
            className="hover:cursor-pointer"
            onClick={() => setMenuToggle((prev) => !prev)}
          />
        </div>
      </div>
      {menuToggle && <MenuDropdown closeDropdown={closeDropdown} />}
    </nav>
  );
};

export default NavBar;
