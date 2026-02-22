"use client";
import { motion } from "framer-motion";
import { TrendingUp, Wind, Zap, Users, CheckCircle2, Leaf } from "lucide-react";

export default function Impact() {
  const benefits = [
    { title: "Additional Income", text: "Earn money from selling crop residues that earlier had no market value.", icon: <TrendingUp className="text-[#2D5A27]" size={24} />, color: "bg-[#2D5A27]/10", delay: 0.1 },
    { title: "Zero-Burning Approach", text: "Eliminate stubble burning, reducing pollution and improving soil health.", icon: <Wind className="text-[#D97706]" size={24} />, color: "bg-[#D97706]/10", delay: 0.2 },
    { title: "Faster Field Clearing", text: "Mechanised clearing in 24–48 hours enables timely sowing of next crop.", icon: <Zap className="text-[#EA580C]" size={24} />, color: "bg-[#EA580C]/10", delay: 0.3 },
    { title: "Reduced Labour Burden", text: "Advanced machines complete work quickly, avoiding hectic manual handling.", icon: <Users className="text-[#2D5A27]" size={24} />, color: "bg-[#2D5A27]/10", delay: 0.4 },
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4F1EA] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4F1EA] border border-[#E5E0D8] mb-6">
            <Leaf size={14} className="text-[#2D5A27]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2D5A27]">Making a Difference</span>
          </motion.div>
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold text-[#1A2E1A] mb-6 font-[family-name:var(--font-playfair)]">
            Farmer Benefits & <span className="text-[#2D5A27]">Community Impact</span>
          </motion.h2>
          <p className="text-[#4B5E4B] text-lg">Empowering the backbone of our nation through technology, sustainability, and fair market access.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {benefits.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: item.delay }} whileHover={{ y: -5 }} className="group p-8 rounded-3xl bg-[#FDFBF7] border border-[#E5E0D8] hover:shadow-xl hover:border-[#2D5A27]/30 transition-all duration-300">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                <h4 className="text-xl font-bold text-[#1A2E1A] mb-3">{item.title}</h4>
                <p className="text-sm text-[#4B5E4B] leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:col-span-5">
            <div className="bg-[#F4F1EA] border border-[#E5E0D8] p-8 md:p-12 rounded-[2.5rem] shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:20px_20px]" />
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A2E1A] mb-8 relative z-10 leading-tight">Our Broader <br /><span className="text-[#D97706]">Ecosystem Impact</span></h3>
              <ul className="space-y-5 relative z-10">
                {["Supporting farmers in reducing cost of cultivation", "Creating new income streams through agro-waste", "Strengthening rural employment", "Supplying consistent-quality biomass", "Ensuring stable demand for produce"].map((impact, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + (i * 0.1) }} className="flex items-start gap-4 text-[#2D5A27]">
                    <div className="mt-1 bg-[#D97706]/20 p-1 rounded-full"><CheckCircle2 size={16} className="text-[#D97706]" /></div>
                    <span className="text-sm md:text-base font-medium leading-snug">{impact}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-[#E5E0D8] relative z-10">
                <div className="flex items-center justify-between">
                  <div><p className="text-[#2D5A27] text-2xl font-black">100%</p><p className="text-[10px] text-[#5A735A] uppercase tracking-widest">Farmer Satisfaction</p></div>
                  <div className="h-10 w-[1px] bg-[#E5E0D8]" />
                  <div><p className="text-[#EA580C] text-2xl font-black">500+</p><p className="text-[10px] text-[#5A735A] uppercase tracking-widest">Lives Impacted</p></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}