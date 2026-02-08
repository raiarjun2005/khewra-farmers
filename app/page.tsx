// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Operations from "./components/Operations";
import AgroProcess from "./components/AgroProcess";
import Impact from "./components/Impact";
import Footer from "./components/Footer";

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