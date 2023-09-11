import React from "react";
import Link from "next/link";
import { useDetectClickOutside } from "react-detect-click-outside";

const MenuDropdown = ({ closeDropdown }) => {
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });
  return (
    <div className="bg-white text-jet-gray flex flex-col  divide-y" ref={ref}>
      <Link
        href="/"
        className="p-3 text-sm tracking-widest"
        onClick={closeDropdown}
      >
        HOME
      </Link>
      <Link
        href="/about"
        className="p-3 text-sm tracking-widest"
        onClick={closeDropdown}
      >
        ABOUT
      </Link>
      <Link
        href="/shop"
        className="p-3 text-sm tracking-widest"
        onClick={closeDropdown}
      >
        SHOP
      </Link>
      <Link
        href="/contact"
        className="p-3 text-sm tracking-widest"
        onClick={closeDropdown}
      >
        CONTACT
      </Link>
    </div>
  );
};

export default MenuDropdown;
