import React from "react";
import ProductTile from "@/components/ProductTile";
import { BiSearch } from "react-icons/bi";

const getProducts = async () => {
  const res = await fetch(
    "https://api.jsonsilo.com/public/7df903f2-7986-4dc1-ad6b-6ce75e7583a6"
  );
  if (!res.ok) throw new Error("Couldn't fetch products");
  return res.json();
};

const Shop = async () => {
  const products = await getProducts();

  return (
    <div className="bg-ash-gray h-full pt-16 px-3 pb-16">
      <h2 className="text-3xl font-medium text-rich-black">Shop</h2>
      <div className="flex">
        <p>Showing all 9 results</p>
        <select>
          <option>Default sorting</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Alphabetical: A - Z</option>
          <option>Alphabetical: Z - A</option>
        </select>
      </div>
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <ProductTile />
      <div className="flex">
        <input type="text" placeholder="Search Products..." />
        <div className="text-white bg-light-purple w-8 h-8 flex items-center justify-center">
          <BiSearch />
        </div>
      </div>
      <div>
        <p>Filter by price</p>
        <input type="range" min="5" max="20" value="20" />
        <div>
          <input type="number" value="5" />
          <input type="number" value="20" />
        </div>
        <button className=" bg-light-purple text-white py-3 px-5 font-light text-sm tracking-widest">
          RESET
        </button>
      </div>
      <div>
        <p>Categories</p>
        <p>Clothing (5)</p>
        <p>Accessories (4)</p>
      </div>
    </div>
  );
};

export default Shop;
