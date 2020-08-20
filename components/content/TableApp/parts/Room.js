import React, { Fragment, useState, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

import Lights from "../Lights";
import Floor from "../parts/Floor";
import Plants from "../assets/Plants";
import Text from "../assets/Text";

const big_wall_texture = "/includes/objects/assets/textures/wall_2.jpg";
const small_wall_texture = "/includes/objects/assets/textures/wall_3.jpg";
const top_wall_texture = "/includes/objects/assets/textures/wall_4.jpg";

export default function Room({ floorState }) {
  const [isFloorLoading, setFloorLoading] = useState(true);

  const floor_texture = useMemo(() => {
    setFloorLoading(true);
    let newTexture = new THREE.TextureLoader().load(
      floorState.textures[`${floorState.currentOption.id}`].src,
      () => {
        setFloorLoading(false);
      }
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

  const big_wall = useMemo(
    () => new THREE.TextureLoader().load(big_wall_texture),
    [big_wall_texture]
  );
  const top_wall = useMemo(
    () => new THREE.TextureLoader().load(top_wall_texture),
    [top_wall_texture]
  );

  const small_wall = useMemo(
    () => new THREE.TextureLoader().load(small_wall_texture),
    [small_wall_texture]
  );

  return (
    <Fragment>
      <Lights />
      <group>
        {!isFloorLoading === true ? (
          <Floor
            // bottom
            texture={floor_texture}
            position={[0, -2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            type="floor"
          />
        ) : (
          <Fragment>
            <Text hAlign="left" position={[6, 3, -10]} children="Loading..." />
            <Floor
              // bottom
              texture={false}
              position={[0, -2, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              type="wall"
            />
          </Fragment>
        )}
        <Floor
          // back
          texture={big_wall}
          rotation={[0, 0, 0]}
          position={[0, 0, -15]}
          type="wall"
        />

        <Floor
          // right
          texture={small_wall}
          rotation={[0, -Math.PI / 2, 0]}
          position={[25, 0, -7.5]}
          type="wall"
        />

        <Floor
          // left
          texture={small_wall}
          rotation={[0, Math.PI / 2, 0]}
          position={[-25, 0, -7.5]}
          type="wall"
        />

        <Floor
          // back
          texture={big_wall}
          rotation={[0, Math.PI, Math.PI]}
          position={[0, 0, 17.5]}
          type="wall"
        />
        <Floor
          // top
          texture={top_wall}
          rotation={[Math.PI / 2, 0, Math.PI]}
          position={[0, 15, 0]}
          type="wall"
        />
      </group>
      <Plants />
    </Fragment>
  );
}
