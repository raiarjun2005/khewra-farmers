"use client";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, Mail, Globe, Building2, ShoppingCart, 
  ArrowUpRight, ChevronDown, Facebook, Instagram, Twitter, ChevronUp 
} from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-fpo-dark text-gray-400 pt-20 pb-6 overflow-hidden relative border-t border-white/5">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-fpo-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-fpo-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* 1. Brand Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <motion.h3 
                className="text-white text-3xl font-bold tracking-tight mb-2 font-[family-name:var(--font-playfair)]"
              >
                Khewra FPO
              </motion.h3>
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-fpo-accent" />
                <p className="text-fpo-accent font-bold uppercase tracking-[0.2em] text-[10px]">
                  Farmer-Owned • Future-Driven
                </p>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              We are revolutionizing the agricultural landscape by bridging the gap between traditional farming and modern retail solutions. Empowering farmers, enriching communities.
            </p>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i} href="#" 
                  whileHover={{ y: -3, color: "#8db600" }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-fpo-accent/50 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 2. Registered Office (Mobile Accordion) */}
          <div className="lg:col-span-3">
            <button 
              onClick={() => toggleSection('office')}
              className="w-full flex justify-between items-center lg:cursor-default"
            >
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <MapPin size={18} className="text-fpo-accent" /> Registered Office
              </h4>
              <ChevronDown className={`lg:hidden transition-transform ${openSection === 'office' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`mt-6 space-y-4 lg:block ${openSection === 'office' ? 'block' : 'hidden'}`}>
              <address className="not-italic text-sm leading-loose text-gray-400">
                Khewra Farmers Producer Co Ltd,<br />
                Opposite Katha Factory, Meerut Road,<br />
                <span className="text-white font-semibold border-b border-fpo-accent/30">Bhalgarh, Sonipat 131021</span>
              </address>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-fpo-primary/10 rounded-md text-[10px] border border-fpo-primary/20 text-fpo-accent">
                <Building2 size={12} /> CIN - U01409HR2020PTC084969
              </div>
            </div>
          </div>

          {/* 3. Retail Counters (Modern Grid) */}
          <div className="lg:col-span-5">
            <button 
              onClick={() => toggleSection('retail')}
              className="w-full flex justify-between items-center lg:cursor-default"
            >
              <h4 className="text-white font-bold text-lg flex items-center gap-2">
                <ShoppingCart size={18} className="text-fpo-accent" /> Retail Counters
              </h4>
              <ChevronDown className={`lg:hidden transition-transform ${openSection === 'retail' ? 'rotate-180' : ''}`} />
            </button>

            <div className={`mt-6 grid sm:grid-cols-2 gap-4 lg:grid ${openSection === 'retail' ? 'grid' : 'hidden'}`}>
              {[
                { loc: "Bahalgarh", addr: "NF Megamart, Opposite Katha Factory, Meerut Road" },
                { loc: "Murthal", addr: "NF Megamart, Tajpur Road, Sonipat" },
                { loc: "Rewari", addr: "NF Megamart, Village Mumtajpur" }
              ].map((store, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all"
                >
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-fpo-accent font-bold text-[10px] uppercase tracking-widest">{store.loc}</p>
                    <ArrowUpRight size={12} className="text-gray-600 group-hover:text-fpo-accent" />
                  </div>
                  <p className="text-[11px] leading-relaxed text-gray-400">
                    {store.addr}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Contact Strip (Responsive Flex) */}
        <div className="py-12 flex flex-wrap lg:flex-nowrap gap-8 justify-between items-center border-b border-white/10">
          {[
            { icon: Phone, label: "Call Support", val: "+91 9817260600", href: "tel:9817260600" },
            { icon: Mail, label: "Email Us", val: "care@fpokhewra.com", href: "mailto:care@fpokhewra.com" },
            { icon: Globe, label: "Official Web", val: "www.fpokhewra.com", href: "http://fpokhewra.com" }
          ].map((item, i) => (
            <motion.a 
              key={i} 
              href={item.href}
              whileHover={{ x: 5 }}
              className="flex items-center gap-5 group min-w-[240px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center border border-white/10 group-hover:border-fpo-accent/50 group-hover:bg-fpo-primary/20 transition-all shadow-xl">
                <item.icon size={22} className="group-hover:text-fpo-accent transition-colors" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">{item.label}</p>
                <p className="text-white font-bold group-hover:text-fpo-accent transition-colors">{item.val}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 5. Bottom Bar */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
          <p className="text-center md:text-left">
            &copy; {currentYear} Khewra Farmers Producer Co. Ltd. <span className="hidden md:inline mx-2">|</span> <br className="md:hidden" /> Crafted for the Future
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-fpo-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-fpo-accent transition-colors">Terms</a>
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-fpo-primary text-white rounded-full flex items-center justify-center hover:bg-fpo-accent transition-all shadow-lg"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}