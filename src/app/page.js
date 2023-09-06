// const getProducts = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   if (!res.ok) throw new Error("Couldn't fetch products");
//   return res.json();
// };
import Hero from "@/components/Hero";

export default async function Home() {
  // const { products } = await getProducts();

  return (
    <main className="h-screen">
      <Hero />
    </main>
  );
}
