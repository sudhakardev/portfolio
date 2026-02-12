import { Suspense } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import ThreeDWrapper from "./ThreeDWrapper";
import NeuralCore from "./NeuralCore";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020408]">
      <div className="scanline" />

      {/* 3D Neural Core Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-black animate-pulse" />}>
        <NeuralCore />
      </Suspense>

      <ThreeDWrapper intensity={20} className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="flex flex-col items-center pt-28 sm:pt-32 md:pt-48"
        >
          {/* Brand Heading - Responsive Layout */}
          <div className="mb-6 sm:mb-12 w-full flex justify-center px-2 sm:px-4">
            <div className="inline-block px-3 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 max-w-full">
              {/* Mobile: Stacked Layout */}
              <div className="block sm:hidden text-center">
                <span className="text-[8px] font-mono text-primary font-black tracking-[0.1em] uppercase block mb-1">
                  SYSTEM ARCHITECTURE • DATA ANALYTICS
                </span>
                <span className="text-[8px] font-mono text-primary font-black tracking-[0.1em] uppercase block">
                  NEURAL COMPUTING
                </span>
              </div>
              {/* Desktop: Single Line */}
              <span className="hidden sm:block text-xs md:text-base lg:text-lg font-mono text-primary font-black tracking-[0.15em] md:tracking-[0.25em] uppercase whitespace-nowrap text-center">
                SYSTEM ARCHITECTURE • DATA ANALYTICS • NEURAL COMPUTING
              </span>
            </div>
          </div>

          {/* Main Heading - Bigger Name on Mobile */}
          <div className="mb-8 sm:mb-12 md:mb-16 max-w-4xl px-2">
            <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-extralight leading-tight tracking-tight">
              Designing <span className="font-black text-white italic">scalable systems</span> where performance <br className="hidden sm:block" /> meets <span className="text-primary font-medium">predictive intelligence</span>.
            </p>
          </div>

          {/* CTA Buttons - Stacked on Mobile */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full sm:w-auto px-6 sm:px-0">
            <a
              href="https://drive.google.com/file/d/1EFEAtYr9ozHd7F5KpIOmh2QO1hUMmx5S/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 sm:px-10 md:px-14 py-3.5 sm:py-5 md:py-6 overflow-hidden rounded-full bg-primary text-black font-black tracking-[0.15em] sm:tracking-[0.2em] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-center shadow-[0_0_50px_rgba(0,242,255,0.4)] uppercase text-xs sm:text-base"
            >
              <span className="relative z-10">Access Dossier</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              className="group px-6 sm:px-10 md:px-14 py-3.5 sm:py-5 md:py-6 rounded-full border-2 border-primary/20 text-white font-bold tracking-[0.15em] sm:tracking-[0.2em] hover:bg-primary/10 hover:border-primary/50 transition-all w-full sm:w-auto text-center uppercase text-xs sm:text-base"
            >
              Secure Connection
            </a>
          </div>

          {/* Social Links - Responsive Spacing */}
          <div className="flex items-center gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20">
            {[
              { icon: Github, href: "https://github.com/sudhakardev" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sudhakar-dev/" },
              { icon: Mail, href: "mailto:sudhakark4227@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.15 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-primary transition-all hover:scale-150 active:scale-125 duration-500"
              >
                <social.icon size={24} className="sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </ThreeDWrapper>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 text-primary/40"
      >
        <a href="#about" className="group">
          <ArrowDown size={32} strokeWidth={1} className="sm:w-10 sm:h-10 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
