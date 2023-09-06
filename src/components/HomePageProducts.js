import React from "react";
import ProductTile from "./ProductTile";

const HomePageProducts = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <ProductTile />
      <ProductTile />
      <ProductTile />
    </div>
  );
};

export default HomePageProducts;
