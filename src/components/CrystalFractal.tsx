import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshRefractionMaterial, Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

const CrystalShard = ({ position, rotation, scale }: any) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const { clock, mouse } = state;

        // Mouse follow rotation effect
        meshRef.current.rotation.x += (mouse.y * 0.1 - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (mouse.x * 0.1 - meshRef.current.rotation.y) * 0.05;

        // Gentle floating
        meshRef.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.001;
    });

    return (
        <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshPhysicalMaterial
                color="#00f2ff"
                transmission={0.9}
                thickness={0.5}
                roughness={0.05}
                metalness={0.1}
                transparent
                opacity={0.4}
                ior={2.4}
            />
        </mesh>
    );
};

const DataSpike = () => {
    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 2; i++) {
            p.push(new THREE.Vector3((Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50, (Math.random() - 0.5) * 50));
        }
        return p;
    }, []);

    const lineRef = useRef<THREE.Line>(null);

    useFrame((state) => {
        if (lineRef.current) {
            lineRef.current.material.opacity = Math.sin(state.clock.elapsedTime * 5) * 0.5 + 0.5;
        }
    });

    return (
        <line ref={lineRef}>
            <bufferGeometry attach="geometry" setFromPoints={points} />
            <lineBasicMaterial attach="material" color="#00f2ff" transparent opacity={0.2} />
        </line>
    );
};

const ShardField = () => {
    const shards = useMemo(() => {
        const data = [];
        for (let i = 0; i < 40; i++) {
            data.push({
                position: [
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 15,
                    (Math.random() - 0.5) * 10
                ],
                rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
                scale: Math.random() * 0.5 + 0.1
            });
        }
        return data;
    }, []);

    return (
        <group>
            {shards.map((s, i) => (
                <CrystalShard key={i} {...s} />
            ))}
            {[...Array(5)].map((_, i) => (
                <DataSpike key={i} />
            ))}
        </group>
    );
};

const CrystalFractal = () => {
    return (
        <div className="fixed inset-0 z-0 bg-black pointer-events-none">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
                <ambientLight intensity={0.1} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
                <Suspense fallback={null}>
                    <ShardField />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default CrystalFractal;
