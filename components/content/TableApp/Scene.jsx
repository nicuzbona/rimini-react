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

export default function ({
  gState: {
    glass: glassState,
    legs: legsState,
    applications: aplState,
    ornament: { position: ornamentPos },
  },
}) {
  const texture = useMemo(
    () =>
      new TextureLoader().load(
        legsState.textures[`${legsState.currentOption.id}`].src
      ),
    [legsState.textures[`${legsState.currentOption.id}`].src]
  );
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(0.2, 0.2);

  // texture.rotation = 1.5;

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

  const [envMap] = useLoader(THREE.CubeTextureLoader, [
    [
      "/includes/objects/assets/textures/env/posx.jpg",
      "/includes/objects/assets/textures/env/negx.jpg",
      "/includes/objects/assets/textures/env/posy.jpg",
      "/includes/objects/assets/textures/env/negy.jpg",
      "/includes/objects/assets/textures/env/posz.jpg",
      "/includes/objects/assets/textures/env/negz.jpg",
    ],
  ]);

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
    position0: !toggle ? [0, 0, 0] : [-2, 0, 0],
    position1: !toggle ? [0, 0, 0] : [-2, 0, 0],
    position2: !toggle ? [0, 0, 0] : [-2, 0, 0],
    position3: !toggle ? [0, 0, 0] : [-2, 0, 0],

    scale: [0.5, 3, 0.5],
  });

  console.log(
    "texturedf",
    legsState.textures[`${legsState.currentOption.id}`].src
  );

  return (
    <group>
      <Lights />
      <group>
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
      </group>
      <Plants />

      {legsState.position.map((position, index) => {
        {
          /* console.log("position", position); */
        }

        return (
          <a.group position={springProps[`position${index}`]}>
            {/* front right group */}
            <Leg
              texture={texture}
              onCubeClick={onCubeClick}
              position={position}
              legsState={legsState}
              size={springProps.scale}
            />
            <Aplication
              geometry={applicationNodes.Apl.geometry}
              aplState={aplState}
              position={aplState.position.bottom[index]}
              onApplicationClick={onApplicationClick}
              envMap={envMap}
            />
            <TopAplication
              material={applicationMaterials[applicationColor]}
              aplState={aplState}
              position={aplState.position.top[index]}
              envMap={envMap}
            />
            <TopOrnament position={ornamentPos[index]} envMap={envMap} />
          </a.group>
        );
      })}

      <Glass envMap={envMap} glassState={glassState} />
    </group>
  );
}
