import React, { Suspense, useState, useMemo, useEffect, useRef }  from 'react';

import Lights from './Lights';

import Leg from "./Table/Leg"; 

import { useThree } from 'react-three-fiber';
import  { TextureLoader, RepeatWrapping, Math as ThreeMath } from 'three'
import ObjectModel from 'react-three-renderer-objects';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { Box } from '@material-ui/core';

import { useLoader } from 'react-three-fiber'

export default function( {treesToRender, selectedTrees, onSelectTree, createProdAndAddToChart, isLoading, setSceneLoading, setHoveredTree} ) {
    const { camera } = useThree();

    const textureImg = "https://threejsfundamentals.org/threejs/resources/images/wall.jpg";
    const textureImg1 = "https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg";

    const [objGlb, setGlb] = useState(false);
    
    
    const glbUrl = "/includes/objects/bottomAGold.glb";
    useMemo(() => new GLTFLoader().load(glbUrl, (object) => {
        console.log('g;ltf obj:', object)
        setGlb(object);
    }), [glbUrl])

    const { nodes, materials } = useLoader(GLTFLoader, "/includes/objects/bottomAGold.glb")

    
    
    const url = "/includes/objects/test_model.obj";
    const [obj, set] = useState(false);
    const [obj1, set1] = useState(false);
    const [obj2, set2] = useState(false);
    const [obj3, set3] = useState(false);

    useMemo(() => new OBJLoader().load(url, (object) => {
        set(object);
    }), [url])

    useMemo(() => new OBJLoader().load(url, (object) => {
        set1(object);
    }), [url])
    useMemo(() => new OBJLoader().load(url, (object) => {
        set2(object);
    }), [url])

    useMemo(() => new OBJLoader().load(url, (object) => {
        set3(object);
    }), [url])

    

    const legSize = [0.5, 3, 0.5]
    
    const texture = useMemo(() => new TextureLoader().load(textureImg), [
        textureImg
    ]);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;

    const texture1 = useMemo(() => new TextureLoader().load(textureImg1), [
        textureImg1
    ]);
    texture1.wrapS = RepeatWrapping;
    texture1.wrapT = RepeatWrapping;
    texture1.repeat.set(1, 1);

    const [textureApplied, setTextureApplied ] = useState(texture)
    const [toggle, setToggle] = useState(false);

    
    // jUsT FoR tEsTiNg PuRpOsEs
        useEffect(() => {
            if(toggle === true){
                setTextureApplied(texture1)
            }else{
                setTextureApplied(texture)
            }
        }, [toggle])
    // eNd
    
    
    const onCubeClick = () => {
        setToggle(!toggle)
    }

    const group = useRef();

    return (
        <>
        <Lights
            type='AmbientLight'
            color={0xffffff}
            intensity={1}
            position={[0, 0, 0]}
        />
        <Leg texture={textureApplied} size={legSize}  onCubeClick={onCubeClick} position={[5, -1 , 2]}/>
        <Leg texture={textureApplied} size={legSize}  onCubeClick={onCubeClick} position={[-5, -1 , 2]}/>
        <Leg texture={textureApplied} size={legSize}  onCubeClick={onCubeClick} position={[5, -1 , -3]}/>
        <Leg texture={textureApplied} size={legSize}  onCubeClick={onCubeClick} position={[-5, -1 , -3]}/>
        {/* <Suspense fallback={<Box />}>
            { !!obj && <ObjectModel
                name="model"
                model={obj}
            />}
        </Suspense> */}
        
        <group ref={group} dispose={null}>

        <mesh position={[5, -2.5, 2]} scale={[0.7, 0.7, 0.7]} material={materials['Material.003']} geometry={nodes.Cube002.geometry} rotation={[Math.PI / 2, 0, 0]} > 
            <meshBasicMaterial attach="material" transparent map={texture1} />
        </mesh>
        <mesh position={[-5, -2.5, 2]} scale={[0.7, 0.7, 0.7]} material={materials['Material.003']} geometry={nodes.Cube002.geometry} rotation={[Math.PI / 2, 0, 0]} > 
            <meshBasicMaterial attach="material" transparent map={texture1} />
        </mesh>
        <mesh position={[5, -2.5, -3]} scale={[0.7, 0.7, 0.7]} material={materials['Material.003']} geometry={nodes.Cube002.geometry} rotation={[Math.PI / 2, 0, 0]} > 
            <meshBasicMaterial attach="material" transparent map={texture1} />
        </mesh>
        <mesh position={[-5, -2.5, -3]} scale={[0.7, 0.7, 0.7]} material={materials['Material.003']} geometry={nodes.Cube002.geometry} rotation={[Math.PI / 2, 0, 0]} > 
            <meshBasicMaterial attach="material" transparent map={texture1} />
        </mesh>

        </group>
        
        
        </>
    );
}