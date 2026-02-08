"use client";
import { Reveal } from "./ui/Reveal";
// import SectionDivider from "./ui/SectionDivider"; // Notice: No curly braces here

export default function Process() {
  return (
    <section className="relative py-32 bg-fpo-dark text-white overflow-visible">
      {/* 1. Pro Transition: Wave Divider with white fill to match previous section */}
      {/* <SectionDivider color="fill-white" /> */}

      <div className="container mx-auto px-6 pt-16 relative z-30">
        <Reveal>
          <div className="mb-20 text-center">
             {/* Text from doc: Agro-Waste Management */}
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              How We Work
            </h2>
            <p className="text-fpo-accent text-lg font-bold uppercase tracking-[0.3em]">
              Agro-Waste Management Process
            </p>
          </div>
        </Reveal>

        {/* Baki ka steps grid yahan continue hoga... */}
        
        <Reveal delay={0.6}>
          <div className="mt-20 p-10 bg-gradient-to-br from-fpo-primary/30 to-transparent border border-fpo-primary/40 rounded-3xl backdrop-blur-sm text-center max-w-4xl mx-auto shadow-2xl">
            <p className="text-xl italic font-light text-gray-200">
              "Mechanised workflow ensures speed, efficiency, and minimum labour requirement."
            </p>
          </div>
        </Reveal>
      </div>
      
      {/* 2. Extra Pro Touch: Subtle mesh pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </section>
  );
}