import React, { useMemo } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { a } from "react-spring/three";

export default function TopAplication({ aplState, position, envMap }) {
  const materialType = aplState.materials[`${aplState.currentOption.id}`];

  return (
    <a.mesh
      position={position}
      scale={[0.5, 0.5, 0.0027]}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <boxBufferGeometry attach="geometry" />
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
    </a.mesh>
  );
}
