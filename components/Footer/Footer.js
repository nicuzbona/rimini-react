import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      {/* <!-- import google fonts --> */}
      <link
        href="https://fonts.googleapis.com/css?family=Barlow|Raleway&display=swap"
        rel="stylesheet"
      />
      {/* <!-- END import google fonts --> */}

    </>
  );
}
