import React, { useContext, useEffect } from "react";
import Context from "../../../../store/context";
import { useRef } from "react";
import { a } from "react-spring/three";

export default function ({ texture, onCubeClick, position, size }) {
  const mesh = useRef();
  return (
    <a.mesh position={position} onClick={onCubeClick} ref={mesh} scale={size} >
      <boxBufferGeometry attach="geometry"  />
      <meshBasicMaterial attach="material" opacity={1} map={texture} />
    </a.mesh>
  );
}
