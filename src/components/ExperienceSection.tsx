import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary text-glow-cyan">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12 box-glow-cyan" />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
              <Briefcase size={12} className="text-primary" />
            </div>

            <div className="glass rounded-xl p-8 neon-border shadow-2xl bg-white/[0.02]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">Data Analyst Trainee</h3>
                  <p className="text-primary font-mono text-sm tracking-widest mt-1">MedTourEasy</p>
                </div>
                <span className="text-xs font-mono text-primary/60 border border-primary/20 rounded-full px-4 py-1 w-fit mt-3 sm:mt-0">
                  APR 2024 – MAY 2024
                </span>
              </div>

              <div className="space-y-6">
                {[
                  { label: "ARCHITECTURE", desc: "Architected interactive Power BI dashboards that increased KPI delivery speed by 30% for executive stakeholders." },
                  { label: "PROCESSING", desc: "Validated and transformed high-volume healthcare datasets (10,000+ records) to ensure zero-latency reporting accuracy." },
                  { label: "CONSULTING", desc: "Translated complex stakeholder requirements into technical analytical frameworks for data-driven strategic decisions." }
                ].map((item, i) => (
                  <div key={i} className="group/item">
                    <p className="text-[10px] font-mono text-primary/40 group-hover/item:text-primary transition-colors tracking-[0.3em] uppercase mb-1">
                      {item.label}
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ExperienceSection;
