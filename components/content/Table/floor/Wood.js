import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSpring, a } from "react-spring/three";

export default function ({ texture }) {
  const mesh = useRef();
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  return (
    <a.mesh
      position={[0, -2.515, 0]}
      ref={mesh}
      scale={[50, 35, 35]}
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" map={texture} />
    </a.mesh>
  );
}
