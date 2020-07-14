import React, { Suspense, useState, useMemo, useEffect, useRef } from "react";

import Lights from "./Lights";

import Leg from "./Table/Leg";
import Aplication from "./Table/Aplication";
import Wood from "./Table/floor/Wood";
import Plants from "../assets/Plants";

import { useThree } from "react-three-fiber";
import { TextureLoader, RepeatWrapping, Math as ThreeMath } from "three";
import ObjectModel from "react-three-renderer-objects";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Box } from "@material-ui/core";
import { useSpring } from "react-spring/three";

import { useLoader, useFrame } from "react-three-fiber";

export default function () {
  const textureImg =
    "https://threejsfundamentals.org/threejs/resources/images/wall.jpg";
  const textureImg1 =
    "https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg";
  const pine_wood_texture = "/includes/objects/floor/larice_texture.jpg";

  const texture = useMemo(() => new TextureLoader().load(textureImg), [
    textureImg,
  ]);
  const texture1 = useMemo(() => new TextureLoader().load(textureImg1), [
    textureImg1,
  ]);
  const floor_pine_texture = useMemo(
    () => new TextureLoader().load(pine_wood_texture),
    [pine_wood_texture]
  );

  const [textureApplied, setTextureApplied] = useState(texture);
  const [toggle, setToggle] = useState(false);
  const [aplToggle, setApplictionToggle] = useState(false);

  const {
    nodes: applicationNodes,
    materials: applicationMaterials,
  } = useLoader(GLTFLoader, "/includes/objects/bottomAplication.glb");
  const idk2 = useLoader(GLTFLoader, "/includes/objects/bottomAplication.glb");

  const wood = useLoader(GLTFLoader, "/includes/objects/floor/wood.glb");

  console.log("wood", wood);

  const [applicationColor, setAplicationColor] = useState("Gold");

  // jUsT FoR tEsTiNg PuRpOsEs
  useEffect(() => {
    if (toggle === true) {
      setTextureApplied(texture);
    } else {
      setTextureApplied(texture1);
    }
  }, [toggle]);

  useEffect(() => {
    console.log("color: ", applicationColor);
    if (aplToggle === true) {
      setAplicationColor("Silver");
    } else {
      setAplicationColor("Gold");
    }
  }, [aplToggle]);

  // eNd

  const onCubeClick = () => {
    setToggle(!toggle);
  };
  const onApplicationClick = () => {
    setApplictionToggle(!aplToggle);
  };

  const springProps = useSpring({
    position: !toggle ? [5, -1, 2] : [4, -1, 2],
    scale: [0.5, 3, 0.5],
  });

  console.log("idk2: ", idk2);

  const lightTargetYDelta = 120;
  const lightTargetXDelta = 80;
  const [lightPosition, setLightPosition] = useState([
    -lightTargetXDelta,
    -lightTargetYDelta,
    200,
  ]);
  const [lightTargetPosition, setLightTargetPosition] = useState([0, 0, 0]);
  const onCameraMoved = (delta) => {
    const newLightPosition = delta.map((e, idx) => lightPosition[idx] + e);
    setLightPosition(newLightPosition);
    const newLightTargetPosition = [
      newLightPosition[0] + lightTargetXDelta,
      newLightPosition[1] + lightTargetYDelta,
      0,
    ];
    setLightTargetPosition(newLightTargetPosition);
  };

  const { gl } = useThree();
  const group = useRef();

  return (
    <group>
      <Lights
        type="AmbientLight"
        color={0xffffff}
        intensity={1}
        // position={[0, 0, 0]}
      />
      <rectAreaLight
        width={10}
        height={10}
        color={"#ffffed"}
        intensity={1}
        position={[0, 3, 4]}
        lookAt={[0, 0, 0]}
        penumbra={10}
      />
      <pointLight
        position={[0, 5, 0]}
        args={["white", 2, 100, 5]}
        intensity={1}
      />
      <pointLight
        position={[0, 0, -5]}
        args={["white", 2, 100, 5]}
        intensity={1}
      />
      {/* <spotLight
        intensity={2}
        position={[20, 10, 0]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
        shadow={true}
        castShadow
      /> */}

      <Wood texture={floor_pine_texture} />
      <Plants />

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
        geometry={applicationNodes.Apl.geometry}
        material={applicationMaterials[applicationColor]}
        position={[5, -2.5, 2]}
        onApplicationClick={onApplicationClick}
      />
      <Aplication
        material={applicationMaterials[`${applicationColor}`]}
        geometry={applicationNodes.Apl.geometry}
        position={[-5, -2.5, 2]}
        onApplicationClick={onApplicationClick}
      />
      <Aplication
        material={applicationMaterials[applicationColor]}
        geometry={applicationNodes.Apl.geometry}
        position={[5, -2.5, -3]}
        onApplicationClick={onApplicationClick}
      />
      <Aplication
        material={applicationMaterials[applicationColor]}
        geometry={applicationNodes.Apl.geometry}
        position={[-5, -2.5, -3]}
        onApplicationClick={onApplicationClick}
      />
    </group>
  );
}
