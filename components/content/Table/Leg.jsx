import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSpring, a } from "react-spring/three";

export default function ({ texture, onCubeClick, position, size }) {
  const mesh = useRef();

  return (
    <a.mesh
      position={position}
      onClick={onCubeClick}
      ref={mesh}
      scale={size}
      castShadow
    >
      {/* <boxBufferGeometry attach="geometry" args={[0.5, 3, 0.5]} /> */}
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" transparent map={texture} />
    </a.mesh>
  );
}
