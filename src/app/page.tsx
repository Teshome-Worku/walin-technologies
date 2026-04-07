import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Trust from "@/sections/Trust";
import Problem from "@/sections/Problem";
import Services from "@/sections/Services";
import Process from "@/sections/Process";

export default function Home() {
  return (
    <main className="bg-white text-dark min-h-screen">
      <Navbar />
      <Hero />
      <Trust />
      <Problem />
      <Services />
      <Process />
    </main>
  );
}