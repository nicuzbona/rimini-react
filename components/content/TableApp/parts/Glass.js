import React, {
  useRef,
  useState,
  useContext,
  useMemo,
  useEffect,
  Fragment,
} from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { a } from "react-spring/three";
import Text from "../assets/Text";

// export function createBoxWithRoundedEdges(
//   width,
//   height,
//   depth,
//   radius0,
//   smoothness
// ) {
//   let shape = new THREE.Shape();
//   let eps = 0.00001;
//   let radius = radius0 - eps;
//   shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
//   shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
//   shape.absarc(
//     width - radius * 2,
//     height - radius * 2,
//     eps,
//     Math.PI / 2,
//     0,
//     true
//   );
//   shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
//   let geometry = new THREE.ExtrudeBufferGeometry(shape, {
//     amount: depth - radius0 * 2,
//     bevelEnabled: true,
//     bevelSegments: smoothness * 2,
//     steps: 1,
//     bevelSize: radius,
//     bevelThickness: radius0,
//     curveSegments: smoothness,
//   });

//   geometry.center();

//   return geometry;
// }

export default function ({ envMap, glassState, position, scale }) {
  const materialType = glassState.materials[`${glassState.currentOption.id}`];

  const [isGlassLoading, setGlassLoading] = useState(false);

  let handler,
    texture = false,
    glassTextureTop = false,
    glassTextureSides = false;

  glassTextureTop = useMemo(() => {
    if (materialType.top.textureLink === false) return false;
    setGlassLoading(true);
    return new TextureLoader().load(`${materialType.top.textureLink}`, () => {
      // done
      setGlassLoading(false);
    });
  }, [materialType.top.textureLink]);

  if (materialType.top.textureLink !== false) {
    glassTextureTop.wrapS = glassTextureTop.wrapT = THREE.RepeatWrapping;
    glassTextureTop.repeat.set(
      materialType.top.textureRepeat[0],
      materialType.top.textureRepeat[1]
    );
  }

  glassTextureSides = glassTextureTop;

  return (
    <Fragment>
      {!isGlassLoading === true ? (
        <a.mesh
          position={position}
          scale={scale}
          castShadow
          // geometry={createBoxWithRoundedEdges(1, 1, 1, 0.01, 5)}
        >
          <boxBufferGeometry attach="geometry" />

          {Array(6)
            .fill()
            .map((e, index) => {
              if (index === 2 || index === 3) {
                handler = materialType.top;
                texture = glassTextureTop;
              } else {
                handler = materialType.sides;
                texture = glassTextureSides;
              }
              return (
                <meshPhysicalMaterial
                  key={index}
                  attachArray="material"
                  color={handler.color}
                  transparent
                  refractionRatio={1}
                  roughness={handler.roughness}
                  metalness={handler.metalness}
                  clearCoat={1}
                  clearCoatRoughness={0}
                  reflectivity={handler.reflectivity}
                  opacity={handler.opacity}
                  envMap={envMap}
                  side={handler.doubleSide ? THREE.DoubleSide : null}
                  map={!!texture ? texture : null}
                />
              );
            })}
        </a.mesh>
      ) : (
        <Text hAlign="left" position={[6, 3, -10]} children="Loading..." />
      )}
    </Fragment>
  );
}
