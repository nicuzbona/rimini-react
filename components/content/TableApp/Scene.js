import React, {
  useState,
  useMemo,
  useEffect,
  useContext,
  Suspense,
} from "react";
import Context from "../../../store/context";

import Lights from "./Lights";
import Leg from "./parts/Leg";
import Aplication from "./parts/Aplication";
import TopAplication from "./parts/TopAplication";
import TopOrnament from "./parts/TopOrnament";
import Glass from "./parts/Glass";
import Floor from "./parts/Floor";
import Plants from "./assets/Plants";

import * as THREE from "three";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from "react-spring/three";

import { useLoader, useFrame, Dom } from "react-three-fiber";

const big_wall_texture = "/includes/objects/assets/textures/wall_2.jpg";
const small_wall_texture = "/includes/objects/assets/textures/wall_3.jpg";
const top_wall_texture = "/includes/objects/assets/textures/wall_4.jpg";

export default function ({
  gState: {
    tablePosition,
    glass: glassState,
    legs: legsState,
    applications: aplState,
    ornament: ornamentState,
    floor: floorState,
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
  texture.repeat.set(0.3, 0.3);

  const floor_texture = useMemo(() => {
    let newTexture = new TextureLoader().load(
      floorState.textures[`${floorState.currentOption.id}`].src
    );
    return newTexture;
  }, [floorState.textures[`${floorState.currentOption.id}`].src]);

  floor_texture.wrapS = floor_texture.wrapT = THREE.RepeatWrapping;
  floor_texture.repeat.set(
    floorState.textures[`${floorState.currentOption.id}`].repeatCount,
    floorState.textures[`${floorState.currentOption.id}`].repeatCount
  );

  floor_texture.wrapS = floor_texture.wrapT = THREE.RepeatWrapping;
  // useEffect(() => {

  //   console.log("floor_texture.repeat", floor_texture.repeat);
  // }, [floor_texture]);

  useFrame(() => {
    floor_texture.repeat.set(
      floorState.textures[`${floorState.currentOption.id}`].repeatCount,
      floorState.textures[`${floorState.currentOption.id}`].repeatCount
    );
  });

  // floor_texture.rotation = 0;

  const big_wall = useMemo(() => new TextureLoader().load(big_wall_texture), [
    big_wall_texture,
  ]);
  const top_wall = useMemo(() => new TextureLoader().load(top_wall_texture), [
    top_wall_texture,
  ]);

  const small_wall = useMemo(
    () => new TextureLoader().load(small_wall_texture),
    [small_wall_texture]
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

  const {
    nodes: applicationNodes,
    materials: applicationMaterials,
  } = useLoader(GLTFLoader, "/includes/objects/bottomAplication.glb");

  let springProps = useSpring({
    position0: legsState.position[0],
    position1: legsState.position[1],
    position2: legsState.position[2],
    position3: legsState.position[3],
    scale: legsState.scale,

    botApl0: aplState.position.bottom[0],
    botApl1: aplState.position.bottom[1],
    botApl2: aplState.position.bottom[2],
    botApl3: aplState.position.bottom[3],

    topApl0: aplState.position.top[0],
    topApl1: aplState.position.top[1],
    topApl2: aplState.position.top[2],
    topApl3: aplState.position.top[3],

    ornament0: ornamentState.position[0],
    ornament1: ornamentState.position[1],
    ornament2: ornamentState.position[2],
    ornament3: ornamentState.position[3],

    tablePos: tablePosition,

    glassPos: glassState.position[0],

    glassScale: glassState.scale,
  });

  return (
    <group>
      <Lights />
      <group>
        <Floor
          // bottom
          texture={floor_texture}
          position={[0, -2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <Floor
          // back
          texture={big_wall}
          rotation={[0, 0, 0]}
          position={[0, 0, -15]}
        />

        <Floor
          // right
          texture={small_wall}
          rotation={[0, -Math.PI / 2, 0]}
          position={[25, 0, -7.5]}
        />

        <Floor
          // left
          texture={small_wall}
          rotation={[0, Math.PI / 2, 0]}
          position={[-25, 0, -7.5]}
        />

        <Floor
          // back
          texture={big_wall}
          rotation={[0, Math.PI, Math.PI]}
          position={[0, 0, 17.5]}
        />
        <Floor
          // top
          texture={top_wall}
          rotation={[Math.PI / 2, 0, Math.PI]}
          position={[0, 15, 0]}
        />
      </group>
      <Plants />

      <a.group position={springProps.tablePos}>
        {legsState.position.map((position, index) => {
          return (
            <a.group key={index}>
              {/* front right group */}
              <Suspense fallback={"<Dom center>Loading...</Dom>"}>
                <Leg
                  texture={texture}
                  position={springProps[`position${index}`]}
                  legsState={legsState}
                  size={springProps.scale}
                />
              </Suspense>
              <Aplication
                geometry={applicationNodes.Apl.geometry}
                aplState={aplState}
                position={springProps[`botApl${index}`]}
                envMap={envMap}
              />
              <TopAplication
                aplState={aplState}
                position={springProps[`topApl${index}`]}
                envMap={envMap}
              />
              <TopOrnament
                position={springProps[`ornament${index}`]}
                envMap={envMap}
              />
            </a.group>
          );
        })}

        <Glass
          envMap={envMap}
          glassState={glassState}
          position={springProps.glassPos}
          scale={springProps.glassScale}
        />
      </a.group>
    </group>
  );
}
