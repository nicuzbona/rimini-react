import React from "react";

export default function Aplication({
  material,
  geometry,
  position,
  onApplicationClick,
}) {
  return (
    <mesh
      position={position}
      scale={[0.7, 0.7, 0.7]}
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={onApplicationClick}
    >
      <meshStandardMaterial attach="material" {...material} />
    </mesh>
  );
}
