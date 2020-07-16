import React, { useState, useEffect } from "react";
import { Box, Anchor } from "grommet";
// import Masonry from 'react-masonry-css';

import dynamic from "next/dynamic";

const TableApp = dynamic(() => import("./content/TableApp/TableApp"), {
  ssr: false,
});
import ImageSlider from "./content/sliders/ImageSlider";
import { mergeClasses } from "@material-ui/styles";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  linkActive: {
    color: "#4593aa !important",
  },
}));

export default function App() {
  const classes = useStyles();
  const sliderLinks = ["glass", "legs", "applications"];
  const [sliderLinkActive, setSliderLinkActive] = useState("glass");

  const triggerSliderChange = (id) => {
    setSliderLinkActive(id);
  };

  return (
    <Box className="fullWidthWrapper contentWrapper">
      <Box className="content-left">
        <Box className="image-area">
          <Box className="image-area__img" id="threeJsHere">
            <TableApp />
            {/* <script src="./3d/testing_three_js.js"></script> */}
          </Box>
        </Box>
        <Box className="sliders-area">
          <Box className="slider first-slider">
            <Box className="slider__title first-slider__title">
              CHOOSE YOUR FLOOR FOR ANIMATION:
            </Box>

            <Box className="slider--action">
              <Box id="film_roll1">
                <ImageSlider sliderToSet={"legs"} />
              </Box>
            </Box>
          </Box>
          <Box className=" slider second-slider">
            <Box className="slider__title second-slider__title">
              <span>
                {sliderLinks.map((linkName, index) => {
                  return (
                    <Anchor
                      key={`${linkName}-${index}`}
                      href="#"
                      label={linkName}
                      id={linkName}
                      onClick={() => {
                        triggerSliderChange(linkName);
                      }}
                      className={`${
                        sliderLinkActive === linkName ? classes.linkActive : ""
                      }`}
                    />
                  );
                })}
              </span>
            </Box>

            <Box className="slider--action">
              <Box id="film_roll2">
                <ImageSlider sliderToSet={sliderLinkActive} />
              </Box>
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
            <Box className="overview-item overview__model">
              Model: <span></span>
            </Box>
            <Box className="overview-item overview__size">
              Size: <span></span>
            </Box>
            <Box className="overview-item overview__high">
              Height: <span></span>
            </Box>
            <Box className="overview-item overview__legs">
              Legs: <span></span>
            </Box>
            <Box className="overview-item overview__glas-thikness">
              Glass/Thikness: <span></span>
            </Box>
            <Box className="overview-item overview__application">
              Application: <span></span>
            </Box>
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
          <Box className="columnItemSecond second-column__title">Customize</Box>
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
  );
}
