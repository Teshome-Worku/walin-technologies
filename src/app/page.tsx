import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Trust from "@/sections/Trust";

export default function Home() {
  return (
    <main className="bg-white text-dark min-h-screen">
      <Navbar />
      <Hero />
      <Trust />
    </main>
  );
}