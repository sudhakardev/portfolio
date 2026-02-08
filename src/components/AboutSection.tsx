import { MapPin, GraduationCap, Code, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "300+", label: "DSA Problems", icon: Code },
  { value: "14+", label: "Projects", icon: Trophy },
  { value: "5+", label: "Contests", icon: Trophy },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-[#020408] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,242,255,0.8)] animate-pulse" />
            <h2 className="text-lg md:text-2xl font-mono font-black tracking-[0.3em] text-white uppercase">
              IDENTITY <span className="text-primary">MANIFEST</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          {/* Identity Image Module */}
          <div className="lg:col-span-4 relative">
            <div className="relative group mx-auto w-64 h-64 md:w-80 md:h-80">
              {/* Animated Background Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 group-hover:scale-125 transition-transform duration-1000 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-primary/10 scale-125 group-hover:scale-150 transition-transform duration-1000 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,242,255,0.3)] group-hover:shadow-[0_0_80px_rgba(0,242,255,0.5)] transition-all duration-700">
                <img
                  src={`${import.meta.env.BASE_URL}sk.jpeg`}
                  alt="Sudhakar K"
                  className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
              </div>

              {/* Decorative Frame Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <ScrollReveal delay={200}>
              <div className="bg-white/[0.02] p-7 rounded-3xl border border-white/10 relative overflow-hidden group shadow-xl">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-3 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                  <Code size={120} />
                </div>

                <div className="relative z-10 text-left">
                  <div className="space-y-4 mb-10">
                    <p className="text-white/80 leading-relaxed text-lg font-light max-w-3xl">
                      Specializing in the development of <span className="text-primary font-semibold">data-intensive applications</span> and high-performance backend systems.
                      I bridge the gap between complex algorithmic research such as <span className="text-white font-medium">Deep Learning and LLM integration</span> and the deployment of production-ready software.
                    </p>
                    <p className="text-white/80 leading-relaxed text-lg font-light max-w-3xl">
                      I <span className="text-primary font-medium">synthesize deep data analytics</span> with scalable engineering to transform raw intelligence into robust, functional ecosystems.
                    </p>
                  </div>

                  {/* Education Matrix - More Compact */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      { degree: "M.Sc. Computer Science (Data Science)", inst: "Mount Carmel College, Bengaluru", year: "2024–2026" },
                      { degree: "BCA (Bachelor of Computer Applications)", inst: "Sacred Heart College, Tirupattur", year: "2021–2024" }
                    ].map((edu, i) => (
                      <div key={i} className="group/edu flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover/edu:scale-105 transition-transform">
                            <GraduationCap size={16} />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm tracking-tight">{edu.degree}</h4>
                            <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest mt-0.5">{edu.inst}</p>
                          </div>
                        </div>
                        <span className="text-[9px] font-mono text-primary/30 group-hover/edu:text-primary/60 transition-colors uppercase">{edu.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Analytics Grid - More Balanced Size */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <ScrollReveal key={i} delay={300 + i * 100}>
                  <div className="bg-white/[0.04] rounded-2xl p-5 text-center border border-white/10 hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-500 group shadow-md">
                    <p className="text-3xl font-black text-white group-hover:text-primary transition-all duration-300">{s.value}</p>
                    <p className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em] mt-1 group-hover:text-primary/60 transition-colors">{s.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
