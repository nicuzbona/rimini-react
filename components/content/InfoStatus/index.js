import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import Context from "../../../store/context";

export default function index() {
  const {
    globalState: { width, height, length, glass, legs, applications, price },
    globalDispatch,
  } = useContext(Context);

  return (
    <>
      <Box className="columnItem first-column__title">
        <Box className="right-title-content">
          <span>Basic model from:</span>
          <span> 272 Eur </span>
        </Box>
      </Box>
      <Box className="columnItem first-column__overview">
        <Box className="overview-item overview__title"> Overview</Box>
        <Box className="overview-item overview__size">
          Size:
          <span>
            {`${length.currentOption.value}cm x ${width.currentOption.value}cm`}
          </span>
        </Box>
        <Box className="overview-item overview__high">
          Height: <span> {`${height.currentOption.value} cm`} </span>
        </Box>
        <Box className="overview-item overview__legs">
          Legs: <span>{`${legs.currentOption.name}`}</span>
        </Box>
        <Box className="overview-item overview__glas-thikness">
          Glass/Thikness: <span>{`${glass.currentOption.name}`}</span>
        </Box>
        <Box className="overview-item overview__application">
          Application: <span>{`${applications.currentOption.name}`}</span>
        </Box>
      </Box>
    </>
  );
}
