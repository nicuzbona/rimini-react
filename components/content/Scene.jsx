import React, { Suspense, useState, useMemo, useEffect, useRef } from "react";

import Lights from "./Lights";

import Leg from "./Table/Leg";
import Aplication from "./Table/Aplication";

import { useThree } from "react-three-fiber";
import { TextureLoader, RepeatWrapping, Math as ThreeMath } from "three";
import ObjectModel from "react-three-renderer-objects";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Box } from "@material-ui/core";
import { useSpring } from "react-spring/three";

import { useLoader } from "react-three-fiber";

export default function () {
  const textureImg =
    "https://threejsfundamentals.org/threejs/resources/images/wall.jpg";
  const textureImg1 =
    "https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg";
  const texture = useMemo(() => new TextureLoader().load(textureImg), [
    textureImg,
  ]);
  const texture1 = useMemo(() => new TextureLoader().load(textureImg1), [
    textureImg1,
  ]);
  const [textureApplied, setTextureApplied] = useState(texture);
  const [toggle, setToggle] = useState(false);

  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/includes/objects/bottomAGold.glb"
  );

  // jUsT FoR tEsTiNg PuRpOsEs
  useEffect(() => {
    if (toggle === true) {
      setTextureApplied(texture);
    } else {
      setTextureApplied(texture1);
    }
  }, [toggle]);
  // eNd

  const onCubeClick = () => {
    setToggle(!toggle);
  };

  const group = useRef();

  const springProps = useSpring({
    position: !toggle ? [5, -1, 2] : [4, -1, 2],
    scale: [0.5, 3, 0.5],
  });

  console.log("springProps: ", springProps);

  return (
    <>
      <Lights
        type="AmbientLight"
        color={0xffffff}
        intensity={1}
        position={[0, 0, 0]}
      />
      <Leg
        texture={textureApplied}
        onCubeClick={onCubeClick}
        position={springProps.position}
        size={springProps.scale}
      />
      <Leg
        texture={textureApplied}
        onCubeClick={onCubeClick}
        position={[-5, -1, 2]}
        size={[0.5, 3, 0.5]}
      />
      <Leg
        texture={textureApplied}
        onCubeClick={onCubeClick}
        position={[5, -1, -3]}
        size={[0.5, 3, 0.5]}
      />
      <Leg
        texture={textureApplied}
        onCubeClick={onCubeClick}
        position={[-5, -1, -3]}
        size={[0.5, 3, 0.5]}
      />

      <Aplication
        material={materials["Material.003"]}
        geometry={nodes.Cube002.geometry}
        texture={texture1}
        position={[5, -2.5, 2]}
      />
      <Aplication
        material={materials["Material.003"]}
        geometry={nodes.Cube002.geometry}
        texture={texture1}
        position={[-5, -2.5, 2]}
      />
      <Aplication
        material={materials["Material.003"]}
        geometry={nodes.Cube002.geometry}
        texture={texture1}
        position={[5, -2.5, -3]}
      />
      <Aplication
        material={materials["Material.003"]}
        geometry={nodes.Cube002.geometry}
        texture={texture1}
        position={[-5, -2.5, -3]}
      />

      {/* </group> */}
    </>
  );
}
