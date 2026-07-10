import Image from "next/image";
import BannerSection from "./components/home-components/BannerSection";
import ProductSection from "./components/home-components/serviceSection";

export const metadata = {
  
};

export default function Home(){
  metadata.title = "Home Page"
  metadata.description = "Home Description"

  return (
    <>
      <BannerSection/>
      <ProductSection/>
    </>
  );
};
