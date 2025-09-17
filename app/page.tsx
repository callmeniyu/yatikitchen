// app/page.js
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import { Meteors } from "@/components/ui/meteors";
export default function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <Packages />
      <Testimonials />
    </>
  );
}
