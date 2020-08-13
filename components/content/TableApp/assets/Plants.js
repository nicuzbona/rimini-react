import React, { useMemo, Suspense } from "react";
import { useState, useEffect, useRef } from "react";
import { useSpring, a } from "react-spring/three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

import Plant from "./Plant";

export default function () {
  const mesh = useRef();
  const plant = useLoader(GLTFLoader, "/includes/objects/assets/plant.glb");
  const plantBaseTexture = "/includes/objects/assets/textures/base.jpg";
  const plantTopTexture = "/includes/objects/assets/textures/plantTop.jpg";

  const baseTexture = useMemo(
    () => new TextureLoader().load(plantBaseTexture),
    [plantBaseTexture]
  );

  const topTexture = useMemo(() => new TextureLoader().load(plantTopTexture), [
    plantTopTexture,
  ]);
  //   Low-Poly_Plant_
  //   Low-Poly_Plant_001
  // materials: Blatt, Material

  return (
    <>
      <Plant
        scale={[2, 2, 2]}
        position={[-12, -2, -10]}
        geometrys={[
          plant.nodes["Low-Poly_Plant_"].geometry,
          plant.nodes["Low-Poly_Plant_001"].geometry,
        ]}
        materials={[plant.materials["Blatt"], plant.materials["Material"]]}
        textures={[baseTexture, topTexture]}
      />
      <Plant
        scale={[2, 2, 2]}
        position={[12, -2, -10]}
        geometrys={[
          plant.nodes["Low-Poly_Plant_"].geometry,
          plant.nodes["Low-Poly_Plant_001"].geometry,
        ]}
        materials={[plant.materials["Blatt"], plant.materials["Material"]]}
        textures={[baseTexture, topTexture]}
      />
      <Plant
        scale={[2, 2, 2]}
        position={[23, -2, 0]}
        geometrys={[
          plant.nodes["Low-Poly_Plant_"].geometry,
          plant.nodes["Low-Poly_Plant_001"].geometry,
        ]}
        materials={[plant.materials["Blatt"], plant.materials["Material"]]}
        textures={[baseTexture, topTexture]}
      />
      <Plant
        scale={[2, 2, 2]}
        position={[-23, -2, 0]}
        geometrys={[
          plant.nodes["Low-Poly_Plant_"].geometry,
          plant.nodes["Low-Poly_Plant_001"].geometry,
        ]}
        materials={[plant.materials["Blatt"], plant.materials["Material"]]}
        textures={[baseTexture, topTexture]}
      />
    </>
  );
}
