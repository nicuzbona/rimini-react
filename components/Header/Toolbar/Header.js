import React from "react";

import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({}));

function Header() {
  const classes = useStyles();

  const headerContent = {
    title: "Design your own timeless table",
  };

  return (
    <Box className="fullWidthWrapper">
      <Box className="header">
        <Box className="header--left">
          <Box className="header--left__title">{headerContent.title}</Box>
        </Box>
        <Box className="header--right">
          <Box className="header--right__logo"></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
