import React, { useState, useEffect, useContext } from "react";
import Context from "../../../store/context";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Box } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ResetSlider from "./ResetSlider";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  slide: {
    height: "100%",
    padding: "0 !important",
  },
  slideInner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
    height: "93% !important",
    // border: "1px solid green",
    marginTop: "7%",
    "& img": {
      height: "70%",
      "&:hover": {
        cursor: "pointer",
      },
    },
    "&  span": {
      color: "white",
      width: "74.5%",
      fontFamily: '"Roboto", sans-serif',
      marginTop: "5%",
      fontWeight: 500,
      overflow: "hidden",
      fontSize: "70%",
      lineHeight: "115%",
      textAlign: "center",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  sliderButton: {
    position: "absolute",
    background: "transparent",
    border: "none",
    outline: "none",
    border: "none",
    color: "#4593aa",
    width: "50px",
    height: "100%",
    margin: 0,
    top: 0,
    display: "flex",
    alignItems: "center",

    "& svg": {
      transform: "scale(2.3)",
    },
  },
  sliderButtonBack: {
    left: "10px",
    justifyContent: "flex-end",
  },
  sliderButtonNext: {
    right: "10px",
    justifyContent: "flex-start",
  },
}));

const sliders = {
  glassSlider: [
    {
      id: 1,
      name: "Milk Glass",
      imgSrc: "./images/glass/glass_milk.png",
      price: 10,
    },
    {
      id: 2,
      name: "Extra Clear Glass",
      imgSrc: "./images/glass/glass_clear.png",
      price: 10,
    },
    {
      id: 3,
      name: "Float Glass 15mm",
      imgSrc: "./images/glass/glass_float.png",
      price: 10,
    },
    {
      id: 4,
      name: "Float Glass 19mm ",
      imgSrc: "./images/glass/glass_float_19.png",
      price: 10,
    },
    {
      id: 5,
      name: "Optiwhite Satinato Glass 10mm ",
      imgSrc: "./images/glass/glass_optiwhite_satinato_10.png",
      price: 10,
    },
    {
      id: 6,
      name: "Smoked Glass",
      imgSrc: "./images/glass/glass_smoked.png",
      price: 10,
    },
  ],
  legsSlider: [
    {
      id: 1,
      name: "Beech Hearthwood",
      imgSrc: "./images/legs/legs_beech_hearthwood.png",
      price: 11,
    },
    {
      id: 2,
      name: "Bianco Oak",
      imgSrc: "./images/legs/legs_bianco_oak.png",
      price: 11,
    },
    {
      id: 3,
      name: "Cherry",
      imgSrc: "./images/legs/legs_cherry.png",
      price: 11,
    },
    {
      id: 4,
      name: "High Gloss Chrome Finish",
      imgSrc: "./images/legs/legs_high_gloss_chrome_finish.png",
      price: 11,
    },
    {
      id: 5,
      name: "Nickel Finish",
      imgSrc: "./images/legs/legs_matt_nickel_finish.png",
      price: 11,
    },
    {
      id: 6,
      name: "Natural Beech",
      imgSrc: "./images/legs/legs_natural_beech.png",
      price: 11,
    },
    {
      id: 7,
      name: "Natural Oak",
      imgSrc: "./images/legs/legs_natural_oak.png",
      price: 11,
    },
    {
      id: 8,
      name: "Rustic Oak",
      imgSrc: "./images/legs/legs_rustic_oak.png",
      price: 11,
    },
    {
      id: 9,
      name: "Titanium Silver Painted",
      imgSrc: "./images/legs/legs_titanium_silver_painted.png",
      price: 11,
    },
    {
      id: 10,
      name: "Walnut Heartwood",
      imgSrc: "./images/legs/legs_walnut_heartwood.png",
      price: 11,
    },
    {
      id: 11,
      name: "Walnut",
      imgSrc: "./images/legs/legs_walnut.png",
      price: 11,
    },
    {
      id: 12,
      name: "Wenge Oak",
      imgSrc: "./images/legs/legs_wenge_oak.png",
      price: 11,
    },
    {
      id: 13,
      name: "Wild Oak",
      imgSrc: "./images/legs/legs_wild_oak.png",
      price: 11,
    },
  ],
  applicationsSlider: [
    {
      id: 1,
      name: "Brilliant Gold Finish",
      imgSrc: "./images/applications/application_brilliant_gold_finish.png",
      price: 12,
    },
    {
      id: 2,
      name: "Brilliant Gold Painted",
      imgSrc: "./images/applications/application_brilliant_gold_painted.png",
      price: 12,
    },
    {
      id: 3,
      name: "Golden Painted",
      imgSrc: "./images/applications/application_golden_painted.png",
      price: 12,
    },
    {
      id: 4,
      name: "High Chrome",
      imgSrc: "./images/applications/application_high_chrome.png",
      price: 12,
    },
    {
      id: 5,
      name: "High Gloss Chrome Finish",
      imgSrc: "./images/applications/application_high_gloss_chrome_finish.png",
      price: 12,
    },
    {
      id: 6,
      name: "Titanium Painted",
      imgSrc: "./images/applications/application_titanium_painted.png",
      price: 12,
    },
  ],
  floorSlider: [
    {
      id: 1,
      name: "Larch",
      imgSrc: "/includes/objects/floor/optimized_larice_texture.jpg",
      price: 0,
    },
    {
      id: 2,
      name: "Granite",
      imgSrc: "/includes/objects/floor/granite.jpg",
      price: 0,
    },
    {
      id: 3,
      name: "Old Rustic",
      imgSrc: "/includes/objects/floor/floor_1.jpg",
      price: 0,
    },
    {
      id: 4,
      name: "White Marble",
      imgSrc: "/includes/objects/floor/white_tiles.jpg",
      price: 0,
    },
    {
      id: 5,
      name: "Dark laminate",
      imgSrc: "/includes/objects/floor/floor.jpg",
      price: 0,
    },
    {
      id: 6,
      name: "Deck",
      imgSrc: "/includes/objects/floor/floor_2.jpg",
      price: 0,
    },
    {
      id: 7,
      name: "Stones",
      imgSrc: "/includes/objects/floor/stones.jpg",
      price: 0,
    },
  ],
};

export default function ({ sliderToSet }) {
  const classes = useStyles();
  const { globalState, globalDispatch } = useContext(Context);
  const [sliderToRender, setSliderToRender] = useState(
    sliderToSet === "glass"
      ? sliders.glassSlider
      : sliderToSet === "legs"
      ? sliders.legsSlider
      : sliderToSet === "applications"
      ? sliders.applicationsSlider
      : sliders.floorSlider
  );
  useEffect(() => {
    setSliderToRender(
      sliderToSet === "glass"
        ? sliders.glassSlider
        : sliderToSet === "legs"
        ? sliders.legsSlider
        : sliderToSet === "applications"
        ? sliders.applicationsSlider
        : sliders.floorSlider
    );
  }, [sliderToSet]);

  const optionClicked = (slot, option) => {
    globalDispatch({
      type: `UPDATE_${sliderToSet.toUpperCase()}`,
      payload: option,
    });
  };

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={sliderToRender.length}
        visibleSlides={3}
        step={3}
        style={{ width: "85%", margin: "auto" }}
        infinite={true}
      >
        <ResetSlider sliderToSet={sliderToSet} />

        <Slider style={{ height: "100%", outline: "none" }}>
          {sliderToRender.map((option, index) => {
            return (
              <Slide key={option.id} index={index} className={classes.slide}>
                <Box className={classes.slideInner}>
                  <img
                    src={option.imgSrc}
                    alt={option.name}
                    onClick={() => {
                      optionClicked(sliderToSet, option);
                    }}
                  />
                  <span>{option.name}</span>
                </Box>
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack
          className={`${classes.sliderButton} ${classes.sliderButtonBack}`}
        >
          <ArrowBackIosIcon />
        </ButtonBack>
        <ButtonNext
          className={`${classes.sliderButton} ${classes.sliderButtonNext}`}
        >
          <ArrowBackIosIcon
            style={{ transform: "scale(2.3) rotate(180deg)" }}
          />
        </ButtonNext>
      </CarouselProvider>
    </>
  );
}
