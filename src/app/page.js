// const getProducts = async () => {
//   const res = await fetch("http://localhost:3000/api/products");
//   if (!res.ok) throw new Error("Couldn't fetch products");
//   return res.json();
// };
import Hero from "@/components/Hero";
import HomePageProducts from "@/components/HomePageProducts";
import Testimonials from "@/components/Testimonials";
import Postcard from "@/components/Postcard";

export default async function Home() {
  // const { products } = await getProducts();

  return (
    <main className="h-screen flex flex-col gap-10">
      <Hero />
      <HomePageProducts />
      <hr className="" />
      <Testimonials />
      <Postcard />
    </main>
  );
}
