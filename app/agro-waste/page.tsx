import Navbar from "../components/Navbar";
import AgroProcess from "../components/AgroProcess";
import Footer from "../components/Footer";

export default function AgroWastePage() {
  return (
    <main className="min-h-screen bg-fpo-dark">
      <Navbar />
      <div className="pt-32 pb-6 text-center text-white">
        <h1 className="text-5xl font-bold">Agro-Waste Management</h1>
      </div>
      <AgroProcess />
      <Footer />
    </main>
  );
}