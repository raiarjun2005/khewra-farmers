"use client";
import { Reveal } from "./ui/Reveal";
import { Store, Trash2, Factory, Truck, GraduationCap, ChevronRight } from "lucide-react";

const operations = [
  {
    title: "Agri-Input Retail Outlets",
    loc: "Bahalgarh, Murthal, Rewari",
    desc: "Certified seeds, fertilisers, and pesticides available through our dedicated retail network.",
    icon: <Store className="w-5 h-5" />,
  },
  {
    title: "Agro-Waste Collection",
    loc: "Mechanised Operations",
    desc: "Large-scale collection of Paddy Straw and Mustard Stover to prevent stubble burning.",
    icon: <Trash2 className="w-5 h-5" />,
  },
  {
    title: "Biomass Pellet Production",
    loc: "Unit at Rewari",
    desc: "Converting agricultural residue into sustainable biomass pellets for industrial use.",
    icon: <Factory className="w-5 h-5" />,
  },
  {
    title: "Vegetable Aggregation",
    loc: "Trading Operations",
    desc: "Direct sourcing of fresh vegetables from farmers for organized market supply.",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    title: "Farmer Advisory Services",
    loc: "Field Support",
    desc: "Scientific crop monitoring and monitoring support to ensure better yields for farmers.",
    icon: <GraduationCap className="w-5 h-5" />,
  }
];

export default function Operations() {
  return (
    <section className="py-24 bg-[#FDFBF7]" id="services">
      <div className="container mx-auto px-6">
        
        <Reveal>
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E1A] tracking-tight mb-6">
              Core <span className="text-[#2D5A27]">Operations</span>
            </h2>
            <p className="text-[#4B5E4B] text-lg leading-relaxed">
              Sustainable and technology-driven services supporting the farming community.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-6">
          {operations.map((op, idx) => (
            <div 
              key={idx} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] min-w-[300px] flex-grow-0"
            >
              <Reveal delay={idx * 0.1}>
                <div className="group h-full bg-[#F4F1EA] border border-[#E5E0D8] shadow-sm p-8 rounded-2xl hover:bg-[#FDFBF7] hover:shadow-lg hover:border-[#2D5A27]/50 transition-all duration-300">
                  
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#FDFBF7] border border-[#E5E0D8] flex items-center justify-center text-[#2D5A27] group-hover:bg-[#2D5A27] group-hover:text-[#FDFBF7] transition-all duration-300">
                      {op.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5A735A] group-hover:text-[#2D5A27] transition-colors">
                      {op.loc}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A2E1A] mb-3 tracking-tight">
                    {op.title}
                  </h3>
                  <p className="text-[#4B5E4B] text-sm leading-relaxed mb-6">
                    {op.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-bold text-[#2D5A27] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LEARN MORE <ChevronRight size={14} />
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}