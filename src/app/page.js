// const getProducts = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   if (!res.ok) throw new Error("Couldn't fetch products");
//   return res.json();
// };
import Image from "next/image";

export default async function Home() {
  // const { products } = await getProducts();

  return (
    <main className="">
      <Image
        src="/assets/images/home-pg.png"
        width={1536}
        height={500}
        alt="Picture of the author"
      />
    </main>
  );
}
