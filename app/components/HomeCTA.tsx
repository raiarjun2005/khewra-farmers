"use client";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-fpo-dark text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,164,47,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Heading with Logo Colors */}
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter font-[family-name:var(--font-playfair)]">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fpo-primary via-fpo-yellow to-fpo-orange animate-text-shimmer">
                Rural Bharat.
              </span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Join 1000+ farmers dedicated to building a transparent,
              sustainable, and technology-driven agricultural future.
            </p>

            {/* BUTTONS: Fixed Height & Width */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              {/* Primary Button */}
              <Link
                href="/#contact"
                className="group relative flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] h-[70px] px-10 bg-fpo-orange text-white font-black rounded-2xl shadow-[0_20px_40px_rgba(243,112,33,0.3)] hover:scale-105 hover:brightness-110 transition-all tracking-widest uppercase text-sm"
              >
                CONNECT WITH US{" "}
                <ArrowUpRight className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              {/* Secondary Button */}
              <Link
                href="/services"
                className="flex items-center justify-center w-full sm:w-auto sm:min-w-[280px] h-[70px] px-10 bg-white/5 backdrop-blur-md border-2 border-white/10 text-white font-black rounded-2xl hover:bg-white hover:text-fpo-dark transition-all tracking-widest uppercase text-sm"
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