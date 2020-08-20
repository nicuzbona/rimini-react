import React, { Fragment } from "react";
import { useRef } from "react";
import { a } from "react-spring/three";
import * as THREE from "three";

export default function ({ texture, rotation, position, type }) {
  const mesh = useRef();
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(8, 8);
  }

  // texture.rotation = 1.5;
  // texture.offset.set(0.5, 0.5);
  return (
    <a.mesh
      position={position}
      ref={mesh}
      scale={[50, 35, 35]}
      rotation={rotation}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" />

      {type === "floor" ? (
        <meshPhongMaterial
          attach="material"
          color={!!texture ? "white" : "#877032"}
          map={!!texture ? texture : null}
          // side={THREE.DoubleSide}
        />
      ) : (
        <meshBasicMaterial
          attach="material"
          color={!!texture ? "white" : "#877032"}
          map={!!texture ? texture : null}
          // side={THREE.DoubleSide}
        />
      )}
    </a.mesh>
  );
}
