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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/95 via-[#FDFBF7]/80 to-[#FDFBF7] z-10" />
        <div className="absolute inset-0 z-10 opacity-10" 
             style={{ backgroundImage: `radial-gradient(#2D5A27 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="/images/hero-bg.jpg" 
          alt="Agriculture Field" 
          className="w-full h-full object-cover grayscale-[10%] opacity-30"
        /> 
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-[#2D5A27]/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-[#EA580C]/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#F4F1EA] border border-[#E5E0D8] shadow-sm mb-10">
            <div className="bg-[#D97706] rounded-full p-1">
              <Leaf size={14} className="text-[#FDFBF7]" />
            </div>
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-[#1A2E1A]">
              Transforming Rural Bharat
            </span>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-6xl md:text-9xl font-medium text-[#1A2E1A] mb-8 tracking-tighter leading-[0.9] font-[family-name:var(--font-playfair)]"
          >
            Khewra Farmers <br />
            <span 
              className="inline-block text-transparent bg-clip-text animate-text-shimmer pb-2"
             style={{
  backgroundImage: "linear-gradient(90deg, #EA580C 0%, #D97706 50%, #2D5A27 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
}}
            >
              Producer Co. Ltd.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-base md:text-xl text-[#4B5E4B] max-w-3xl mx-auto mb-14 font-light">
            Dedicated to empowering farmers through <span className="text-[#D97706] font-bold">sustainable waste management</span> and organized market linkages.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link href="/services">
              <motion.button className="px-12 py-6 bg-[#2D5A27] text-[#FDFBF7] font-bold rounded-2xl shadow-[0_15px_30px_rgba(45,90,39,0.3)] flex items-center gap-3 hover:scale-105 transition-transform">
                Explore Services <ArrowRight size={22} />
              </motion.button>
            </Link>

            <Link href="/#contact">
              <motion.button className="px-12 py-6 bg-[#FDFBF7] border-2 border-[#E5E0D8] text-[#1A2E1A] font-bold rounded-2xl hover:border-[#EA580C] hover:text-[#EA580C] flex items-center gap-3 transition-all">
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes textShimmer {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        .animate-text-shimmer { animation: textShimmer 6s linear infinite; }
      `}</style>
    </section>
  );
}