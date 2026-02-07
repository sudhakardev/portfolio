import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, ScrollControls, Scroll, useScroll, Float, Text, Html } from "@react-three/drei";
import * as THREE from "three";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Project Zero",
        description: "Neural architecture for data synthesis.",
        tech: ["Python", "PyTorch"],
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop",
        color: "#00f2ff"
    },
    {
        title: "Bio_Nexus",
        description: "Distributed ledger for biometric security.",
        tech: ["Rust", "Solidity"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
        color: "#a855f7"
    },
    {
        title: "Quantum_Flow",
        description: "Predictive analytics engine for financial markets.",
        tech: ["Go", "React"],
        image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&auto=format&fit=crop",
        color: "#00f2ff"
    }
];

const ProjectPortal = ({ project, index }: any) => {
    const scroll = useScroll();
    const meshRef = useRef<THREE.Group>(null);
    const [opacity, setOpacity] = useState(0);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Calculate scroll offset for this specific index
        // We want them to fly toward the camera one by one
        const offset = 1 - scroll.range(index / projects.length, 1 / projects.length);
        setOpacity(offset);

        // Position z from far away to right in front of camera
        meshRef.current.position.z = -20 + (1 - offset) * 25;

        // Parallax tilt
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, (state.mouse.x * Math.PI) / 10, 0.1);
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, (state.mouse.y * Math.PI) / 10, 0.1);
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <planeGeometry args={[4, 5]} />
                    <meshPhysicalMaterial
                        color="#000"
                        transmission={0.5}
                        thickness={1}
                        roughness={0.1}
                        metalness={0.8}
                        transparent
                        opacity={opacity * 0.9}
                    />
                </mesh>

                <Html transform distanceFactor={5} position={[0, 0, 0.1]} pointerEvents="none">
                    <div
                        className="w-80 p-8 glass rounded-3xl border border-white/10 text-white select-none transition-opacity duration-300"
                        style={{ opacity }}
                    >
                        <div className="h-40 w-full mb-6 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/5">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-3xl font-black mb-2 tracking-tighter">{project.title}</h3>
                        <p className="text-sm opacity-60 mb-6 leading-relaxed font-mono uppercase text-[10px]">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t: string) => (
                                <span key={t} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono">{t}</span>
                            ))}
                        </div>
                        <div className="flex gap-6">
                            <button className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                                <Github size={18} />
                                <span className="text-[10px] font-mono tracking-widest">SOURCE</span>
                            </button>
                            <button className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                                <ExternalLink size={18} />
                                <span className="text-[10px] font-mono tracking-widest">LIVE_LINK</span>
                            </button>
                        </div>
                    </div>
                </Html>
            </Float>
        </group>
    );
};

const DeepScrollPortal = () => {
    return (
        <div className="h-[800px] w-full relative">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <ScrollControls pages={projects.length} damping={0.1}>
                    <Scroll>
                        {projects.map((p, i) => (
                            <ProjectPortal key={i} project={p} index={i} />
                        ))}
                    </Scroll>
                </ScrollControls>
            </Canvas>

            <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                {projects.map((_, i) => (
                    <div key={i} className="w-1 h-8 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-primary origin-bottom animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeepScrollPortal;
