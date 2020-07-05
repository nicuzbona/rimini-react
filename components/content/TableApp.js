import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber'


import Scene from './Scene';
import Controls from './Controls';





function TableApp(){

 
    return (
            <Canvas
                // pixelRatio={window.devicePixelRatio || 1}
                style={{ 
                    background: '#981', 
                    width: "100%", 
                    height: "100%",
                }}
                camera={{
                    position: [0, 0, 7],
                    far: 10000}}
            >
                <Suspense fallback={null}><Scene /></Suspense>
                <Controls />


            </Canvas>
    )

};

export default TableApp