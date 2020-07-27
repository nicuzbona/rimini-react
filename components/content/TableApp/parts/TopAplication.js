import React, { useMemo } from "react";
import { TextureLoader } from "three";

export default function TopAplication({ aplState, position, envMap }) {
  const materialType = aplState.materials[`${aplState.currentOption.id}`];

  return (
    <mesh
      position={position}
      scale={[0.5, 0.5, 1]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" />
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
