import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Plane, useTexture } from "@react-three/drei";
import * as THREE from "three";

const LiquidSurface = ({ isTyping }: { isTyping: boolean }) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [distort, setDistort] = useState(0.3);

    useFrame((state) => {
        if (!meshRef.current) return;
        const { clock } = state;

        // Increase distortion when typing
        const targetDistort = isTyping ? 0.8 : 0.3;
        setDistort(THREE.MathUtils.lerp(distort, targetDistort, 0.1));

        // Slow rotation
        meshRef.current.rotation.z = clock.getElapsedTime() * 0.1;
    });

    return (
        <Plane ref={meshRef} args={[10, 10, 64, 64]} rotation={[-Math.PI / 3, 0, 0]}>
            <MeshDistortMaterial
                color="#1a1a2e"
                speed={2}
                distort={distort}
                radius={1}
                metalness={1}
                roughness={0.1}
                emissive="#00f2ff"
                emissiveIntensity={isTyping ? 0.5 : 0.1}
            />
        </Plane>
    );
};

const TerminalLink = ({ isTyping }: { isTyping: boolean }) => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#00f2ff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
                <LiquidSurface isTyping={isTyping} />
            </Canvas>
        </div>
    );
};

export default TerminalLink;
