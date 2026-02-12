"use client";
import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { Reveal } from "./ui/Reveal";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useSpring(0, { damping: 30, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [motionValue, isInView, value]);

  const displayValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    displayValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Intl.NumberFormat("en-US").format(latest);
    });
  }, [displayValue]);

  return <span ref={ref} />;
}

const stats = [
  { label: "Established", value: 2020, suffix: "" },
  { label: "Farmer Members", value: 1000, suffix: "+" },
  { label: "Panchayats Covered", value: 25, suffix: "+" },
  { label: "Retail Outlets", value: 3, suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
{stats.map((stat, index) => (
  <Reveal key={index} delay={index * 0.1}>
    <div className="space-y-3 group">
      <h3 className="text-5xl md:text-7xl font-black text-fpo-primary tracking-tighter">
        <Counter value={stat.value} />{stat.suffix}
      </h3>
      {/* Orange bar matching logo */}
      <div className="h-1.5 w-12 bg-fpo-orange mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
      <p className="text-fpo-dark font-bold uppercase tracking-[0.2em] text-xs">
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