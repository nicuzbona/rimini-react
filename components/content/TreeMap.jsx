import React from 'react';

import axios from 'axios';

import { Box, Button, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CircularProgress from '@material-ui/core/CircularProgress';

import Scene from './Scene';
import Controls from './Controls';
import SelectedChart from './SelectedChart';



import { useState, useEffect, useLayoutEffect } from 'react'
import { Canvas } from 'react-three-fiber'

import { woo } from '../../secret';







      
export default function({
    treesToRender,
    isMobile,
}) {

    const [selectedTreesArr, setSelectedTrees] = useState([]);
    const [shouldRenderChart, setShouldRenderChart] = useState(false);
    const [sceneLoading, setSceneLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [blockFinish, setBlockFinish] = useState(false);
    
    const [treeProductIds, addTreeProductId] = useState({});


    
    useEffect(() => {
        selectedTreesArr.length >= 1 ? setShouldRenderChart(true) : setShouldRenderChart(false);
    }, [selectedTreesArr]);
    
    const addTree = (treeObj) => {
        !selectedTreesArr.includes(treeObj) &&
            setSelectedTrees([...selectedTreesArr, treeObj]);
    };

    const deleteSelectedTree = (onActionTree, state) => {


        if(!state){
            const newArr = selectedTreesArr.filter((tree) => tree !== onActionTree);
            setSelectedTrees(newArr);

            const prodId = treeProductIds[onActionTree.ID]

            // console.log('prodId to delete: ', prodId, 'deleted tree id', onActionTree.ID)
            
            woo.delete(`products/${prodId}`, {
                force: true
            })
            .then((deletedProd) => {
                let newArr = treeProductIds;
                delete treeProductIds[onActionTree.ID];
                addTreeProductId(newArr);
            })
        }

    }



    // clear chart on Scene render
    useEffect(() => {
        axios.post(`${woo.url}/wp-json/cocart/v1/clear`)
        .then((response) => {
            // console.log(response)
        })
    }, []);

    const createProdAndAddToChart =  (clickedTree) => {
        setIsLoading(true);
        setBlockFinish(true);

        let calculatedPrice = 0;

        if (clickedTree.type === "normmal"){
            if(clickedTree.expiration_date === "1970-01-01"){
                calculatedPrice = 150;
            }else{
                calculatedPrice = 60;
            }
        }else if(clickedTree.type === "puiet"){
            if(clickedTree.expiration_date === "1970-01-01"){
                calculatedPrice = 60;
            }else{
                calculatedPrice = 60;
            }
        }else{
            calculatedPrice = 0;
        }

        
        const myProduct = {
            name: `Pom fructifer ${clickedTree.fruct}, randul ${clickedTree.rand}, numarul ${clickedTree.numar}`,
            type: "simple",
            weight: clickedTree.ID,
            regular_price:  `${calculatedPrice}`, // can flip values based on some clickedThree values 
            // description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
            // short_description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          };
          const clickedId = clickedTree.ID;
        
                 woo.post("products", myProduct)
                    .then((response) => {

                        addTreeProductId({ ...treeProductIds, [clickedId]: response.data.id})
                        setIsLoading(false);
                        
                        axios.post(`${woo.url}/wp-json/cocart/v1/add-item`, {
                            "product_id" : response.data.id,
                            // "quantity" : 1
                        })
                        .then((getRes) => {
                            setBlockFinish(false);
                        })
                        .catch((error) => {
                            // Invalid post request, for 4xx and 5xx statuses
                            console.log("Response Status:", error.response.status);
                            console.log("Response Headers:", error.response.headers);
                            console.log("Response Data:", error.response);
                        })

                        

                    })
                    .catch((error) => {
                        // Invalid post request, can't add tree to cart
                        console.log("Response Status:", error.response.status);
                        console.log("Response Headers:", error.response.headers);
                        console.log("Response Data:", error.response.data);
                    })

    }

    const handleFinishClick = (state) =>{

        if(state === true){
            let today = new Date();
            let treesForBackend = selectedTreesArr.map(treeObj => {
                return {id: treeObj.ID, status: "cumparat", buy_date: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`}
            })
            const obj = {
                trees_array: treesForBackend
            }
            localStorage.setItem('finished', false)
            localStorage.setItem('TreeProd', JSON.stringify(treeProductIds))
            localStorage.setItem('Trees', JSON.stringify(obj));
    
            window.location.href = "/checkout/";
        }
    }

    const [hoveredTree, setHoveredTree] = useState(false);
    
    
        return(
            <Box
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                position="relative"
            >
            



                {
                    hoveredTree && <div style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        top: "-25px",
                    }}>{
                        (hoveredTree.status === 'cumparat') ? 
                            <div> {hoveredTree.type === "normmal" ? "Pomul" : "Puietul"} acesta a fost deja salvat </div> 
                            : 
                            <div> Pomul de pe randul {hoveredTree.rand} numarul {hoveredTree.numar} este un {hoveredTree.fruct} </div>
                    }</div>
                }

                <Box 
                    id="canvasBox" 
                    style={{
                        border: '3px solid rgba(24, 168, 106, .5)',
                        opacity: (isLoading || sceneLoading) ? "0.5" : "1",
                        transition: "opacity 0.3s",
                        position: "relative",
                    }} 
                >

                    {isLoading && <CircularProgress disableShrink style={{
                        top: "calc(50% - 22.5px)",
                        position: "absolute",
                        left: "calc(50% - 22.5px)",
                        zIndex: '2',
                        transition: "opacity 0.3s",
                    }} color="secondary" />}
                    
                    
                
                <Canvas
                    pixelRatio={window.devicePixelRatio || 1}
                    style={{ 
                        background: '#fff', 
                        width: !!isMobile ? '90vw' : '75vw', 
                        height: !!isMobile ? '70vw' : '27vw',
                    }}
                    camera={{
                        position: [0, 0, 20],
                        far: 10000}}
                >
                        
                    <Scene
                        selectedTrees={selectedTreesArr}
                        onSelectTree={(clickedTree) => {
                            addTree(clickedTree);
                        }}
                        isLoading={isLoading}
                        setSceneLoading={setSceneLoading}
                        treesToRender={treesToRender}
                        createProdAndAddToChart={createProdAndAddToChart}
                        setHoveredTree={setHoveredTree}
                    />
                    <Controls />
                </Canvas>


                {sceneLoading && <CircularProgress disableShrink  style={{
                        top: "calc(50% - 22.5px)",
                        position: "absolute",
                        left: "calc(50% - 22.5px)",
                        zIndex: '2',
                        transition: "opacity 0.1s",
                    }} color="secondary" />}
                
                
                </Box>


                {shouldRenderChart && 
                    <SelectedChart 
                        selectedTreesArr={selectedTreesArr} 
                        deleteTree={deleteSelectedTree}
                        isMobile={isMobile}
                        isLoading={isLoading}
                    />
                }
                {shouldRenderChart && 

                    <Box width={1} display="flex" justifyContent="center" style={{marginTop: "3vw"}}>
                        <Button 
                            variant="contained" 
                            color={"primary"} 
                            style={{ 
                                width: "-moz-fit-content", 
                                width: "fit-content", 
                                padding: "1.5% 2%", 
                                transition: "0.35s",
                                background: blockFinish ? 'rgba(28, 214, 141, 0.25)' : "#1CD68D", 
                                borderRadius: "300px"
                            }} 
                            endIcon={<NavigateNextIcon />}
                            onClick={() => { blockFinish ? handleFinishClick(false) : handleFinishClick(true)}}
                            // this is not okay, need to send true or false on block
                        >
                            Pasul urmator
                        </Button>
                    </Box>
                }
                

            </Box>
        );
    
}
