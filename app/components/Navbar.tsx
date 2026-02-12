"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Image as ImageIcon } from "lucide-react"; 

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" }, 
  { name: "Services", href: "/services" }, 
  { name: "Agro-Waste", href: "/agro-waste" }, 
  { name: "Gallery", href: "/gallery", isSpecial: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Top Bar */}
      <div className="hidden md:flex justify-between items-center bg-fpo-primary text-white text-xs py-2 px-6 tracking-wide">
        <div className="flex gap-6 text-white font-medium">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-fpo-accent" />
            98172-60600
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-fpo-accent" />
            care@fpokhewra.com
          </span>
        </div>
        <div className="opacity-80">CIN - U01409HR2020PTC084969</div>
      </div>

      {/* 2. Main Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-3 top-0"
            : "bg-transparent py-5 md:top-8"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-xl transition-colors ${scrolled ? "bg-fpo-primary text-white" : "bg-white text-fpo-primary"}`}>
              K
            </div>
            <div className="leading-tight">
              <h1 className={`font-bold text-lg tracking-tight ${scrolled ? "text-fpo-dark" : "text-white"}`}>
                KHEWRA FPO
              </h1>
              <span className={`text-[10px] uppercase tracking-wider block ${scrolled ? "text-gray-500" : "text-gray-200"}`}>
                Farmer Producer Co. Ltd.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  link.isSpecial 
                    ? `px-4 py-1.5 rounded-full border-2 flex items-center gap-2 ${
                        scrolled 
                          ? "border-fpo-primary text-fpo-primary hover:bg-fpo-primary hover:text-white" 
                          : "border-fpo-accent text-fpo-accent hover:bg-fpo-accent hover:text-fpo-dark"
                      }`
                    : `hover:text-fpo-accent ${scrolled ? "text-gray-700" : "text-white/90"}`
                }`}
              >
                {link.isSpecial && <ImageIcon size={14} />}
                {link.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-fpo-primary text-white hover:bg-fpo-dark"
                  : "bg-white text-fpo-primary hover:bg-gray-100"
              }`}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-fpo-dark" : "text-white"
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* 3. Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-24 px-6 flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-semibold border-b border-gray-100 pb-4 flex items-center justify-between ${
                  link.isSpecial ? "text-fpo-primary" : "text-fpo-dark"
                }`}
              >
                {link.name}
                {link.isSpecial && <ImageIcon size={20} />}
              </Link>
            ))}
            <div className="mt-4 space-y-4">
               <p className="text-sm text-gray-500 flex items-center gap-3">
                 <Phone size={18} className="text-fpo-primary"/> 98172-60600
               </p>
               <p className="text-sm text-gray-500 flex items-center gap-3">
                 <Mail size={18} className="text-fpo-primary"/> care@fpokhewra.com
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}