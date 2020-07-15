import React, { Suspense, useEffect } from "react";
import { Canvas } from "react-three-fiber";

import Scene from "./Scene";
import Controls from "./Controls";
import { LoadingManager } from "three";

function TableApp() {
  return (
    <Canvas
      // pixelRatio={window.devicePixelRatio || 1}
      style={{
        background: "#ccc",
        width: "100%",
        height: "100%",
      }}
      camera={{
        position: [0, 0, 7],
        far: 10000,
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Controls />
    </Canvas>
  );
}

export default TableApp;
