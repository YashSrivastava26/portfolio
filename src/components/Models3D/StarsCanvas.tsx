"use client";
import { useState, useRef, Suspense, use } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, useProgress } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import Loading from "../Loading";
import CanvasLoader from "../CanvasLoader";

const Stars = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[5]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars />
        </Suspense>
        {/* <Preload all /> */}
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
