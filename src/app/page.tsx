import Image from "next/image";
import HeroSection from "@/app/Components/hero/Hero-section";
import Navbar from "@/app/Components/Navbar";
import Contact from "@/app/Components/Contact";
import DevSteps from "@/app/Components/DevSteps/DevSteps";
import MyWork from "@/app/Components/mywork/MyWork";

export default function Home() {
  return (
      <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
          <DevSteps></DevSteps>
          <MyWork></MyWork>
          <Contact></Contact>
      </div>
  );
}
