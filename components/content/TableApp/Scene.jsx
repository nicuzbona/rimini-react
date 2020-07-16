import React, { useState, useMemo, useEffect } from "react";

import Lights from "./Lights";
import Leg from "./parts/Leg";
import Aplication from "./parts/Aplication";
import TopAplication from "./parts/TopAplication";
import TopOrnament from "./parts/TopOrnament";
import Glass from "./parts/Glass";
import Floor from "./parts/Floor";
import Plants from "./assets/Plants";

import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from "react-spring/three";

import { useLoader } from "react-three-fiber";

const textureImg = "/includes/objects/floor/pine_texture.jpg";
const textureImg1 =
  "https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg";
const pine_wood_texture = "/includes/objects/floor/larice_texture.jpg";
const books_wall_texture = "/includes/objects/assets/textures/book_wall.jpg";

export default function () {
  const texture = useMemo(() => new TextureLoader().load(textureImg), [
    textureImg,
  ]);
  texture.repeat.set(2, 0.5);
  texture.rotation = 1.5;
  texture.offset.set(-0.5, 0.9);

  const texture1 = useMemo(() => new TextureLoader().load(textureImg1), [
    textureImg1,
  ]);

  const floor_pine_texture = useMemo(
    () => new TextureLoader().load(pine_wood_texture),
    [pine_wood_texture]
  );
  const book_wall = useMemo(
    () => new TextureLoader().load(books_wall_texture),
    [books_wall_texture]
  );

  const [textureApplied, setTextureApplied] = useState(texture1);
  const [toggle, setToggle] = useState(false);
  const [aplToggle, setApplictionToggle] = useState(false);
  const [applicationColor, setAplicationColor] = useState("Gold");

  const {
    nodes: applicationNodes,
    materials: applicationMaterials,
  } = useLoader(GLTFLoader, "/includes/objects/bottomAplication.glb");

  // jUsT FoR tEsTiNg PuRpOsEs
  useEffect(() => {
    if (toggle === true) {
      setTextureApplied(texture);
    } else {
      setTextureApplied(texture1);
    }
  }, [toggle]);

  useEffect(() => {
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
    position: !toggle ? [0, 0, 0] : [-2, 0, 0],
    scale: [0.5, 3, 0.5],
  });

  return (
    <group>
      <Lights />

      <Floor
        // bottom
        texture={floor_pine_texture}
        position={[0, -2.515, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Floor
        // back
        texture={book_wall}
        rotation={[0, 0, 0]}
        position={[0, 0, -15]}
      />

      <Floor
        // right
        texture={book_wall}
        rotation={[0, -Math.PI / 2, 0]}
        position={[25, 0, -7.5]}
      />

      <Floor
        // left
        texture={book_wall}
        rotation={[0, Math.PI / 2, 0]}
        position={[-25, 0, -7.5]}
      />

      <Floor
        // back
        texture={book_wall}
        rotation={[0, Math.PI, Math.PI]}
        position={[0, 0, 17.5]}
      />
      <Floor
        // top
        texture={book_wall}
        rotation={[Math.PI / 2, 0, Math.PI]}
        position={[0, 15, 0]}
      />

      <Plants />

      <a.group position={springProps.position}>
        {/* front right group */}
        <Leg
          texture={textureApplied}
          onCubeClick={onCubeClick}
          position={[5, -1, 2.5]}
          size={springProps.scale}
        />
        <Aplication
          geometry={applicationNodes.Apl.geometry}
          material={applicationMaterials[applicationColor]}
          position={[5, -2.5, 2.5]}
          onApplicationClick={onApplicationClick}
        />
        <TopAplication
          material={applicationMaterials[applicationColor]}
          position={[5, 0.5001, 2.5]}
        />
        <TopOrnament position={[5, 0.5251, 2.5]} />
      </a.group>

      <group position={[0, 0, 0]}>
        {/* front left group */}
        <Leg
          texture={textureApplied}
          onCubeClick={onCubeClick}
          position={[-5, -1, 2.5]}
          size={[0.5, 3, 0.5]}
        />
        <Aplication
          material={applicationMaterials[`${applicationColor}`]}
          geometry={applicationNodes.Apl.geometry}
          position={[-5, -2.5, 2.5]}
          onApplicationClick={onApplicationClick}
        />
        <TopAplication
          material={applicationMaterials[applicationColor]}
          position={[-5, 0.5001, 2.5]}
        />
        <TopOrnament position={[-5, 0.5251, 2.5]} />
      </group>

      <group position={[0, 0, 0]}>
        {/* back right group */}
        <Leg
          texture={textureApplied}
          onCubeClick={onCubeClick}
          position={[5, -1, -2.5]}
          size={[0.5, 3, 0.5]}
        />
        <Aplication
          material={applicationMaterials[applicationColor]}
          geometry={applicationNodes.Apl.geometry}
          position={[5, -2.5, -2.5]}
          onApplicationClick={onApplicationClick}
        />
        <TopAplication
          material={applicationMaterials[applicationColor]}
          position={[5, 0.5001, -2.5]}
        />
        <TopOrnament position={[5, 0.5251, -2.5]} />
      </group>
      <group position={[0, 0, 0]}>
        {/*  back left group */}
        <Leg
          texture={textureApplied}
          onCubeClick={onCubeClick}
          position={[-5, -1, -2.5]}
          size={[0.5, 3, 0.5]}
        />
        <Aplication
          material={applicationMaterials[applicationColor]}
          geometry={applicationNodes.Apl.geometry}
          position={[-5, -2.5, -2.5]}
          onApplicationClick={onApplicationClick}
        />
        <TopAplication
          material={applicationMaterials[applicationColor]}
          position={[-5, 0.5001, -2.5]}
        />
        <TopOrnament position={[-5, 0.5251, -2.5]} />
      </group>

      <Glass />
    </group>
  );
}
