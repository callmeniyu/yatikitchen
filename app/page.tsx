// app/page.js
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Packages from "@/components/Packages";
import LocalFlavors from "@/components/LocalFlavors";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <Packages />
      <LocalFlavors />
      <Gallery />
      <Testimonials />
    </>
  );
}
