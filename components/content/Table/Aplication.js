import React from "react";

export default function Aplication({ material, geometry, texture, position }) {
  return (
    <mesh
      position={position}
      scale={[0.7, 0.7, 0.7]}
      material={material}
      geometry={geometry}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <meshBasicMaterial attach="material" transparent map={texture} />
    </mesh>
  );
}
