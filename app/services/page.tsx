import Navbar from "../components/Navbar";
import Operations from "../components/Operations";
import Footer from "../components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-fpo-dark">
      <Navbar />
      <div className="pt-32 pb-10 text-center">
        <h1 className="text-white text-5xl font-bold">Our Services</h1>
      </div>
      <Operations />
      <Footer />
    </main>
  );
}