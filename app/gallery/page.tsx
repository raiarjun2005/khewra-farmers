"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Reveal } from "../components/ui/Reveal";

// Local images ka array
const images = [
  { src: "/images/gallery/img-1.jpg", title: "Field Operations" },
  { src: "/images/gallery/img-2.jpg", title: "Biomass Processing" },
  { src: "/images/gallery/img-3.jpg", title: "Farmer Meetup" },
  { src: "/images/gallery/img-4.jpg", title: "Retail Outlet" },
  { src: "/images/gallery/img-5.jpg", title: "Paddy Straw Baling" },
  { src: "/images/gallery/img-6.jpg", title: "Mustard Stover" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-fpo-dark text-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-[family-name:var(--font-playfair)]">
              Our <span className="text-fpo-accent">Gallery</span>
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg">
              Visual glimpse of our impact on the ground—from mechanized waste collection to our retail network.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl border border-gray-100 shadow-sm break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold text-lg">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}