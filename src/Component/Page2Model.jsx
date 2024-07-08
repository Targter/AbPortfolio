import React, { Suspense, lazy, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Preload } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

import { Decal, Float, useTexture } from "@react-three/drei";

const Ball = (prop) => {
  const [decal] = useTexture([prop.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          // color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0.1, 0.1, 1]}
          rotation={[2 * Math.PI, 0, 0.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const Box4Geometry = ({ imgUrl }) => {
  return (
    <>
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        // gl={{
        //   preserveDrawingBuffer: true,
        // }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} />
        <Suspense fallback={<CanvasLoader />}>
          <Ball imgUrl={imgUrl} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Box4Geometry;
