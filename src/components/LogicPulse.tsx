import { motion } from "framer-motion";
import { GitBranch, Trophy, GraduationCap, Activity } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
    {
        label: "DEPLOYMENT READY",
        value: "14 Projects",
        desc: "Built using industry-standard Git branching and PR reviews.",
        icon: GitBranch,
        color: "cyan"
    },
    {
        label: "VALIDATED LOGIC",
        value: "5+ Contests",
        desc: "Ranked performer in global competitive programming events.",
        icon: Trophy,
        color: "purple"
    },
    {
        label: "ACADEMIC BASELINE",
        value: "8.1 CGPA",
        desc: "M.Sc. Computer Science focus on advanced algorithms.",
        icon: GraduationCap,
        color: "cyan"
    }
];

const LogicPulse = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-16">
                        <Activity className="text-primary animate-pulse" size={24} />
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                    <stat.icon size={120} />
                                </div>

                                <div className="relative z-10">
                                    <p className="text-[10px] font-mono text-primary/60 tracking-[0.3em] uppercase mb-4">{stat.label}</p>
                                    <h3 className="text-4xl font-black text-white mb-4 tracking-tighter">{stat.value}</h3>
                                    <p className="text-sm text-white/60 leading-relaxed font-light">{stat.desc}</p>
                                </div>

                                <div className="mt-8">
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogicPulse;
