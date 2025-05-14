import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense, useRef, useMemo } from 'react';
import * as THREE from 'three';
import React from 'react';

function RetroComputerModel() {
  const { scene } = useGLTF('/retro_computer_-_pc_low_poly_3d_model.glb');
  return <primitive object={scene} />;
}

function SpinningGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const [centered, setCentered] = React.useState(false);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = performance.now() / 10000;
    }
  });

  React.useEffect(() => {
    if (group.current && !centered) {
      // Compute bounding box after model loads
      const box = new THREE.Box3().setFromObject(group.current);
      const center = box.getCenter(new THREE.Vector3());
      group.current.position.set(-center.x, -center.y, -center.z);
      setCentered(true);
    }
  }, [centered]);

  return (
    <group ref={group} scale={[8, 8, 8]}>
      {children}
    </group>
  );
}

// Star field component
function Stars({ count = 300 }) {
  const points = useRef<THREE.Points>(null);
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      const r = 80 + Math.random() * 40;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );
    }
    return new Float32Array(positions);
  }, [count]);

  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[starPositions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#fff" size={1.2} sizeAttenuation />
    </points>
  );
}

function Scene() {
  const { scene } = useThree();
  scene.background = null;
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 20, 10]} intensity={1.3} />
      <Stars count={300} />
      <Suspense fallback={null}>
        <SpinningGroup>
          <RetroComputerModel />
        </SpinningGroup>
      </Suspense>
    </>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Black night sky background */}
      <div className="absolute inset-0 w-full h-full z-0" style={{
        background: '#000',
      }} />
      <Canvas
        camera={{ position: [0, 0, 60], fov: 60 }}
        gl={{ alpha: true }}
        style={{ position: 'absolute', inset: 0, zIndex: 10, background: 'transparent' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
} 