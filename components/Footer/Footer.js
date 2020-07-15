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

      {/* <!-- import axios --> */}
      <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      {/* <!-- END import axios --> */}

      {/* <!-- import three.js --> */}
      <script src="./includes/three.js"></script>
      {/* <!-- import three.js --> */}

      {/* <!-- import jQuery --> */}
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <script src="./includes/film_roll/jquery.film_roll.js"></script>
      {/* <!-- <script src="./includes/film_roll/jquery.touchSwipe.min.js"></script> --> */}
      {/* <!-- END import jQuery --> */}

      {/* <!-- load content --> */}
      <script src="./content/dataFlow.js"></script>
      <script src="./content/optionAppliedObj.js"></script>
      <script src="./content/renderPrevImage.js"></script>
      <script src="./content/basicPrice.js"></script>
      <script src="./content/header.js"></script>
      {/* <script src="./content/sliders.js"></script> */}
      <script src="./content/overview.js"></script>
      <script src="./content/generateAccordion.js"></script>
      <script src="./content/rangeSliders.js"></script>
      <script src="./content/totalBox.js"></script>
      {/* <!-- END load content --></link> */}
    </>
  );
}
