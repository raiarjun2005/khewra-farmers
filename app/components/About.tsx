"use client";
import { Reveal } from "./ui/Reveal";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function About() {
  const values = ["Transparency", "Farmer First", "Sustainability", "Innovation", "Collective Growth"];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fpo-light text-fpo-primary rounded-full text-sm font-bold mb-6">
                <ShieldCheck size={16} /> Est. 2020
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-fpo-dark mb-8 leading-tight">
                Empowering Farmers, <br />
                <span className="text-fpo-primary">Driving the Future.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Khewra FPO is a farmer-owned organisation working towards enhancing farmer profitability through sustainable practices, modern inputs, and efficient value chains.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {values.map((val, i) => (
                  <span key={i} className="px-5 py-2 bg-fpo-soil text-fpo-dark font-semibold rounded-lg border border-gray-100 shadow-sm text-sm">
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="relative">
              {/* Decorative background box */}
              <div className="absolute -inset-4 bg-fpo-accent/10 rounded-3xl -rotate-2"></div>
              
              <div className="relative grid gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-fpo-primary">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-fpo-light rounded-xl text-fpo-primary"><Eye size={28}/></div>
                    <h3 className="text-2xl font-bold text-fpo-dark">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    To create a sustainable and farmer-led agri-ecosystem that enhances productivity, reduces waste, and ensures fair market access.
                  </p>
                </div>

                <div className="bg-fpo-dark p-8 rounded-2xl shadow-xl text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 rounded-xl text-fpo-accent"><Target size={28}/></div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <li className="flex items-center gap-2">✔ Genuine Agri-Inputs</li>
                    <li className="flex items-center gap-2">✔ Agro-Waste Solutions</li>
                    <li className="flex items-center gap-2">✔ Transparent Linkages</li>
                    <li className="flex items-center gap-2">✔ Modern Practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}