"use client";
import { Reveal } from "./ui/Reveal";
import { Store, Trash2, Factory, Truck, GraduationCap } from "lucide-react";

const operations = [
  {
    title: "Agri-Input Retail Outlets",
    loc: "Bahalgarh, Murthal, and Rewari",
    desc: "We operate well-stocked retail counters offering certified seeds, fertilisers, pesticides, bio-products, and tools.",
    points: ["Soil testing support", "Crop-wise advisory", "Genuine, affordable inputs"],
    icon: <Store className="w-6 h-6" />,
  },
  {
    title: "Agro-Waste Collection",
    loc: "Mechanised Operations",
    desc: "We collect and manage large volumes of Paddy Straw, Mustard Stover, and Sugarcane Trash using mechanised equipment.",
    points: ["Reduces stubble burning", "Improves soil health", "Generates additional income"],
    icon: <Trash2 className="w-6 h-6" />,
  },
  {
    title: "Biomass Pellet Production",
    loc: "Unit at Rewari",
    desc: "Our pelletising unit converts agro-residue into high-quality biomass pellets used in industrial boilers.",
    points: ["Waste-to-energy conversion", "Reduced pollution", "Alternative to coal"],
    icon: <Factory className="w-6 h-6" />,
  },
  {
    title: "Vegetable Aggregation",
    loc: "Trading Operations",
    desc: "We aggregate fresh vegetables (Tomato, Potato, Capsicum) directly from farmers and supply to mandis.",
    points: ["Fair pricing", "Reduced intermediaries", "Quick payments"],
    icon: <Truck className="w-6 h-6" />,
  },
  {
    title: "Farmer Advisory Services",
    loc: "Field Support",
    desc: "Our team provides continuous support through field visits, crop monitoring, and pest management advice.",
    points: ["Yield improvement", "Training sessions", "Scientific decision-making"],
    icon: <GraduationCap className="w-6 h-6" />,
  }
];

export default function Operations() {
  return (
    <section className="py-24 bg-[#fcfbf8]" id="services">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-fpo-dark tracking-tight">Our Key Operations</h2>
            <div className="h-1.5 w-20 bg-fpo-accent mx-auto mt-6 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Delivering modern, sustainable, and technology-driven agricultural services that support farmers at every stage.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {operations.map((op, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-fpo-primary/10 transition-all duration-500 h-full flex flex-col overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-fpo-soil rounded-full group-hover:bg-fpo-light transition-colors duration-500"></div>
                
                <div className="relative z-10 mb-8 w-14 h-14 bg-fpo-primary text-white rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {op.icon}
                </div>

                <div className="relative z-10 flex-grow">
                  <h3 className="text-2xl font-bold text-fpo-dark mb-2">{op.title}</h3>
                  <span className="text-sm font-bold text-fpo-accent uppercase tracking-widest mb-4 block">{op.loc}</span>
                  <p className="text-gray-600 mb-8 leading-relaxed">{op.desc}</p>
                  
                  <ul className="space-y-3">
                    {op.points.map((p, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-fpo-accent rounded-full"></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}