"use client";
import { Reveal } from "../components/ui/Reveal";
import { Target, Eye, ShieldCheck, Users, CheckCircle2, Zap, HeartHandshake, MapPin } from "lucide-react";

export default function About() {
  const values = [
    { name: "Transparency", color: "border-fpo-primary text-fpo-primary bg-fpo-primary/5" },
    { name: "Farmer First", color: "border-fpo-yellow text-fpo-dark bg-fpo-yellow/5" },
    { name: "Sustainability", color: "border-fpo-orange text-fpo-orange bg-fpo-orange/5" },
    { name: "Innovation", color: "border-fpo-primary text-fpo-primary bg-fpo-primary/5" },
    { name: "Collective Growth", color: "border-fpo-yellow text-fpo-dark bg-fpo-yellow/5" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-fpo-soil/30 -skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <Reveal>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fpo-dark text-fpo-yellow rounded-lg text-xs font-black tracking-widest uppercase">
                <ShieldCheck size={16} /> SINCE 2020
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-fpo-dark leading-tight font-[family-name:var(--font-playfair)]">
                Farmer-Owned. <br />
                <span className="text-fpo-primary">Future-Driven.</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed border-l-4 border-fpo-orange pl-8">
                <p>Khewra Farmers Producer Co. Ltd. is dedicated to enhancing farmer profitability through sustainable practices, modern inputs, and efficient value chains.</p>
                <p>With a network of <span className="font-bold text-fpo-dark">1000+ active farmers</span> in Sonipat and Rewari, we provide end-to-end agri-business solutions.</p>
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
              <div className="group bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:border-fpo-primary transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-fpo-primary/10 text-fpo-primary rounded-2xl flex items-center justify-center group-hover:bg-fpo-primary group-hover:text-white transition-all"><Eye size={28} /></div>
                  <h3 className="text-2xl font-black text-fpo-dark uppercase tracking-tight">Our Vision</h3>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed italic">"To create a sustainable and farmer-led agri-ecosystem that enhances productivity, reduces waste, and ensures fair market access for every member."</p>
              </div>

              <div className="group bg-fpo-dark p-10 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 bg-fpo-yellow text-fpo-dark rounded-2xl flex items-center justify-center"><Target size={28} /></div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Our Mission</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-gray-300 relative z-10">
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-primary" /> Genuine Inputs</li>
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-yellow" /> Waste Solutions</li>
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-orange" /> Market Linkages</li>
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-primary" /> Modern Advisory</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}