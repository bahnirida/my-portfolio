import Image from "next/image";
import HeroSection from "@/app/Components/hero/Hero-section";
import Navbar from "@/app/Components/Navbar";
import Contact from "@/app/Components/Contact";
import DevSteps from "@/app/Components/DevSteps/DevSteps";
import MyWork from "@/app/Components/mywork/MyWork";
import Testimonials from "@/app/Components/Testimonials/Testimonials";
import Skills from "@/app/Components/skills/Skills";

export default function Home() {
  return (
      <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
          <DevSteps></DevSteps>
          <MyWork></MyWork>
          <Skills></Skills>
          <Testimonials></Testimonials>
          <Contact></Contact>
      </div>
  );
}
