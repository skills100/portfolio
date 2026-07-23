"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  Float,
  MeshTransmissionMaterial,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

const GOLD = "#c8a44d";
const GOLD_LIGHT = "#e3c877";

function CrystalCluster() {
  const group = useRef<Group>(null);
  const core = useRef<Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * 0.25;
      core.current.rotation.x += delta * 0.12;
    }
    if (group.current) {
      // Smooth parallax toward pointer
      const targetY = pointer.x * 0.5;
      const targetX = -pointer.y * 0.35;
      group.current.rotation.y +=
        (targetY - group.current.rotation.y) * 0.05;
      group.current.rotation.x +=
        (targetX - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Central faceted gold crystal */}
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
        <mesh ref={core} castShadow>
          <icosahedronGeometry args={[1.35, 0]} />
          <meshStandardMaterial
            color={GOLD}
            metalness={1}
            roughness={0.18}
            envMapIntensity={1.6}
          />
        </mesh>
      </Float>

      {/* Glass ring wrapping the crystal */}
      <Float speed={1.1} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh rotation={[Math.PI / 2.4, 0.4, 0]}>
          <torusGeometry args={[2.15, 0.09, 32, 120]} />
          <MeshTransmissionMaterial
            thickness={0.6}
            roughness={0.08}
            transmission={1}
            ior={1.4}
            chromaticAberration={0.06}
            backside
            color={GOLD_LIGHT}
          />
        </mesh>
      </Float>

      {/* Orbiting accent spheres */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.4}>
        <mesh position={[2.3, 1.1, -0.5]}>
          <sphereGeometry args={[0.24, 32, 32]} />
          <meshStandardMaterial
            color={GOLD_LIGHT}
            metalness={1}
            roughness={0.15}
          />
        </mesh>
      </Float>
      <Float speed={1.6} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[-2.4, -1.2, 0.4]}>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshStandardMaterial color="#f3efe6" metalness={0.6} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.6}>
        <mesh position={[1.6, -1.6, 0.8]}>
          <dodecahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color={GOLD} metalness={1} roughness={0.25} />
        </mesh>
      </Float>
    </group>
  );
}

function Rig() {
  return (
    <Environment resolution={256}>
      <group rotation={[-Math.PI / 3, 0, 0]}>
        <Lightformer
          intensity={4}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
          color={GOLD_LIGHT}
        />
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-5, 1, -1]}
          scale={[10, 2, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[5, -1, -1]}
          scale={[10, 2, 1]}
          color={GOLD}
        />
        <Lightformer
          intensity={3}
          rotation-y={Math.PI / 2}
          position={[0, -3, 2]}
          scale={[10, 5, 1]}
          color="#3a3320"
        />
      </group>
    </Environment>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <spotLight
        position={[6, 8, 6]}
        angle={0.3}
        penumbra={1}
        intensity={1.2}
        color={GOLD_LIGHT}
      />
      <Suspense fallback={null}>
        <CrystalCluster />
        <ContactShadows
          position={[0, -2.6, 0]}
          opacity={0.35}
          scale={12}
          blur={2.6}
          far={4}
          color="#000000"
        />
        <Rig />
      </Suspense>
    </Canvas>
  );
}
