"use client";
import { Reveal } from "./ui/Reveal";
import { ShieldCheck, Globe, MapPin } from "lucide-react";

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#F4F1EA] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FDFBF7] border border-[#E5E0D8] text-[#D97706] rounded-lg text-[10px] font-black tracking-widest uppercase">
                <ShieldCheck size={16} /> The Khewra Advantage
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#1A2E1A] leading-tight font-[family-name:var(--font-playfair)] tracking-tighter">
                What Makes Us <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5A27] via-[#D97706] to-[#EA580C] animate-text-shimmer">Truly Different?</span>
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
                  <div key={i} className="flex items-center gap-3 text-sm font-bold text-[#2D5A27]">
                    <div className="h-2 w-2 rounded-full bg-[#EA580C] shadow-[0_0_8px_#ea580c]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-[#FDFBF7] p-12 rounded-[3.5rem] text-[#1A2E1A] shadow-xl border border-[#E5E0D8] relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2D5A27]/10 rounded-full blur-3xl group-hover:bg-[#2D5A27]/20 transition-all duration-700" />
              <h3 className="text-xl font-black mb-10 text-[#D97706] uppercase tracking-widest flex items-center gap-3">
                <Globe size={22} className="text-[#2D5A27] animate-pulse" /> Operational Reach
              </h3>
              <div className="space-y-10">
                <div className="flex flex-col gap-1 border-l-4 border-[#E5E0D8] pl-6 hover:border-[#2D5A27] transition-colors group/item">
                  <span className="text-[10px] font-black text-[#5A735A] uppercase tracking-widest group-hover/item:text-[#1A2E1A] transition-colors">Annual Agro-Waste</span>
                  <span className="text-3xl font-black tracking-tight text-[#2D5A27]">Thousands of Tonnes</span>
                </div>
                <div className="flex flex-col gap-1 border-l-4 border-[#E5E0D8] pl-6 hover:border-[#D97706] transition-colors group/item">
                  <span className="text-[10px] font-black text-[#5A735A] uppercase tracking-widest group-hover/item:text-[#1A2E1A] transition-colors">Vegetable Trading</span>
                  <span className="text-3xl font-black tracking-tight text-[#D97706]">Multi-Ton Volumes</span>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-[#E5E0D8] flex items-center gap-4 text-[10px] font-black text-[#5A735A] tracking-[0.2em]">
                <MapPin size={16} className="text-[#EA580C]" /> SONIPAT & REWARI, HARYANA
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}