"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Image as ImageIcon, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const centerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" }, 
    { name: "Services", href: "/services" }, 
    { name: "Agro-Waste", href: "/agro-waste" }, 
  ];

  return (
    <>
      {/* 1. TOP BAR */}
      <div className={`hidden md:flex justify-between items-center text-[10px] font-black py-2.5 px-10 tracking-[0.2em] transition-all duration-500 ${
        scrolled ? "h-0 overflow-hidden opacity-0" : "bg-fpo-dark text-white/70"
      }`}>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 hover:text-fpo-yellow transition-colors cursor-pointer">
            <Phone size={12} className="text-fpo-yellow" /> 98172-60600
          </span>
          <span className="flex items-center gap-2 hover:text-fpo-primary transition-colors cursor-pointer">
            <Mail size={12} className="text-fpo-primary" /> care@fpokhewra.com
          </span>
        </div>
        <div className="uppercase tracking-widest opacity-40">
          CIN - U01409HR2020PTC084969
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-2xl shadow-xl py-3 top-0" 
          : "bg-transparent py-6 md:top-10"
      }`}>
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
          
          {/* LEFT: Logo Section */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-11 w-11 bg-gradient-to-br from-fpo-primary via-fpo-yellow to-fpo-orange rounded-xl flex items-center justify-center font-black text-white text-xl shadow-lg transition-transform group-hover:rotate-12">
                K
              </div>
              <div className="hidden sm:block">
                <h1 className={`font-black text-lg leading-none tracking-tighter ${scrolled ? "text-fpo-dark" : "text-white"}`}>
                  KHEWRA FPO
                </h1>
                <p className={`text-[8px] uppercase font-bold tracking-[0.2em] mt-1 ${scrolled ? "text-fpo-primary" : "text-fpo-yellow"}`}>
                  Farmer-Owned • Future-Driven
                </p>
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex justify-center items-center gap-8">
            {centerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="relative group">
                <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
                  scrolled ? "text-fpo-dark hover:text-fpo-primary" : "text-white/90 hover:text-fpo-yellow"
                }`}>
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fpo-primary via-fpo-yellow to-fpo-orange transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* RIGHT: Gallery & Contact Us */}
          <div className="flex justify-end items-center gap-4">
            <Link href="/gallery" className="hidden md:flex">
              <span className={`px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all border-2 ${
                scrolled 
                  ? "border-fpo-primary text-fpo-primary hover:bg-fpo-primary hover:text-white" 
                  : "border-fpo-yellow text-fpo-yellow hover:bg-fpo-yellow hover:text-fpo-dark"
              }`}>
                <ImageIcon size={14} /> Gallery
              </span>
            </Link>

            <Link href="/#contact" className="hidden lg:flex">
              <button className="px-6 py-3 bg-fpo-orange text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 transition-all hover:shadow-fpo-orange/25 active:scale-95">
                Contact Us
              </button>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all ${
                scrolled ? "bg-fpo-dark text-white" : "bg-white/10 backdrop-blur-md text-white border border-white/20"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="font-black text-2xl tracking-tighter text-fpo-dark">MENU</div>
              <button onClick={() => setIsOpen(false)} className="p-3 bg-gray-100 rounded-full">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {[...centerLinks, { name: "Gallery", href: "/gallery" }, { name: "Contact", href: "/#contact" }].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-fpo-dark hover:text-fpo-primary flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight size={28} className="text-fpo-orange opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-gray-100">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Official Support</p>
              <div className="flex flex-col gap-2 font-bold text-fpo-dark">
                <span>+91 98172-60600</span>
                <span className="text-fpo-primary">care@fpokhewra.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}