import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Brain, LineChart, Cpu, Database, Layout, Terminal, Box } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Logic Engineering",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    description: "Core programming and algorithmic foundations.",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "C++"],
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Neural Intelligence",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    description: "AI, Machine Learning, and LLM implementation.",
    skills: ["LLM Integration", "Deep Learning", "Flask", "PyTorch", "TensorFlow", "OpenAI API"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Insight HUD",
    icon: <LineChart className="w-6 h-6 text-emerald-400" />,
    description: "Data analysis and visualization systems.",
    skills: ["Power BI", "Pandas", "Alteryx", "Tableau", "SQL", "D3.js"],
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "System Architecture",
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    description: "Infrastructure and backend scalability.",
    skills: ["Docker", "AWS", "Git", "PostgreSQL", "Nginx", "Redis"],
    color: "from-orange-500/20 to-red-500/20"
  }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen bg-[#020408] flex flex-col items-center py-24 overflow-hidden"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f2ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-20">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6 uppercase tracking-widest">
              <Terminal className="w-3 h-3" />
              <span>Skillset_Protocol_Initiated</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-none mb-4">
              SKILL <span className="text-glow-cyan">MATRIX</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">
              Decoding expertise across the technical spectrum—from low-level logic to high-level neural architectures.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          style={{ opacity, y }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-1 rounded-3xl overflow-hidden transition-all duration-500"
            >
              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

              <div className="relative h-full bg-[#0a0c10]/90 backdrop-blur-xl p-8 rounded-[22px] border border-white/5 group-hover:border-primary/30 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/20 transition-colors">
                    {category.icon}
                  </div>
                  <Box className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">
                  {category.title}
                </h3>
                <p className="text-white/40 text-sm mb-6 font-light leading-relaxed">
                  {category.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-white/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Call for Detail */}
        <ScrollReveal>
          <div className="mt-20 text-center">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-primary/50 to-transparent">
              <a
                href="https://drive.google.com/file/d/1Z6et78FUtUW83D7Z-CFXt406MgIhc5J4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#020408] rounded-full flex items-center gap-4 group cursor-pointer hover:bg-[#0a0c10] transition-colors"
              >
                <span className="text-white/70 font-mono text-sm uppercase tracking-[0.2em]">
                  View Full Documentation
                </span>
                <Layout className="w-4 h-4 text-primary animate-pulse" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Decorative Blur and Bottom Fade */}
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/20 blur-[150px] rounded-full opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent z-10" />
    </section>
  );
};

export default SkillsSection;

