"use client";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F4F1EA] text-center border-y border-[#E5E0D8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,90,39,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-black text-[#1A2E1A] leading-[1.1] tracking-tighter font-[family-name:var(--font-playfair)]">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2D5A27] via-[#D97706] to-[#EA580C] animate-text-shimmer">
                Rural Bharat.
              </span>
            </h2>

            <p className="text-[#4B5E4B] text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Join 1000+ farmers dedicated to building a transparent,
              sustainable, and technology-driven agricultural future.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link
                href="/#contact"
                className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] h-[70px] px-10 bg-[#EA580C] text-[#FDFBF7] font-black rounded-2xl shadow-lg hover:scale-105 hover:brightness-110 transition-all tracking-widest uppercase text-sm"
              >
                CONNECT WITH US{" "}
                <ArrowUpRight className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] h-[70px] px-10 bg-[#FDFBF7] border-2 border-[#E5E0D8] text-[#1A2E1A] font-black rounded-2xl hover:border-[#2D5A27] hover:text-[#2D5A27] transition-all tracking-widest uppercase text-sm shadow-sm"
              >
                OUR SERVICES
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}