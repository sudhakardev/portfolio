import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const VoxelLetter = ({ char, position }: any) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.005;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group position={position}>
            <mesh ref={meshRef}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#00f2ff" emissive="#00f2ff" emissiveIntensity={2} />
            </mesh>
            <Text
                position={[0, 0, 0.2]}
                fontSize={0.3}
                color="#00f2ff"
                anchorX="center"
                anchorY="middle"
            >
                {char}
            </Text>
        </group>
    );
};

const HolographicTerminal = ({ text }: { text: string }) => {
    const chars = text.split("");

    return (
        <div className="h-[400px] w-full relative">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />

                <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                    <group position={[-chars.length * 0.25, 0, 0]}>
                        {chars.map((char, i) => (
                            <VoxelLetter key={i} char={char} position={[i * 0.5, 0, 0]} />
                        ))}
                    </group>

                    {/* Hologram Base */}
                    <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[10, 2]} />
                        <meshPhysicalMaterial
                            color="#00f2ff"
                            transmission={0.9}
                            transparent
                            opacity={0.1}
                            roughness={0}
                        />
                    </mesh>
                </Float>
            </Canvas>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none border border-primary/10 rounded-3xl bg-primary/5 backdrop-blur-sm" />
        </div>
    );
};

export default HolographicTerminal;
