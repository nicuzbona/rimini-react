import React, { useEffect } from "react";

export default function ({ position }) {
  return (
    <mesh
      position={position}
      //   rotation={[-Math.PI / 2, 0, 0]}
    >
      <cylinderBufferGeometry attach="geometry" args={[0.2, 0.2, 0.05, 50]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        metalness={0.8}
        roughness={0.1}
        refractionRatio={0}
      />
    </mesh>
  );
}
