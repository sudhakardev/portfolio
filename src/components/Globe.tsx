import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

const NeuralGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[2.2, 64, 64]}>
          <MeshDistortMaterial
            color="#00f2ff"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={1}
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>

        {/* Core Light */}
        <Sphere args={[1, 32, 32]}>
          <meshBasicMaterial color="#00f2ff" transparent opacity={0.1} />
        </Sphere>
      </Float>
    </group>
  );
};

const Globe3D = () => {
  return (
    <div className="w-full h-80 relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
        <NeuralGlobe />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default Globe3D;
