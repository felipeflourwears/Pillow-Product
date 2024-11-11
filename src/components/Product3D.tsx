// src/components/Product3D.tsx
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

type ModelProps = {
  path: string;
  scale?: number | [number, number, number];
};

function Model({ path, scale = 1 }: ModelProps) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={scale} />;
}

export default function Product3D() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          {/* Aquí ajustas la escala para hacer el modelo más grande */}
          <Model path="/public/product.glb" scale={2} />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
