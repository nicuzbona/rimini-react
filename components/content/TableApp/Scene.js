import React, {
  useState,
  useMemo,
  useEffect,
  useContext,
  Suspense,
} from "react";
import Context from "../../../store/context";
import Text from "./assets/Text";
import Room from "./parts/Room";

import Leg from "./parts/Leg";
import Aplication from "./parts/Aplication";
import TopAplication from "./parts/TopAplication";
import TopOrnament from "./parts/TopOrnament";
import Glass from "./parts/Glass";

import * as THREE from "three";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSpring, a } from "react-spring/three";

import { useLoader, useFrame, Dom } from "react-three-fiber";

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
  const [isLoading, setIsLoading] = useState(true);

  // debugger;
  const texture = useMemo(() => {
    setIsLoading(true);
    return new TextureLoader().load(
      legsState.textures[`${legsState.currentOption.id}`].src,
      () => {
        // done Function
        setIsLoading(false);
      }
    );
  }, [legsState.textures[`${legsState.currentOption.id}`].src]);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(0.3, 0.3);

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
      <Room floorState={floorState} />

      <a.group position={springProps.tablePos}>
        {legsState.position.map((position, index) => {
          return (
            <a.group key={index}>
              {/* front right group */}
              {!isLoading === true ? (
                <Leg
                  texture={texture}
                  position={springProps[`position${index}`]}
                  legsState={legsState}
                  size={springProps.scale}
                />
              ) : (
                <Text
                  hAlign="left"
                  position={[6, 3, -10]}
                  children="Loading..."
                />
              )}
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
        {/* <Text hAlign="left" position={[6, 3, -10]} children="Loading..." /> */}
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
