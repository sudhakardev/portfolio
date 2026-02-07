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

      <ThreeDWrapper intensity={20} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="flex flex-col items-center pt-32 md:pt-48"
        >
          {/* Brand Heading removed from here as it is now in the Navbar */}
          <div className="mb-12 w-full flex justify-center px-4">
            <div className="inline-block px-4 sm:px-8 py-2 sm:py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 max-w-full">
              <span className="text-[9px] sm:text-[11px] md:text-base lg:text-lg font-mono text-primary font-black tracking-[0.05em] sm:tracking-[0.15em] md:tracking-[0.25em] uppercase whitespace-nowrap block text-center">
                SYSTEM ARCHITECTURE • DATA ANALYTICS • NEURAL COMPUTING
              </span>
            </div>
          </div>

          <div className="mb-16 max-w-4xl">
            <p className="text-2xl md:text-4xl text-white/90 font-extralight leading-tight tracking-tight">
              Designing <span className="font-black text-white italic">scalable systems</span> where performance <br className="hidden md:block" /> meets <span className="text-primary font-medium">predictive intelligence</span>.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto">
            <a
              href="https://drive.google.com/file/d/1NcuiWudJtQ83L7894jKTqZOQqzdjiaBF/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-14 py-6 overflow-hidden rounded-full bg-primary text-black font-black tracking-[0.2em] transition-all hover:scale-105 active:scale-95 w-full md:w-auto text-center shadow-[0_0_50px_rgba(0,242,255,0.4)] uppercase"
            >
              <span className="relative z-10">Access Dossier</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              className="group px-14 py-6 rounded-full border-2 border-primary/20 text-white font-bold tracking-[0.2em] hover:bg-primary/10 hover:border-primary/50 transition-all w-full md:w-auto text-center uppercase"
            >
              Secure Connection
            </a>
          </div>

          <div className="flex items-center gap-12 mt-20">
            {[
              { icon: Github, href: "https://github.com/sudhakark4227" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sudhakark4227/" },
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
                className="text-white/30 hover:text-primary transition-all hover:scale-150 duration-500"
              >
                <social.icon size={30} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </ThreeDWrapper>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-primary/40"
      >
        <a href="#about" className="group">
          <ArrowDown size={40} strokeWidth={1} className="group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
