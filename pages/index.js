

import React, {Suspense} from 'react';
import { Grommet, Grid, Image, Box, Heading, Text, Button, Anchor, Table } from "grommet";
// import Masonry from 'react-masonry-css';
import NoSSR from 'react-no-ssr'

// import Model from '../components/content/Table/BottomAGold';

import dynamic from 'next/dynamic';




// import TableApp from '../components/content/TableApp';
import MainWrapper from '../components/MainWrapper';


const TableApp = dynamic(() => import('../components/content/TableApp'), {ssr: false});




function Home(){
  
  
  return (

    <MainWrapper>

    <Box className="fullWidthWrapper contentWrapper">
      <Box className="content-left">
          <Box className="image-area">
              <Box className="image-area__img" id="threeJsHere">
                <TableApp />


                {/* <Suspense fallback={null}> <Model /> </Suspense> */}
                
              
                  {/* <script src="./3d/testing_three_js.js"></script> */}
              </Box>
          </Box>
              <Box className="sliders-area">
              
              <Box className="slider first-slider"> 
                  <Box className="slider__title first-slider__title"></Box>
                  
                  <Box className="slider--action">
                      <Box id="film_roll1"></Box>
                  </Box>
              </Box>
              <Box className=" slider second-slider"> 
                  <Box className="slider__title second-slider__title"></Box>
                  
                  <Box className="slider--action">
                      <Box id="film_roll2"></Box>    
                  </Box>
              </Box>
          </Box>
      </Box>

      <Box className="content-right">
          <Box className="right-first-column">
              <Box className="columnItem first-column__title"> 
                  <Box className="right-title-content">
                      <span>Basic model from:</span> 
                      <span></span>
                  </Box>
              </Box>
              <Box className="columnItem first-column__overview">
                  <Box className="overview-item overview__title"></Box>
                  <Box className="overview-item overview__model">Model: <span></span></Box>
                  <Box className="overview-item overview__size">Size: <span></span></Box>
                  <Box className="overview-item overview__high">Height: <span></span></Box>
                  <Box className="overview-item overview__legs">Legs: <span></span></Box>
                  <Box className="overview-item overview__glas-thikness">Glass/Thikness: <span></span></Box>
                  <Box className="overview-item overview__application">Application: <span></span></Box>
              </Box>
              <Box className="columnItem first-column__total"> 
                  <Box className="column-total-content">
                      <span>Price:</span> 
                      <span></span> 
                      <button className="check-out-button">Check Out</button>
                  </Box>
              </Box>
          </Box>
          <Box className="right-second-column">
              <Box className="columnItemSecond second-column__title"> Customize </Box>
              {/* <Box className="columnItemSecond second-column__select-area">
                  <Box className="sliderContainer">

                  </Box>
              </Box>  */}
              <Box className="columnItemSecond second-column__buttons">
                  <Box id="accordion"></Box>
              </Box>
          </Box>
      </Box>
    </Box>

    </MainWrapper>
    
)}

export default Home
