"use client";
import { Reveal } from "./ui/Reveal";
import { ShieldCheck, Globe, MapPin } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-24 bg-fpo-soil/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fpo-dark text-fpo-yellow rounded-lg text-[10px] font-black tracking-widest uppercase">
                <ShieldCheck size={16} /> The Khewra Advantage
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-fpo-dark leading-tight font-[family-name:var(--font-playfair)] tracking-tighter">
                What Makes Us <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fpo-primary via-fpo-yellow to-fpo-orange animate-text-shimmer">Truly Different?</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-4">
                {[
                  "Farmer-led management",
                  "Transparent pricing",
                  "Direct market linkages",
                  "Strong village presence",
                  "Mechanised field work",
                  "Immediate fair payments"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-fpo-dark">
                    <div className="h-2 w-2 rounded-full bg-fpo-orange shadow-[0_0_8px_#f37021]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-fpo-dark p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden border border-white/5 group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-fpo-primary/20 rounded-full blur-3xl group-hover:bg-fpo-primary/30 transition-all duration-700" />
              <h3 className="text-xl font-black mb-10 text-fpo-yellow uppercase tracking-widest flex items-center gap-3">
                <Globe size={22} className="text-fpo-primary animate-pulse" /> Operational Reach
              </h3>
              <div className="space-y-10">
                <div className="flex flex-col gap-1 border-l-4 border-white/10 pl-6 hover:border-fpo-primary transition-colors group/item">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover/item:text-white transition-colors">Annual Agro-Waste</span>
                  <span className="text-3xl font-black tracking-tight text-fpo-primary">Thousands of Tonnes</span>
                </div>
                <div className="flex flex-col gap-1 border-l-4 border-white/10 pl-6 hover:border-fpo-yellow transition-colors group/item">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover/item:text-white transition-colors">Vegetable Trading</span>
                  <span className="text-3xl font-black tracking-tight text-fpo-yellow">Multi-Ton Volumes</span>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4 text-[10px] font-black text-gray-400 tracking-[0.2em]">
                <MapPin size={16} className="text-fpo-orange" /> SONIPAT & REWARI, HARYANA
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}