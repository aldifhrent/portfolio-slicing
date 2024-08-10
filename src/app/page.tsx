import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Testimonial from "@/components/testimonial";
import Work from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#FFEED9] min-h-screen">
      <Header />
      <Hero />
      <Work />
      <Testimonial />
      <AboutMe />
      <ContactMe />
    </main>
  );
}
