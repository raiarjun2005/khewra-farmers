"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Building2, ShoppingCart, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fpo-dark text-gray-400 pt-20 pb-10 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-fpo-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & CIN - 4 Columns */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Khewra FPO</h3>
              <p className="text-fpo-accent font-medium uppercase tracking-widest text-xs">
                Farmer-Owned • Future-Driven
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Empowering the agricultural community through sustainable waste management and modern retail solutions.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded text-[10px] border border-white/10 text-gray-500">
              <Building2 size={12} /> CIN - U01409HR2020PTC084969
            </div>
          </div>

          {/* Registered Office - 3 Columns */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <MapPin size={18} className="text-fpo-accent" /> Registered Office
            </h4>
            <address className="not-italic text-sm leading-loose">
              Khewra Farmers Producer Co Ltd,<br />
              Opposite Katha Factory, Meerut Road,<br />
              <span className="text-white font-medium">Bhalgarh, Sonipat 131021</span>
            </address>
          </div>

          {/* Retail Counters - 5 Columns (Modern Grid) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <ShoppingCart size={18} className="text-fpo-accent" /> Retail Counters
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { loc: "Bahalgarh", addr: "NF Megamart, Opposite Katha Factory, Meerut Road" },
                { loc: "Murthal", addr: "NF Megamart, Tajpur Road, Sonipat" },
                { loc: "Rewari", addr: "NF Megamart, Village Mumtajpur" }
              ].map((store, i) => (
                <div key={i} className="group p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                  <p className="text-fpo-accent font-bold text-xs mb-1 uppercase">{store.loc}</p>
                  <p className="text-[11px] leading-tight text-gray-500 group-hover:text-gray-300 transition-colors">
                    {store.addr}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-b border-white/10">
          <a href="tel:9817260600" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fpo-accent group-hover:text-fpo-dark transition-all">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-tighter text-gray-500">Call Support</p>
              <p className="text-white font-bold">98172-60600</p>
            </div>
          </a>

          <a href="mailto:care@fpokhewra.com" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fpo-accent group-hover:text-fpo-dark transition-all">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-tighter text-gray-500">Email Us</p>
              <p className="text-white font-bold">care@fpokhewra.com</p>
            </div>
          </a>

          <a href="http://www.fpokhewra.com" target="_blank" className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-fpo-accent group-hover:text-fpo-dark transition-all">
              <Globe size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-tighter text-gray-500">Official Web</p>
              <p className="text-white font-bold flex items-center gap-1">
                fpokhewra.com <ArrowUpRight size={14} className="opacity-50" />
              </p>
            </div>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest font-medium">
          <p>&copy; {currentYear} Khewra Farmers Producer Co. Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-fpo-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-fpo-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}   