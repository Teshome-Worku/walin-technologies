import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Trust from "@/sections/Trust";
import Problem from "@/sections/Problem";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import WhyUs from "@/sections/WhyUs";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F5F7FA] text-dark min-h-screen">
      <Navbar />
      <Hero />
      <Trust />
      <Problem />
      <Services />
      <Process />
      <WhyUs />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}