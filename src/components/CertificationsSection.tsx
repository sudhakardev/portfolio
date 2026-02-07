import { Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const certs = [
  { name: "Python for Data Science", issuer: "NPTEL", color: "cyan" as const },
  { name: "SQL Certificate", issuer: "HackerRank", color: "purple" as const },
  { name: "Power BI", issuer: "Microsoft Learn", color: "cyan" as const },
  { name: "Google Data Analytics", issuer: "Coursera", color: "purple" as const },
  { name: "Git & Linux Fundamentals", issuer: "Online", color: "cyan" as const },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="text-primary text-glow-cyan">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-12 box-glow-cyan" />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {certs.map((c, i) => (
            <ScrollReveal key={c.name} delay={i * 100}>
              <div
                className={`glass rounded-xl p-5 flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
                  c.color === "cyan" ? "neon-border box-glow-cyan" : "border border-secondary/30 box-glow-purple"
                }`}
              >
                <Award
                  size={24}
                  className={c.color === "cyan" ? "text-primary shrink-0" : "text-secondary shrink-0"}
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.issuer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
