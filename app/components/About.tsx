"use client";
import { Reveal } from "./ui/Reveal";
import { 
  Target, Eye, ShieldCheck, Users, 
  CheckCircle2, Zap, HeartHandshake, MapPin 
} from "lucide-react";

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
      {/* Subtle Background Elements to guide the eye */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-fpo-soil/30 -skew-x-12 transform origin-top-right pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. The Core Story Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
          <Reveal>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fpo-dark text-fpo-yellow rounded-lg text-xs font-black tracking-widest shadow-xl">
                <ShieldCheck size={16} /> SINCE 2020 [cite: 3]
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-fpo-dark leading-tight font-[family-name:var(--font-playfair)]">
                Farmer-Owned. <br />
                <span className="text-fpo-primary">Future-Driven.</span>
              </h2>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-4 border-fpo-orange pl-8">
                <p>
                  Khewra Farmers Producer Co. Ltd. is a farmer-owned enterprise committed to transforming agriculture through modern input supply, sustainable agro-waste solutions, and organised market linkages[cite: 5].
                </p>
                <p>
                  With a network of <span className="font-bold text-fpo-dark">1000+ active farmers</span> across Sonipat and Rewari, we provide end-to-end support—from crop planning to transparent market sale[cite: 4, 6].
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {values.map((val, i) => (
                  <span key={i} className={`px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-tighter ${val.color}`}>
                    {val.name} [cite: 83]
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Vision & Mission: Clean & Bold */}
          <Reveal delay={0.2}>
            <div className="grid gap-8">
              {/* Vision Card */}
              <div className="group bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 hover:border-fpo-primary transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-fpo-primary/10 text-fpo-primary rounded-2xl flex items-center justify-center group-hover:bg-fpo-primary group-hover:text-white transition-all">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-fpo-dark uppercase tracking-tight">Our Vision [cite: 78]</h3>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed italic">
                  "To create a sustainable and farmer-led agri-ecosystem that enhances productivity, reduces waste, and ensures fair market access for every member[cite: 79]."
                </p>
              </div>

              {/* Mission Card */}
              <div className="group bg-fpo-dark p-10 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fpo-orange/10 rounded-full blur-3xl" />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 bg-fpo-yellow text-fpo-dark rounded-2xl flex items-center justify-center">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Our Mission [cite: 80]</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-gray-300 relative z-10">
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-primary" /> Genuine Inputs [cite: 81]</li>
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-yellow" /> Waste Solutions [cite: 81]</li>
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-orange" /> Market Linkages [cite: 81]</li>
                  <li className="flex items-center gap-2 hover:text-fpo-yellow transition-colors"><CheckCircle2 size={16} className="text-fpo-primary" /> Advisory [cite: 81]</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 2. Differentiation Grid: High Visibility */}
        <div className="mb-32">
          <Reveal>
            <div className="mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-fpo-dark mb-4 font-[family-name:var(--font-playfair)]">What Makes Us Different [cite: 14]</h3>
              <div className="w-24 h-2 bg-fpo-orange rounded-full" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Professionally Managed", 
                desc: "A farmer-led, professionally managed organisation ensuring grassroots connection with corporate efficiency[cite: 15].",
                icon: <Users size={28} />,
                accent: "fpo-primary"
              },
              { 
                title: "Mechanised Strength", 
                desc: "Using advanced equipment like rakes and balers for efficient field clearing in 24–48 hours[cite: 18, 129].",
                icon: <Zap size={28} />,
                accent: "fpo-yellow"
              },
              { 
                title: "Direct & Fair Payments", 
                desc: "Ensuring transparent pricing and immediate, fair payments for farmers' produce and waste[cite: 20].",
                icon: <HeartHandshake size={28} />,
                accent: "fpo-orange"
              }
            ].map((box, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full border-b-8 border-gray-100 hover:border-fpo-orange">
                  <div className={`w-14 h-14 bg-${box.accent} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    {box.icon}
                  </div>
                  <h4 className="text-xl font-bold text-fpo-dark mb-4">{box.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{box.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 3. Footprint Strip: Vibrant Impact */}
        <div className="bg-fpo-primary p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#f8b133_1px,transparent_1px)] bg-[length:24px_24px]" />
          
          <div className="grid md:grid-cols-4 gap-12 text-center relative z-10">
            <div className="space-y-1">
              <p className="text-fpo-yellow text-4xl font-black tracking-tighter">25+</p>
              <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">Panchayats Covered </p>
            </div>
            <div className="space-y-1">
              <p className="text-white text-4xl font-black tracking-tighter">1000+</p>
              <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">Active Members </p>
            </div>
            <div className="space-y-1">
              <p className="text-fpo-yellow text-4xl font-black tracking-tighter">3</p>
              <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">Retail Outlets [cite: 29]</p>
            </div>
            <div className="space-y-1">
              <p className="text-white text-4xl font-black tracking-tighter flex items-center justify-center gap-1">
                <MapPin size={24} className="text-fpo-orange" /> 2
              </p>
              <p className="text-white/80 text-[10px] font-black uppercase tracking-widest">Districts (Sonipat, Rewari) </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}