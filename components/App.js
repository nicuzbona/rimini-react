import React, { useState, useEffect, useContext } from "react";
import { Box, Anchor } from "grommet";
// import Masonry from 'react-masonry-css';
import Panels from "./content/panels/";
import dynamic from "next/dynamic";

const TableApp = dynamic(() => import("./content/TableApp/TableApp"), {
  ssr: false,
});
import InfoStatus from "./content/InfoStatus";
import Price from "../actions/Price";
import ImageSlider from "./content/sliders/ImageSlider";
import { makeStyles } from "@material-ui/styles";

import { firebase, auth } from "../firebase";
import Context from "../store/context";
const useStyles = makeStyles((theme) => ({
  linkActive: {
    color: "#4593aa !important",
    lineHeight: "150%",
    borderBottom: "2px solid #4593aa",
  },
  link: {
    boxShadow: "none",
    "&:hover": { textDecoration: "none !important" },
  },
  // linkHr: {
  //   border: "1px solid #4593aa",
  //   borderRadius: "1px",
  //   position: "absolute",
  // },
}));

export default function App() {
  const classes = useStyles();
  const sliderLinks = ["glass", "legs", "applications"];
  const [sliderLinkActive, setSliderLinkActive] = useState("glass");
  const triggerSliderChange = (id) => {
    setSliderLinkActive(id);
  };

  const {
    globalState: { price },
    globalDispatch,
  } = useContext(Context);

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
                <ImageSlider sliderToSet={"floor"} />
              </Box>
            </Box>
          </Box>
          <Box className=" slider second-slider">
            <Box className="slider__title second-slider__title">
              <span style={{ position: "relative" }}>
                {sliderLinks.map((linkName, index) => {
                  return (
                    <Anchor
                      key={`${linkName}-${index}`}
                      label={linkName}
                      id={linkName}
                      onClick={() => {
                        triggerSliderChange(linkName);
                      }}
                      className={`${classes.link} ${
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
          <InfoStatus />
          <Box className="columnItem first-column__total">
            <Box className="column-total-content">
              <span>Price:</span>
              <span>
                {" "}
                <Price />{" "}
              </span>
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
            <Panels />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
