import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ({
    position, texture, secondaryTexture, treeObj, 
    onTreeClick, handlePointerDown, handlePointerUp, isLoading, 
    setHoveredTree, selectedTrees
}) {
    
    let isAvailable = false;

    treeObj.status !== "cumparat" ? isAvailable = true : isAvailable = false;

    const [textureApplied, setTextureApplied] = useState(texture);

    const [shouldBeYellow, setShouldBeYellow] = useState(false);

    useEffect(() => {
        
        if(selectedTrees.some(tree => tree.ID === treeObj.ID)){
            isAvailable && setTextureApplied(secondaryTexture);
            setShouldBeYellow(true)
        }else{
            isAvailable && setTextureApplied(texture);
        }
        
    }, [selectedTrees])

    const handleHover = (state, treeHovered) => {
        if(state === true){
            isAvailable && setTextureApplied(secondaryTexture);
            
            setHoveredTree(treeHovered)
            document.getElementById('canvasBox').style.cursor = 'pointer';
        }else if(state === false){
            !shouldBeYellow && setTextureApplied(texture);
            document.getElementById('canvasBox').style.cursor = 'unset';
        }
    }

    
    
    
    
    return (
        <mesh
            position={position}
            onClick={e => texture !== null && onTreeClick(treeObj, isAvailable)}
            onPointerDown={e => texture !== null && handlePointerDown(e, treeObj, isAvailable)}
            onPointerUp={e => texture !== null && handlePointerUp(e, treeObj, isAvailable)}
            onPointerOver={e => (texture !== null && !isLoading) && handleHover(true, treeObj)}
            onPointerOut={e => (texture !== null && !!isAvailable && !isLoading) && handleHover(false, treeObj)}
            castShadow
        >
        <planeBufferGeometry attach="geometry" args={[0.9, 1]} />
        <meshStandardMaterial
            attach='material'
            transparent
            map={textureApplied}
        />
        </mesh>
    );
};