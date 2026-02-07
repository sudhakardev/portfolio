import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, Float, PerspectiveCamera, MeshDistortMaterial, Line, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
    // Outer Ring: Programming Systems
    { name: "Python", ring: 3, angle: 0, category: "Logic Engineering", desc: "Primary tool for 300+ DSA problems" },
    { name: "Java", ring: 3, angle: Math.PI / 2, category: "Logic Engineering", desc: "Object-oriented systems architecture" },
    { name: "C", ring: 3, angle: Math.PI, category: "Logic Engineering", desc: "Low-level memory management" },
    { name: "SQL", ring: 3, angle: (3 * Math.PI) / 2, category: "Logic Engineering", desc: "PostgreSQL & MySQL master clusters" },

    // Middle Ring: Neural & Backend
    { name: "LLM", ring: 2, angle: Math.PI / 4, category: "Neural Intelligence", desc: "Integration for Dental X-Ray diagnostics" },
    { name: "Flask", ring: 2, angle: (3 * Math.PI) / 4, category: "Neural Intelligence", desc: "High-performance backend API design" },
    { name: "Django", ring: 2, angle: (5 * Math.PI) / 4, category: "Neural Intelligence", desc: "Enterprise production scaling" },
    { name: "Deep Learning", ring: 2, angle: (7 * Math.PI) / 4, category: "Neural Intelligence", desc: "CNNs and segmentation models" },

    // Inner Ring: Data Intelligence
    { name: "Power BI", ring: 1, angle: 0, category: "Insight HUD", desc: "30% KPI delivery optimization" },
    { name: "Pandas", ring: 1, angle: Math.PI, category: "Insight HUD", desc: "High-velocity dataset processing" },
    { name: "Alteryx", ring: 1, angle: Math.PI / 2, category: "Insight HUD", desc: "ETL workflow automation" },
];

const BinaryText = ({ text, revealed }: { text: string; revealed: boolean }) => {
    const [display, setDisplay] = useState("");
    const binary = "01";

    useEffect(() => {
        if (!revealed) {
            setDisplay(text.split("").map(() => binary[Math.floor(Math.random() * 2)]).join(""));
            return;
        }
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) return char;
                        return binary[Math.floor(Math.random() * binary.length)];
                    })
                    .join("")
            );
            if (iterations >= text.length) clearInterval(interval);
            iterations += 1 / 2;
        }, 30);
        return () => clearInterval(interval);
    }, [text, revealed]);

    return <span className="font-mono">{display}</span>;
};

const SkillNode = ({ skill }: { skill: any }) => {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);
    const { mouse, viewport } = useThree();
    const radius = skill.ring * 2.8;
    const speed = 0.1 / skill.ring;

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime * speed;
        const x = Math.cos(time + skill.angle) * radius;
        const z = Math.sin(time + skill.angle) * radius;

        const orbitPos = new THREE.Vector3(x, 0, z);
        const planePos = new THREE.Vector3(mouse.x * viewport.width / 2, mouse.y * viewport.height / 2, 0);
        const dist = planePos.distanceTo(orbitPos);
        const threshold = 2.5;

        const targetPos = orbitPos.clone();
        if (dist < threshold) {
            const pull = Math.pow(1 - dist / threshold, 2) * 1.2;
            targetPos.lerp(planePos, pull);
            if (!hovered) setHovered(true);
        } else {
            if (hovered) setHovered(false);
        }

        meshRef.current.position.lerp(targetPos, 0.1);
        meshRef.current.lookAt(0, 5, 0);
    });

    return (
        <group ref={meshRef}>
            <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
                <sphereGeometry args={[0.35, 32, 32]} />
                <meshStandardMaterial
                    color={hovered ? "#ffffff" : "#00f2ff"}
                    emissive={hovered ? "#00f2ff" : "#00f2ff"}
                    emissiveIntensity={hovered ? 15 : 2}
                    metalness={1}
                    roughness={0}
                />
            </mesh>

            {hovered && (
                <Line
                    points={[new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0).sub(meshRef.current?.position || new THREE.Vector3())]}
                    color="#00f2ff"
                    lineWidth={3}
                    transparent
                    opacity={0.6}
                />
            )}

            <Html distanceFactor={10} position={[0, 0, 0]} center>
                <div className="relative flex flex-col items-center">
                    <AnimatePresence>
                        {!hovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-black/50"
                            >
                                <p className="text-white font-black text-xs uppercase tracking-widest whitespace-nowrap">
                                    <BinaryText text={skill.name} revealed={true} />
                                </p>
                            </motion.div>
                        )}

                        {hovered && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                                className="w-64 glass p-8 rounded-[2rem] border-2 border-primary shadow-[0_0_50px_rgba(0,242,255,0.3)] bg-black/80 backdrop-blur-2xl pointer-events-none"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                                <p className="text-[8px] font-mono text-primary font-bold tracking-[0.5em] uppercase mb-4">Protocol_Decrypted</p>
                                <h4 className="text-white font-black text-2xl mb-3 tracking-tighter uppercase">{skill.name}</h4>
                                <p className="text-sm text-white/70 leading-relaxed font-light mb-6">{skill.desc}</p>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 0.8 }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Html>
        </group>
    );
};

const OrbitalRings = () => {
    return (
        <group>
            {[1, 2, 3].map((ring) => (
                <mesh key={ring} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[ring * 2.8 - 0.03, ring * 2.8 + 0.03, 128]} />
                    <meshBasicMaterial color="#00f2ff" transparent opacity={0.15} side={THREE.DoubleSide} />
                </mesh>
            ))}
        </group>
    );
};

const SkillsScene = () => {
    const coreRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (coreRef.current) {
            coreRef.current.rotation.y += 0.008;
            coreRef.current.rotation.x += 0.004;
        }
    });

    return (
        <group>
            <mesh ref={coreRef}>
                <sphereGeometry args={[1.4, 64, 64]} />
                <MeshDistortMaterial
                    color="#00f2ff"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    emissive="#00f2ff"
                    emissiveIntensity={3}
                    metalness={1}
                />
            </mesh>

            <pointLight position={[0, 0, 0]} intensity={10} color="#00f2ff" distance={15} />

            <OrbitalRings />

            {skills.map((skill, i) => (
                <SkillNode key={i} skill={skill} />
            ))}

            <ambientLight intensity={0.4} />
            <spotLight position={[15, 15, 15]} angle={0.2} penumbra={1} intensity={2} color="#00f2ff" />
        </group>
    );
};

const OrbitalDecryption = () => {
    return (
        <div className="h-[900px] w-full relative">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 4, 15]} fov={50} />
                <SkillsScene />
            </Canvas>
        </div>
    );
};

export default OrbitalDecryption;
