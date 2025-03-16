import Image from "next/image";
import HeroSection from "@/app/portfolio/hero/Hero-section";
import Navbar from "@/app/portfolio/Navbar";
import Contact from "@/app/portfolio/Contact";
import DevSteps from "@/app/portfolio/DevSteps/DevSteps";
import MyWork from "@/app/portfolio/mywork/MyWork";
import Testimonials from "@/app/portfolio/Testimonials/Testimonials";
import Skills from "@/app/portfolio/skills/Skills";

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
