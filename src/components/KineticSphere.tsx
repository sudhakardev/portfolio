import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Code, Database, BarChart3, Wrench, Brain, Globe, Terminal, Layers } from "lucide-react";

const skillData = [
    { name: "Logic Engines", icon: Code, color: "#00f2ff" },
    { name: "Neural", icon: Brain, color: "#a855f7" },
    { name: "Cloud", icon: Globe, color: "#00f2ff" },
    { name: "Forge", icon: Wrench, color: "#a855f7" },
    { name: "Synthetics", icon: Database, color: "#00f2ff" },
    { name: "Horizons", icon: BarChart3, color: "#a855f7" },
    { name: "Cyber Bio", icon: Layers, color: "#00f2ff" },
    { name: "Core", icon: Terminal, color: "#a855f7" },
];

const SkillNode = ({ item, index, total, onSelect }: any) => {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    // Position on a sphere
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    const radius = 4;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    useFrame((state) => {
        if (!meshRef.current) return;
        // Slow rotation
        meshRef.current.position.set(x, y, z);
        meshRef.current.lookAt(0, 0, 0);
    });

    return (
        <group
            ref={meshRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={() => onSelect(item.name)}
        >
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh>
                    <boxGeometry args={[0.5, 0.5, 0.5]} />
                    <meshPhysicalMaterial
                        color={item.color}
                        emissive={item.color}
                        emissiveIntensity={hovered ? 2 : 0.5}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
                <Text
                    position={[0, 0.6, 0]}
                    fontSize={0.2}
                    color="white"
                    font="/fonts/Inter-Bold.woff"
                    anchorX="center"
                    anchorY="middle"
                >
                    {item.name}
                </Text>
            </Float>
        </group>
    );
};

const KineticSphere = () => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="h-[600px] w-full relative">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
                <group>
                    {skillData.map((s, i) => (
                        <SkillNode key={i} item={s} index={i} total={skillData.length} onSelect={setSelected} />
                    ))}

                    {/* Central Sphere Core */}
                    <Sphere args={[2, 64, 64]}>
                        <MeshDistortMaterial
                            color="#00f2ff"
                            distort={0.4}
                            speed={2}
                            roughness={0.1}
                            metalness={1}
                            transparent
                            opacity={0.1}
                            wireframe
                        />
                    </Sphere>
                </group>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            {selected && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="glass p-6 rounded-2xl border border-primary/20 text-center animate-in fade-in zoom-in duration-300">
                        <h3 className="text-2xl font-black text-primary tracking-widest uppercase">{selected}</h3>
                        <p className="text-muted-foreground font-mono text-xs mt-2">LINK_ESTABLISHED // ACCESSING_MODAL</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KineticSphere;
