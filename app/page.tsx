import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import WhyUs from "./components/WhyUs";
import BiomassSection from "./components/BiomassSection";
import HomeCTA from "./components/HomeCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      
      {/* Humne sections ko components mein lapet diya hai */}
      <WhyUs />
      <BiomassSection />
      <Impact />
      <HomeCTA />
      
      <Footer />
    </main>
  );
}