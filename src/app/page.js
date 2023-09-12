import Hero from "@/components/Hero";
import HomePageProducts from "@/components/HomePageProducts";
import Testimonials from "@/components/Testimonials";
import Postcard from "@/components/Postcard";
import StoreQualityPoints from "@/components/StoreQualityPoints";

export default function Home() {
  return (
    <div className="h-full flex flex-col gap-10">
      <Hero />
      <HomePageProducts />
      <hr className="" />
      <Testimonials />
      <Postcard />
      <StoreQualityPoints />
    </div>
  );
}
