import React, { Component, Fragment } from 'react';
import { Grid, Image, Box, Text, Button, Anchor } from 'grommet';
import { Typography, SvgIcon } from '@material-ui/core';
import { withStyles, makeStyles, } from '@material-ui/styles';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//     faFacebookF,
//     faInstagram,
//     faTwitter,
//     faPinterestP,
//     faYoutube
// } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
    footerWrapper: {
        width: "100%",
        background: "#252C38",
        display: "flex",
        flexDirection: "column",
    },
    socialWrapper: {
        width: "100%",
        padding: "3% 2% 1%",
        display: "flex",
        flexDirection: "row !important",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    footerWrapperInner:{
        width: "100%",
        padding: "4% 25%",
        borderTop: "1px solid #fff",
        margin:" 0 auto",

    },
    linkedIn: {
        fill: "#B4B4B4",
        transition: ".2s",
        "&:hover": {
            fill: "#0073b1"
        }
    },
    facebook: {
        fill: "#B4B4B4",
        transition: ".2s",
        "&:hover": {
            fill: "#3d6ad6"
        }
    },
    instagram: {
        fill: "#B4B4B4",
        transition: ".2s",
        "&:hover": {
            fill: "#e53362"
        }
    },
    footerMenuRow: {
        display: "flex",
        flexWrap: "no-wrap",
        flexDirection: "row !important",
        justifyContent: "space-between",
        padding: "3% 25%",
    },
    footerMenuColumn: {
        width: "fit-content",
        height: "80%",
    },
    footerMenuLink:{
        width: 'fit-content',
        color: "#fff !important",
        textTransform: "uppercase",
        fontFamily: "inherit",
        fontSize: '16px',
        padding: "10% 0",
        fontWeight: "500",
        "&:hover": {
            textDecoration: "none !important",
        }
    },
    linkSpecial: {
        color: "#44BDA1 !important",
    },

    
}));







export default function Footer() {

    const classes = useStyles();

    return (
        <>

            {/* <!-- import google fonts --> */}
            <link href="https://fonts.googleapis.com/css?family=Barlow|Raleway&display=swap" rel="stylesheet" />
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
            <script src="./content/header.js" ></script>
            {/* <script src="./content/sliders.js"></script> */}
            <script src="./content/overview.js"></script>
            <script src="./content/generateAccordion.js"></script>
            <script src="./content/rangeSliders.js"></script>
            <script src="./content/totalBox.js"></script>
        {/* <!-- END load content --></link> */}
        
        </>
    );
}
