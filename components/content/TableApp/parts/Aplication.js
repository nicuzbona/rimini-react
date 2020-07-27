import React, { useMemo } from "react";
import { TextureLoader } from "three";

export default function Aplication({
  geometry,
  position,
  aplState,
  onApplicationClick,
  envMap,
}) {
  const materialType = aplState.materials[`${aplState.currentOption.id}`];
  return (
    <mesh
      layers={0}
      position={position}
      scale={[0.7, 0.7, 0.7]}
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={onApplicationClick}
    >
      <meshPhysicalMaterial
        attach="material"
        color={materialType.color}
        refractionRatio={1}
        roughness={materialType.roughness}
        metalness={materialType.metalness}
        clearCoat={1}
        clearCoatRoughness={0}
        reflectivity={materialType.reflectivity}
        opacity={1}
        envMap={envMap}
        side={THREE.DoubleSide}
        // map={glassTexture}
      />
    </mesh>
  );
}
