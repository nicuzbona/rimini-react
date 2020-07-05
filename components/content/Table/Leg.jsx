import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function ({ texture, onCubeClick, position, size }) {
    
    
    return (
        <mesh
            position={position}
            onClick={onCubeClick}
        >
            <boxBufferGeometry attach="geometry" args={size} />
            <meshBasicMaterial attach="material" transparent map={texture} />
        </mesh>
    );
};