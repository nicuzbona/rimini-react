import React, { useMemo, useRef, useEffect, useLayoutEffect } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { a } from "react-spring/three";

export default function Aplication({
  geometry,
  position,
  aplState,
  onApplicationClick,
  envMap,
}) {
  const materialType = aplState.materials[`${aplState.currentOption.id}`];

  return (
    <a.mesh
      layers={0}
      scale={[0.7, 0.7, 0.7]}
      geometry={geometry}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={onApplicationClick}
      position={position}
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
    </a.mesh>
  );
}
