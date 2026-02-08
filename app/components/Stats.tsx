"use client";
import { Reveal } from "./ui/Reveal";

const stats = [
  { label: "Established", value: "2020" },
  { label: "Farmer Members", value: "1000+" },
  { label: "Panchayats Covered", value: "25+" },
  { label: "Retail Outlets", value: "3" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="space-y-1">
                <h3 className="text-4xl md:text-5xl font-bold text-khewra-primary">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-xs">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}