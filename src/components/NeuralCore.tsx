import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Core = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;

            // Data pulse effect via scale
            const pulse = 1 + Math.sin(clock.getElapsedTime() * 2) * 0.05;
            meshRef.current.scale.set(pulse, pulse, pulse);
        }
    });

    return (
        <group>
            {/* Internal Light Source */}
            <pointLight position={[0, 0, 0]} intensity={2} color="#00f2ff" />

            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <Sphere ref={meshRef} args={[1, 64, 64]} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                    <MeshDistortMaterial
                        color={hovered ? "#00f2ff" : "#1a1a2e"}
                        distort={0.4}
                        speed={2}
                        roughness={0.1}
                        metalness={1}
                        transparent
                        opacity={0.6}
                    />
                </Sphere>

                {/* Inner Core */}
                <Sphere args={[0.5, 32, 32]}>
                    <MeshWobbleMaterial
                        color="#00f2ff"
                        factor={0.4}
                        speed={5}
                        emissive="#00f2ff"
                        emissiveIntensity={2}
                    />
                </Sphere>
            </Float>

            {/* Orbiting Rings */}
            {[1.5, 2.0, 2.5].map((radius, i) => (
                <mesh key={i} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
                    <torusGeometry args={[radius, 0.01, 16, 100]} />
                    <meshBasicMaterial color="#00f2ff" transparent opacity={0.2} />
                </mesh>
            ))}
        </group>
    );
};

const NeuralCore = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Core />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default NeuralCore;
