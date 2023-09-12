import React from "react";

const getProducts = async () => {
  const res = await fetch(
    "https://api.jsonsilo.com/public/7df903f2-7986-4dc1-ad6b-6ce75e7583a6"
  );
  if (!res.ok) throw new Error("Couldn't fetch products");
  return res.json();
};

const Shop = async () => {
  const products = await getProducts();
  console.log(products);
  const content = products.map((product) => (
    <p key={product.img_url}>{product.name}</p>
  ));
  return <div className="">{content}</div>;
};

export default Shop;
