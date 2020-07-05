import React, { useState, useEffect } from 'react';
import { Anchor } from 'grommet';


import { AppBar, Toolbar, InputBase, Box,  Typography, Button, IconButton } from '@material-ui/core';

import { withStyles, makeStyles, } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({ 
}));



function Header() {
    const classes = useStyles();

    const headerContent = {
        title: 'Design your own timeless table'
    }


    

    return (
        <Box className="fullWidthWrapper">
            <Box className="header" >
                <Box className="header--left">
                    <Box className="header--left__title">{headerContent.title}</Box>
                </Box>
                <Box className="header--right" >
                    <Box className="header--right__logo"></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;