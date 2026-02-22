"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Search, LayoutGrid, Box, Truck, Scale, Recycle } from "lucide-react";

const steps = [
  {
    title: "Field Survey & Scheduling",
    desc: "Our team assesses field condition, residue volume, and moisture before scheduling machinery.",
    icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Mechanised Raking",
    desc: "Rake machines gather scattered crop residues into aligned rows for easy collection.",
    icon: <LayoutGrid className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Baling Operations",
    desc: "High-capacity balers compress residue into compact, easy-to-handle bales.",
    icon: <Box className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Loading & Transport",
    desc: "Loaders and tractor-trolleys transport bales to storage or the pellet unit.",
    icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Quality Check & Weighment",
    desc: "Moisture, density, and weight are measured for fair payment and quality.",
    icon: <Scale className="w-5 h-5 md:w-6 md:h-6" />,
  },
  {
    title: "Final Processing",
    desc: "Collected waste is used for biomass pellets, biofuel, or industrial use.",
    icon: <Recycle className="w-5 h-5 md:w-6 md:h-6" />,
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 bg-[#F4F1EA] text-[#1A2E1A] overflow-hidden" id="process">
      <div className="container mx-auto px-6 relative z-30">
        
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-4 tracking-tighter">How We Work</h2>
          <p className="text-[#2D5A27] text-xs md:text-lg font-bold uppercase tracking-[0.2em]">Agro-Waste Management Process</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#E5E0D8] transform md:-translate-x-1/2">
            <motion.div 
              style={{ scaleY }} 
              className="absolute top-0 w-full bg-[#2D5A27] origin-top shadow-[0_0_15px_#2d5a27]" 
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="absolute left-0 md:left-1/2 w-10 h-10 md:w-14 md:h-14 bg-[#FDFBF7] border-2 border-[#2D5A27] rounded-full z-40 flex items-center justify-center transform md:-translate-x-1/2 shadow-sm"
                >
                  <span className="text-[10px] md:text-sm font-black text-[#2D5A27]">0{idx + 1}</span>
                </motion.div>

                <motion.div 
                  className="w-full md:w-[45%] pl-12 md:pl-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="group bg-[#FDFBF7] border border-[#E5E0D8] shadow-sm p-6 md:p-8 rounded-2xl hover:shadow-lg hover:border-[#2D5A27]/50 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-[#F4F1EA] border border-[#EAE5DF] rounded-lg text-[#2D5A27] group-hover:bg-[#2D5A27] group-hover:text-[#FDFBF7] transition-colors">
                        {step.icon}
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-[#4B5E4B] text-sm md:text-base leading-relaxed group-hover:text-[#1A2E1A]">{step.desc}</p>
                  </div>
                </motion.div>

                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-[#FDFBF7] border border-[#E5E0D8] rounded-3xl text-center max-w-3xl mx-auto italic text-[#4B5E4B] text-sm md:text-lg shadow-sm">
          "This mechanised workflow ensures speed, efficiency, and minimum labour requirement for farmers."
        </div>
      </div>
    </section>
  );
}