import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Github, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        title: "LLM Student Analytics",
        description: "Solution: Deployed an LLM-powered platform predicting student performance through behavioral and academic data integration.",
        tech: ["LLM", "Predictive Analytics", "React"],
        github: "https://github.com/sudhakardev/LLM-Driven-Student-Performance-Analytics",
        color: "#00f2ff",
    },
    {
        title: "Exam Question Predictor",
        description: "Solution: Python-based AI web application analyzing historical papers to predict high-probability questions using NLP and topic modeling.",
        tech: ["NLP", "Python", "TF-IDF"],
        github: "https://github.com/sudhakardev/exam-question-probability-predictor",
        color: "#00f2ff",
    },
    {
        title: "AutoMind AI",
        description: "Solution: Engineered an intelligent end-to-end ML pipeline for automated feature engineering and model benchmarking.",
        tech: ["AutoML", "Feature Engineering", "Python"],
        github: "https://github.com/sudhakardev/AutoMind-AI-Automated-Feature-Engineering",
        color: "#00f2ff",
    },
    {
        title: "FusionAI Hybrid DSS",
        description: "Solution: Hybrid Decision Support System for credit risk assessment using Random Forest, Neural Networks, and SHAP explainability.",
        tech: ["Neural Networks", "XAI", "FinTech"],
        github: "https://github.com/sudhakardev/FusionAI-DSS-Hybrid-Credit-Risk",
        color: "#00f2ff",
    },
    {
        title: "Accelerated 3D MRI",
        description: "Solution: AI-driven system for accelerated 3D MRI reconstruction and automated neurological disorder screening.",
        tech: ["Computer Vision", "Medical AI", "3D"],
        github: "https://github.com/sudhakardev/Accelerated-3D-MRI-Reconstruction",
        color: "#00f2ff",
    },
];

const Scene = ({ activeIndex, isSpinning }: { activeIndex: number; isSpinning: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);
    const rotationSpeed = useRef(0);

    useFrame((state) => {
        if (!groupRef.current) return;

        if (isSpinning) {
            // Spin rapidly during "Loading"
            rotationSpeed.current = THREE.MathUtils.lerp(rotationSpeed.current, 0.2, 0.1);
            groupRef.current.rotation.y += rotationSpeed.current;
        } else {
            // Slow down and lock into position
            rotationSpeed.current = THREE.MathUtils.lerp(rotationSpeed.current, 0, 0.1);
            const targetRotation = -(activeIndex / projects.length) * Math.PI * 2;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {projects.map((p, i) => {
                const angle = (i / projects.length) * Math.PI * 2;
                const radius = 4;
                const x = Math.cos(angle) * radius;
                const z = Math.sin(angle) * radius;

                return (
                    <mesh key={i} position={[x, 0, z]} rotation={[0, -angle + Math.PI / 2, 0]}>
                        <boxGeometry args={[2, 3, 0.05]} />
                        <meshStandardMaterial
                            color="#00f2ff"
                            transparent
                            opacity={i === activeIndex && !isSpinning ? 0.8 : 0.1}
                            emissive="#00f2ff"
                            emissiveIntensity={i === activeIndex && !isSpinning ? 2 : 0}
                        />
                    </mesh>
                );
            })}
        </group>
    );
};

const ProjectCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isSpinning, setIsSpinning] = useState(true);

    useEffect(() => {
        // Initial "Rotate then Stop" cycle (3 seconds)
        const timer = setTimeout(() => setIsSpinning(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    const next = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev + 1) % projects.length);
            setIsSpinning(false);
        }, 800);
    };

    const prev = () => {
        setIsSpinning(true);
        setTimeout(() => {
            setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
            setIsSpinning(false);
        }, 800);
    };

    return (
        <div className="h-[480px] sm:h-[550px] w-full relative flex items-center justify-center bg-[#020408]">
            {/* 3D Kinetic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={40} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={2} color="#00f2ff" />
                    <Scene activeIndex={activeIndex} isSpinning={isSpinning} />
                </Canvas>
            </div>

            {/* Micro Card Overlay */}
            <div className="relative z-10 w-full max-w-[calc(100vw-3rem)] sm:max-w-sm px-2 sm:px-6">
                <AnimatePresence mode="wait">
                    {!isSpinning && (
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            className="glass p-6 rounded-[2rem] border border-white/10 shadow-2xl bg-black/80 backdrop-blur-3xl"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                    <span className="font-mono text-[8px] text-primary/60 tracking-[0.3em] uppercase">PROJECT_{activeIndex + 1}</span>
                                </div>
                                <a href={projects[activeIndex].github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
                                    <Github size={18} />
                                </a>
                            </div>

                            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter leading-tight">
                                {projects[activeIndex].title}
                            </h3>

                            <p className="text-[11px] text-white/60 leading-relaxed font-light mb-6">
                                {projects[activeIndex].description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {projects[activeIndex].tech.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[8px] font-mono text-white/40 uppercase">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                <div className="flex gap-4">
                                    <button onClick={prev} className="p-3 rounded-full hover:bg-white/5 text-white/40 hover:text-primary transition-all">
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button onClick={next} className="p-3 rounded-full hover:bg-white/5 text-white/40 hover:text-primary transition-all">
                                        <ChevronRight size={20} />
                                    </button>
                                </div>

                                <a
                                    href={projects[activeIndex].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 group text-primary font-black text-[10px] tracking-widest uppercase"
                                >
                                    View Live <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {isSpinning && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
                            <p className="font-mono text-[10px] text-primary/40 uppercase tracking-[0.5em]">Synchronizing_Archive...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectCarousel;
