"use client";
import { Reveal } from "../components/ui/Reveal";
import { Target, Eye, ShieldCheck, Users, CheckCircle2, Zap, HeartHandshake, MapPin } from "lucide-react";

export default function About() {
  const values = [
    { name: "Transparency", color: "border-[#2D5A27] text-[#2D5A27] bg-[#2D5A27]/5" },
    { name: "Farmer First", color: "border-[#D97706] text-[#1A2E1A] bg-[#D97706]/5" },
    { name: "Sustainability", color: "border-[#EA580C] text-[#EA580C] bg-[#EA580C]/5" },
    { name: "Innovation", color: "border-[#2D5A27] text-[#2D5A27] bg-[#2D5A27]/5" },
    { name: "Collective Growth", color: "border-[#D97706] text-[#1A2E1A] bg-[#D97706]/5" }
  ];

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4F1EA] -skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <Reveal>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EAE5DF] text-[#D97706] rounded-lg text-xs font-black tracking-widest uppercase border border-[#E5E0D8]">
                <ShieldCheck size={16} /> SINCE 2020
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#1A2E1A] leading-tight font-[family-name:var(--font-playfair)]">
                Farmer-Owned. <br />
                <span className="text-[#2D5A27]">Future-Driven.</span>
              </h2>
              <div className="space-y-6 text-xl text-[#4B5E4B] leading-relaxed border-l-4 border-[#EA580C] pl-8">
                <p>Khewra Farmers Producer Co. Ltd. is dedicated to enhancing farmer profitability through sustainable practices, modern inputs, and efficient value chains.</p>
                <p>With a network of <span className="font-bold text-[#1A2E1A]">1000+ active farmers</span> in Sonipat and Rewari, we provide end-to-end agri-business solutions.</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {values.map((val, i) => (
                  <span key={i} className={`px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-tighter ${val.color}`}>{val.name}</span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid gap-8">
              <div className="group bg-[#FDFBF7] p-10 rounded-[2rem] shadow-md border border-[#E5E0D8] hover:border-[#2D5A27] transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#2D5A27]/10 text-[#2D5A27] rounded-2xl flex items-center justify-center group-hover:bg-[#2D5A27] group-hover:text-[#FDFBF7] transition-all"><Eye size={28} /></div>
                  <h3 className="text-2xl font-black text-[#1A2E1A] uppercase tracking-tight">Our Vision</h3>
                </div>
                <p className="text-[#4B5E4B] text-lg leading-relaxed italic">"To create a sustainable and farmer-led agri-ecosystem that enhances productivity, reduces waste, and ensures fair market access for every member."</p>
              </div>

              <div className="group bg-[#F4F1EA] border border-[#E5E0D8] p-10 rounded-[2rem] shadow-lg text-[#1A2E1A] relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 bg-[#D97706] text-[#FDFBF7] rounded-2xl flex items-center justify-center"><Target size={28} /></div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Our Mission</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-[#2D5A27] relative z-10">
                  <li className="flex items-center gap-2 hover:text-[#2D5A27] transition-colors"><CheckCircle2 size={16} className="text-[#2D5A27]" /> Genuine Inputs</li>
                  <li className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><CheckCircle2 size={16} className="text-[#D97706]" /> Waste Solutions</li>
                  <li className="flex items-center gap-2 hover:text-[#EA580C] transition-colors"><CheckCircle2 size={16} className="text-[#EA580C]" /> Market Linkages</li>
                  <li className="flex items-center gap-2 hover:text-[#2D5A27] transition-colors"><CheckCircle2 size={16} className="text-[#2D5A27]" /> Modern Advisory</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}