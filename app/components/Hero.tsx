"use client";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Phone, Leaf, MousePointer2 } from "lucide-react";
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
      
      {/* 1. Background Layer (Enhanced) */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-fpo-dark/90 via-fpo-dark/40 to-fpo-dark z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,46,26,0.8)_100%)] z-10" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 z-10 opacity-20" 
             style={{ backgroundImage: `radial-gradient(#8db600 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="/images/hero-bg.jpg" 
          alt="Agriculture Field" 
          className="w-full h-full object-cover grayscale-[20%] brightness-[0.7]"
        /> 
      </div>

      {/* 2. Floating Orbs (Sides ko fill karne ke liye) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-fpo-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -60, 0], 
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] bg-fpo-accent/10 rounded-full blur-[150px]" 
        />
      </div>

      {/* 3. Side Decorative Labels */}
      <div className="hidden lg:flex absolute inset-y-0 left-10 z-30 flex-col justify-center items-center gap-12">
        <p className="vertical-text text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase transform -rotate-180">
          Sustainable Agriculture
        </p>
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>

      <div className="hidden lg:flex absolute inset-y-0 right-10 z-30 flex-col justify-center items-center gap-12">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <p className="vertical-text text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">
          Established 2020
        </p>
      </div>

      {/* 4. Main Content Layer */}
      <div className="relative z-20 container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 group cursor-default">
            <div className="bg-fpo-accent rounded-full p-1 group-hover:rotate-[360deg] transition-transform duration-700">
              <Leaf size={14} className="text-fpo-dark" />
            </div>
            <span className="uppercase tracking-[0.4em] text-[10px] font-black text-white/90">
              Transforming Rural Bharat
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants} 
            className="text-6xl md:text-9xl font-medium text-white mb-8 tracking-tighter leading-[0.9] font-[family-name:var(--font-playfair)]"
          >
            Khewra Farmers <br />
            <span 
              className="inline-block text-transparent bg-clip-text animate-text-shimmer pb-2"
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
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-10">
            <div className="h-[1px] w-12 bg-fpo-accent/30" />
            <p className="text-xs md:text-lg font-semibold tracking-[0.3em] text-fpo-accent uppercase">
              Farmer-Owned • Future-Driven
            </p>
            <div className="h-[1px] w-12 bg-fpo-accent/30" />
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto mb-14 leading-relaxed font-light">
            A pioneering enterprise dedicated to empowering farmers through <span className="text-white font-normal underline decoration-fpo-accent/50 decoration-2 underline-offset-4">sustainable waste management</span> and organized market linkages.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link href="#services">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-12 py-6 bg-fpo-primary text-white font-bold rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(45,90,39,0.3)] transition-all"
              >
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Explore Services <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,1)", color: "#1a2e1a" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-12 py-6 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-2xl transition-all hover:shadow-2xl"
              >
                <Phone size={20} /> Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
        @keyframes textShimmer {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        .animate-text-shimmer {
          animation: textShimmer 4s linear infinite;
        }
      `}</style>
    </section>
  );
}