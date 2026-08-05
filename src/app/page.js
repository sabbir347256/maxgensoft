import Hero from "@/components/ui/HeroSection/Hero";
import HomeProducts from "@/components/ui/HomeSectionService/HomeProducts";
import Status from "@/components/ui/StatsSection/Status";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Status></Status>
      <HomeProducts></HomeProducts>
    </div>
  );
}
