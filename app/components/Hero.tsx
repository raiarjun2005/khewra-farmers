"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Phone, Leaf } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-fpo-dark">
      
      {/* 1. Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-fpo-dark/80 via-fpo-dark/40 to-fpo-dark/90 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="/images/hero-bg.jpg" 
          alt="Agriculture Field" 
          className="w-full h-full object-cover"
        /> 
      </div>

      {/* 2. Main Content Layer */}
      <div className="relative z-20 container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fpo-accent/20 border border-fpo-accent/30 backdrop-blur-md mb-8">
            <Leaf size={16} className="text-fpo-accent" />
            <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-fpo-accent">
              Welcome to Khewra FPO
            </span>
          </motion.div>

          {/* Main Heading with Moving Animation */}

<motion.h1 
  variants={itemVariants} 
  className="text-5xl md:text-8xl font-medium text-white mb-8 tracking-tight leading-[0.95] font-[family-name:var(--font-playfair)]"
>
  Khewra Farmers <br />
  <span 
    className="inline-block text-transparent bg-clip-text animate-text-shimmer"
    style={{
      backgroundImage: "linear-gradient(90deg, #bbf246 0%, #ffffff 50%, #bbf246 100%)",
      backgroundSize: "200% auto",
      WebkitBackgroundClip: "text",
    }}
  >
    Producer Co. Ltd.
  </span>
</motion.h1>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-8 md:w-12 bg-white/30" />
            <p className="text-sm md:text-xl font-medium tracking-[0.15em] text-white/80 uppercase">
              Farmer-Owned • Future-Driven • Community-Focused
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-white/30" />
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            A farmer-owned enterprise committed to transforming agriculture through modern input supply, sustainable agro-waste solutions, organised market linkages, and capacity building.
          </motion.p>
          
          {/* Action Buttons - Reference from Navbar.tsx Links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* Navigates to #services (Operations component) */}
            <Link href="#services">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(45,90,39,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-fpo-primary text-white font-bold rounded-xl overflow-hidden shadow-xl transition-all"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Our Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </Link>

            {/* Navigates to #contact */}
            <Link href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#1a2e1a" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl transition-all"
              >
                <Phone size={20} /> Contact Us
              </motion.button>
            </Link>

          </motion.div>
        </motion.div>
      </div>

      {/* Styles for smooth scrolling and shimmer animation */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @keyframes textShimmer {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        .animate-text-shimmer {
          animation: textShimmer 3s linear infinite;
        }
      `}</style>

      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-black" />
    </section>
  );
}