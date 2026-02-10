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
    <section className="py-24 bg-fpo-dark" id="services">
      <div className="container mx-auto px-6">
        
        {/* Header - Simple & Strong */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Core <span className="text-fpo-accent">Operations</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sustainable and technology-driven services supporting the farming community.
            </p>
          </div>
        </Reveal>

        {/* Layout Logic: Flexbox with Wrap to center the last 2 cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {operations.map((op, idx) => (
            <div 
              key={idx} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] min-w-[300px] flex-grow-0"
            >
              <Reveal delay={idx * 0.1}>
                <div className="group h-full bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] hover:border-fpo-accent/50 transition-all duration-300">
                  
                  {/* Icon Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-fpo-accent/10 border border-fpo-accent/20 flex items-center justify-center text-fpo-accent group-hover:bg-fpo-accent group-hover:text-fpo-dark transition-all duration-300">
                      {op.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-fpo-accent/60">
                      {op.loc}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {op.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {op.desc}
                  </p>

                  {/* Simple Footer Link */}
                  <div className="flex items-center gap-2 text-xs font-bold text-fpo-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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