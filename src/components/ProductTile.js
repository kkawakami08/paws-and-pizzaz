import React from "react";
import Image from "next/image";

const ProductTile = () => {
  return (
    <div className="text-sm font-light flex flex-col gap-2">
      <Image
        src="/assets/images/test-product.png"
        width={450}
        height={450}
        alt="backpack"
      />
      <p className="text-jet-gray">Accessory</p>
      <p className="font-medium">AdventureTrek Dog Backpack</p>
      <p className="">$20</p>
    </div>
  );
};

export default ProductTile;
