"use client";
import { Reveal } from "./ui/Reveal";
import { Zap, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BiomassSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <Reveal className="lg:w-1/2">
            <div className="relative rounded-[3.5rem] overflow-hidden bg-[#F8FAFC]/40 p-12 flex items-center justify-center border-2 border-dashed border-[#15803D]/20 group">
              <svg viewBox="0 0 200 200" className="w-64 h-64 drop-shadow-2xl transition-transform duration-700 group-hover:scale-110">
                <circle cx="100" cy="100" r="90" fill="none" stroke="#22C55E" strokeWidth="1" strokeDasharray="8 4" className="animate-spin-slow" />
                <path d="M100 35 C120 35 140 55 140 85 C140 125 100 165 100 165 C100 165 60 125 60 85 C60 55 80 35 100 35Z" fill="#15803D" />
                <path d="M100 55 C115 55 125 65 125 85 C125 110 100 135 100 135 C100 135 75 110 75 85 C75 65 85 55 100 55Z" fill="#EAB308" />
                <path d="M90 110 L110 110 M100 100 L100 120" stroke="white" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </Reveal>
          
          <Reveal delay={0.2} className="lg:w-1/2">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#15803D] text-white rounded-lg text-[10px] font-black tracking-widest uppercase">
                Energy Revolution
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tighter leading-tight font-[family-name:var(--font-playfair)]">
                Waste-to-Energy <br />
                <span className="text-[#15803D]">Transformation.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed border-l-4 border-[#EA580C] pl-8">
                "Our pelletising unit at Rewari converts agro-residue into high-quality biomass fuel, offering a clean and profitable alternative to coal."
              </p>
              <Link href="/agro-waste" className="inline-block">
                <button className="px-12 py-6 bg-[#15803D] text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(21,128,61,0.2)] hover:bg-[#EA580C] hover:-translate-y-2 transition-all duration-300 flex items-center gap-4 tracking-widest uppercase text-xs">
                  View 6-Step Workflow <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}