import React, { Suspense, useEffect, useContext } from "react";
import GlobalStateProvider from "../../../store/GlobalStateProvider";
import { Canvas } from "react-three-fiber";
import Scene from "./Scene";
import Context from "../../../store/context";
import { OrbitControls } from "drei";

import { LoadingManager } from "three";

function TableApp() {
  const { globalState, globalDispatch } = useContext(Context);

  return (
    <Canvas
      // pixelRatio={window.devicePixelRatio || 1}
      style={{
        background: "#ccc",
        width: "100%",
        height: "100%",
      }}
      camera={{
        position: [0, 4, 9],
        far: 10000,
      }}
    >
      <GlobalStateProvider>
        <Suspense fallback={null}>
          <Scene gState={globalState} />
        </Suspense>
        <OrbitControls />
      </GlobalStateProvider>
    </Canvas>
  );
}

export default TableApp;
