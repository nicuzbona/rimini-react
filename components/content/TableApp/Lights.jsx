import React from "react";
import PropTypes from "prop-types";

export default function Lights(props) {
  const { type } = props;
  const Light = type;

  return (
    <>
      {/* <Light {...props} /> */}
      <ambientLight color={0xffffff} intensity={1} />

      <spotLight
        intensity={0.5}
        position={[40, 30, 40]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
        castShadow
      />
      <spotLight
        intensity={0.5}
        position={[-40, 30, 40]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={0.5}
        position={[40, 30, -40]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={0.5}
        position={[-40, 30, -40]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />

      <spotLight
        intensity={0.5}
        position={[15, 10, 0]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
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
      {/* bottom lights */}
      <spotLight
        intensity={1}
        position={[15, -10, 0]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={1}
        position={[-15, -10, 0]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={1}
        position={[0, -10, 10]}
        penumbra={0.5}
        shadow-mapSize-width={5120}
        shadow-mapSize-height={5120}
      />
      <spotLight
        intensity={1}
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
