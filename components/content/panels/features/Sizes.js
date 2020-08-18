import React, { useContext } from "react";
import Context from "../.././../../store/context";
import { Slider, makeStyles, Input, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "88%",
    margin: "auto",
    paddingTop: "10%",
  },
  slider: {
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "10%",
  },
  sliderTitle: {
    width: "100%",
    fontWeight: 600,
    textAlign: "center",
  },
});

const lengthValues = [
  { value: 50 },
  { value: 80 },
  { value: 100, label: "100" },
  { value: 120 },
  { value: 150 },
  { value: 180 },
  { value: 200, label: "200" },
  { value: 250 },
  { value: 300, label: "300" },
  { value: 350 },
  { value: 400, label: "400" },
];
const widthValues = lengthValues;
const heightValues = [
  { value: 40 },
  { value: 50, label: "50" },
  { value: 60 },
  { value: 80, label: "80" },
  { value: 100, label: "100" },
  { value: 110 },
  { value: 120, label: "120" },
  { value: 130 },
];

export default function Sizes() {
  const classes = useStyles();
  const { globalState, globalDispatch } = useContext(Context);

  const { length, width, height } = globalState;

  const handleSliderChange = (event, sliderId, payload) => {
    if (sliderId === "lengthSlider")
      globalDispatch({ type: "UPDATE_LENGTH", payload });
    else if (sliderId === "widthSlider")
      globalDispatch({ type: "UPDATE_WIDTH", payload });
    else if (sliderId === "heightSlider")
      globalDispatch({ type: "UPDATE_HEIGHT", payload });
  };

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <Typography className={classes.sliderTitle} id="lengthSlider">
          Length: {length.currentOption.value}cm
        </Typography>
        <Slider
          className={classes.slider}
          value={
            typeof length.currentOption.value === "number"
              ? length.currentOption.value
              : 0
          }
          onChange={(evt, val) => handleSliderChange(evt, "lengthSlider", val)}
          aria-labelledby="lengthSlider"
          valueLabelDisplay="auto"
          marks={lengthValues}
          step={null}
          min={50}
          max={400}
        />
      </div>

      <div className={classes.row}>
        <Typography className={classes.sliderTitle} id="widthSlider">
          Width: {width.currentOption.value}cm
        </Typography>
        <Slider
          className={classes.slider}
          value={
            typeof width.currentOption.value === "number"
              ? width.currentOption.value
              : 0
          }
          onChange={(evt, val) => handleSliderChange(evt, "widthSlider", val)}
          aria-labelledby="widthSlider"
          valueLabelDisplay="auto"
          marks={widthValues}
          step={null}
          min={50}
          max={400}
        />
      </div>

      <div className={classes.row}>
        <Typography className={classes.sliderTitle} id="heightSlider">
          Height: {height.currentOption.value}cm
        </Typography>
        <Slider
          className={classes.slider}
          value={
            typeof height.currentOption.value === "number"
              ? height.currentOption.value
              : 0
          }
          onChange={(evt, val) => handleSliderChange(evt, "heightSlider", val)}
          aria-labelledby="widthSlider"
          valueLabelDisplay="auto"
          marks={heightValues}
          step={null}
          min={40}
          max={130}
        />
      </div>
    </div>
  );
}
