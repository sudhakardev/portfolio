import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface HologramCardProps {
    title: string;
    icon: LucideIcon;
    skills: string[];
    color: "cyan" | "purple";
    index: number;
}

const HologramCard = ({ title, icon: Icon, skills, color, index }: HologramCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group perspective-1000 h-64 w-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`cube-container ${isHovered ? 'rotate-y-12' : ''} h-full w-full preserve-3d`}>
                {/* Front Face: The "Gift Box" / Hologram Core */}
                <div className={`cube-front cube-face glass rounded-2xl flex-col p-6 border-2 ${color === 'cyan' ? 'border-primary/40 box-glow-cyan' : 'border-secondary/40 box-glow-purple'}`}>
                    <div className={`p-4 rounded-full mb-4 ${color === 'cyan' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                        <Icon size={32} />
                    </div>
                    <h3 className="font-black text-xl text-white tracking-widest uppercase">{title}</h3>
                    <div className="mt-4 flex items-center gap-2">
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: isHovered ? "100%" : "30%" }}
                                className={`h-full ${color === 'cyan' ? 'bg-primary' : 'bg-secondary'}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Top Face: The "Unfolding" Lid */}
                <div className={`cube-top cube-face unfold-top glass rounded-t-2xl border-t-2 ${color === 'cyan' ? 'border-primary/40' : 'border-secondary/40'}`}>
                    <div className="text-[10px] font-mono text-primary animate-pulse">SYSTEM_OPEN // DEPLOYING_SKILLS</div>
                </div>

                {/* Back Face: The Content reveal */}
                <div className={`cube-back cube-face glass rounded-2xl p-6 flex flex-col justify-center items-center gap-2 border-2 ${color === 'cyan' ? 'border-primary/20' : 'border-secondary/20'}`}>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {skills.map((skill, i) => (
                            <span
                                key={i}
                                className={`text-xs px-2 py-1 rounded bg-white/5 border ${color === 'cyan' ? 'border-primary/30 text-primary' : 'border-secondary/30 text-secondary'}`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Hologram Light Pulse (Bottom base) */}
            <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-2 rounded-full blur-md ${color === 'cyan' ? 'bg-primary/40' : 'bg-secondary/40'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        </div>
    );
};

export default HologramCard;
