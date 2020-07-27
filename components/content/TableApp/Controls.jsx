import React from "react";

import { useRef, useEffect } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";

import dynamic from "next/dynamic";

// const { OrbitControls } = dynamic(() => import('three/examples/jsm/controls/OrbitControls'))

// import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

// import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
// extend({ TrackballControls });

export default function Controls() {
  const controls = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();

  //   useFrame(() => {
  //     controls.current.update();
  //   });

  // return <orbitControls args={[camera, domElement]} />
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      maxDistance={30}
      minDistance={1}
      enableDamping
      dampingFactor={1}
      // keys={[
      //     , , 91
      // ]}
      // // noRotate={true}
      // mouseButtons={{
      //     LEFT: THREE.MOUSE.PAN,
      //     MIDDLE: THREE.MOUSE.ZOOM,
      //     RIGHT: THREE.MOUSE.ROTATE
      // }}
    />
  );
}
