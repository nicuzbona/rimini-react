import React from "react";

export default function TopAplication({ material, position }) {
  return (
    <mesh
      position={position}
      scale={[0.5, 0.5, 1]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" {...material} />
    </mesh>
  );
}
