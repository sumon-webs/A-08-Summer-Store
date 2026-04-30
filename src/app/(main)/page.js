import HeroSection from "@/components/HeroSection";
import Populer from "@/components/Populer";
import SummerCareTips from "@/components/SummerCard";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";
export const metadata = {
  title: "Summer store",
  description: "You can by your summer products",
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Populer />
      <SummerCareTips />
      <TopBrands />
    </div>
  );
}
