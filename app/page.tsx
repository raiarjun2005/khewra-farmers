import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Stats from "@/app/components/Stats";
import About from "@/app/components/About";
import Operations from "@/app/components/Operations";
import AgroProcess from "@/app/components/AgroProcess"; // Updated Import
import Impact from "@/app/components/Impact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Stats />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Operations />
      </div>
      <div id="agro-waste">
        <AgroProcess /> {/* Updated Component */}
      </div>
      <Impact />
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}