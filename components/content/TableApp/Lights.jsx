import React, { useRef, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useLoader, useFrame, useThree, useUpdate } from "react-three-fiber";

export default function Lights(props) {
  const { type, layer = 0 } = props;
  const Light = type;
  

  return (
    <>
      {/* <Light {...props} /> */}
      <ambientLight color={0xffffff} intensity={0.6} />
      
       <spotLight
        intensity={0.3}
        position={[-15, 10, -10]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      {/*<spotLight
        intensity={0.1}
        position={[40, 30, -40]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
        
      />
      <spotLight
        intensity={0.1}
        position={[-40, 30, -40]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
        
      /> */}
      <spotLight
        intensity={0.3}
        position={[10, 20, 15]}
        penumbra={0.7}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
        castShadow
        
      />
      {/*
      <spotLight
        intensity={0.5}
        position={[-15, 10, 0]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={0.5}
        position={[0, 10, 10]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      
      <spotLight
        intensity={0.5}
        position={[0, 10, -10]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      */}
      <spotLight
        // -----------bottom lights
        intensity={0.5}
        position={[15, -10, 0]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={0.5}
        position={[-15, -10, 0]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={0.5}
        position={[0, -10, 10]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />

      <spotLight
        intensity={0.5}
        position={[0, -10, -10]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
    </>
  );
}

Lights.propTypes = {
  type: PropTypes.string,
};

Lights.defaultProps = {
  type: "",
};
