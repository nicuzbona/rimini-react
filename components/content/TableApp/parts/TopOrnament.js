import React, { useEffect } from "react";

export default function ({ position, envMap }) {
  return (
    <mesh
      position={position}
      //   rotation={[-Math.PI / 2, 0, 0]}
    >
      <cylinderBufferGeometry attach="geometry" args={[0.2, 0.2, 0.05, 50]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        metalness={0.5}
        roughness={0}
        refractionRatio={0}
        envMap={envMap}
      />
    </mesh>
  );
}
