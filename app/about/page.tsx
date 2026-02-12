import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 bg-fpo-dark text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)]">About Us</h1>
        <p className="text-fpo-accent mt-4 tracking-widest uppercase text-sm">Empowering the backbone of Bharat</p>
      </div>
      <About />
      <Footer />
    </main>
  );
}