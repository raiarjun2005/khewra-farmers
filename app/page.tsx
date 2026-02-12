import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero /> {/* */}
      <Stats /> {/* */}
      <Impact /> {/* */}
      
      {/* Short Call to Action for Services */}
      <section className="py-20 bg-fpo-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Empowering Rural India</h2>
        <a href="/services" className="px-8 py-4 bg-fpo-accent text-fpo-dark font-bold rounded-xl">
          View Our Operations
        </a>
      </section>

      <Footer /> {/* */}
    </main>
  );
}