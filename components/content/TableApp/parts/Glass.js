import React from "react";

export default function () {
  return (
    <mesh position={[0, 0.6, 0]} scale={[15, 0.1, 7]} castShadow>
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        transparent
        color="black"
        opacity={0.6}
        roughness={0.6}
        metalness={0.8}
      />
    </mesh>
  );
}
