import React, { Suspense, useEffect, useContext, useState } from "react";
import GlobalStateProvider from "../../../store/GlobalStateProvider";
import { Canvas, Dom } from "react-three-fiber";
import Scene from "./Scene";
import Context from "../../../store/context";
import { OrbitControls } from "drei";

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
        <Suspense fallback={"Loadinsadg..."}>
          <Scene gState={globalState} />
        </Suspense>
        <OrbitControls
          maxDistance={19}
          minDistance={1}
          maxPolarAngle={Math.PI / 2}
        />
      </GlobalStateProvider>
    </Canvas>
  );
}

export default TableApp;
