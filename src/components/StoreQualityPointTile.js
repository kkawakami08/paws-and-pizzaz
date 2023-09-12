import React from "react";
import { BiSolidLockAlt } from "react-icons/bi";

const StoreQualityPointTile = () => {
  return (
    <div className="flex flex-col items-center gap-3 py-10 ">
      <div
        className="bg-light-purple w-8 h-8 rounded-full
       text-white flex items-center justify-center"
      >
        <BiSolidLockAlt className="text-sm" />
      </div>
      <p className="font-semibold tracking-wider text-xs">SECURE PAYMENT</p>
      <p className="text-light text-xs text-gray-500">
        All our payments are SSL secured
      </p>
    </div>
  );
};

export default StoreQualityPointTile;
