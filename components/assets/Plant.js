import React, { useMemo } from "react";
import { useState, useEffect, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";
import { TextureLoader, RGBA_PVRTC_2BPPV1_Format } from "three";

export default function ({ scale, position, geometrys, materials, textures }) {
  return (
    <group
      scale={scale}
      position={position}
      rotation={[0, (3 * Math.PI) / 2, 0]}
    >
      <mesh geometry={geometrys[1]} castShadow={true}>
        <meshBasicMaterial attach="material" map={textures[1]} />
      </mesh>

      <mesh geometry={geometrys[0]} castShadow={true}>
        <meshBasicMaterial attach="material" map={textures[0]} />
      </mesh>
    </group>
  );
}
