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


 
const Pillow = () => {
    return (
        <div className="relative z-20 w-full h-[700px]"> 
            <Canvas camera={{ position: [0, 0, 25], near: 0.1, far: 50 }} className="bg-transparent">
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} />
                <Suspense fallback={null}>
                <Model path="/pillow.glb" scale={0.05} /> {/* Aquí el modelo 3D ya está centrado */}
                </Suspense>
                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>

    );
}

export default Pillow