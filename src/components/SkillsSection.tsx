import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import OrbitalDecryption from "./OrbitalDecryption";
import { motion, useScroll, useTransform } from "framer-motion";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sphereOpacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0]);
  const sphereScale = useTransform(scrollYProgress, [0.75, 0.98], [1, 0.01]);
  const sphereY = useTransform(scrollYProgress, [0.75, 1], [0, 300]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#020408] flex flex-col items-center pt-48 sm:pt-64 pb-24"
    >
      {/* High Contrast Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f2ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff08_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

      <div className="container mx-auto px-4 relative z-20 text-center mb-12 sm:mb-20">
        <ScrollReveal>
          <div className="inline-block">
            <div className="flex items-center gap-4 justify-center">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(0,242,255,0.8)] animate-pulse" />
              <h2 className="text-5xl md:text-[8rem] font-black tracking-tighter text-white uppercase italic leading-none">
                ORBITAL <span className="text-glow-cyan">DECRYPTION</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <motion.div
        style={{
          opacity: sphereOpacity,
          scale: sphereScale,
          y: sphereY
        }}
        className="w-full relative z-10 flex justify-center"
      >
        <OrbitalDecryption />
      </motion.div>

      {/* Galaxy Collapse Point */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 0]),
          scale: useTransform(scrollYProgress, [0.9, 1], [0, 10])
        }}
        className="absolute bottom-40 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full blur-2xl z-30 shadow-[0_0_100px_rgba(0,242,255,1)]"
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-20 w-full px-4">
        <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-4 inline-block">
          <p className="text-[8px] sm:text-[10px] font-mono text-primary/80 uppercase tracking-[0.2em] sm:tracking-[0.4em]">
            Interact to probe skill nodes // Decryption_Enabled
          </p>
        </div>
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent mx-auto rounded-full shadow-[0_0_20px_rgba(0,242,255,0.5)]" />
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent z-10" />
    </section>
  );
};

export default SkillsSection;
