
import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { Box, List, ListItem, ListItemText, Typography, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const styles = {
    'mainWrapper': {
        marginTop: "3vw",
        width: "65vw",
        height: "auto",
        padding: "2vw 3vw",
        backgroundColor: "#F9F9F9",
        boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.05)",

    },
    'listItemStyles': {
        width: '100%',
        paddingTop: "0.911vw",
        paddingBottom: "0.911vw",
        borderBottom: "1px solid #C4C4C4",
        
    },
    'listItemTextBox': {
        width: "68%",
        marginRight: "0.5vw",
    },
    'listItemText': {
        color: "#454545", 
        fontSize: '18px !important',
        fontWeight: "900 !important",
        textTransform: "lowercase",
        lineHeight: "184.1%",
        margin: '0',
        fontFamily: "hypatia-sans-pro', 'BlinkMacSystemFont', -apple-system, 'Roboto', 'Lucida Sans !important",
    },
    'listItemTextMobile': {
        color: "#454545", 
        fontSize: '15px !important',
        fontWeight: "900 !important",
        textTransform: "lowercase",
        lineHeight: "184.1%",
        margin: '0',
        fontFamily: "hypatia-sans-pro', 'BlinkMacSystemFont', -apple-system, 'Roboto', 'Lucida Sans !important",
    },

    'totalPriceText': {
        margin: "7% 0 0 0 !important",
        textTransform: 'lowercase',
        color: "#DF7138",
    }
}


export default withStyles(styles)(function ({ 
    selectedTreesArr, classes, 
    deleteTree, isMobile, isLoading 
}) {


    const [totalPrice, setTotalPrice] = useState(0);
    const [currency, setCurrency] = useState('lei');

        let price = 0;
        useEffect(() => {

            let calculatedPrice = 0;
            selectedTreesArr.map((tree, index) => {

                if (tree.type === "normmal"){
                    if(tree.expiration_date === "1970-01-01"){
                        calculatedPrice = 150;
                        price += calculatedPrice;
                    }else{
                        calculatedPrice = 60;
                        price += calculatedPrice;
                    }
                }else if(tree.type === "puiet"){
                    if(tree.expiration_date === "1970-01-01"){
                        calculatedPrice = 60;
                        price += calculatedPrice;
                    }else{
                        calculatedPrice = 60;
                        price += calculatedPrice;
                    }
                }else{
                    calculatedPrice = 0;
                    price += calculatedPrice;
                }
                
            })
            setTotalPrice(price);

        }, [selectedTreesArr]);
    
    

    
    

    return(
        <Box
            className={classes.mainWrapper}
            style={{
                width: isMobile ? '100%' : '65vw' 
            }}
        >
            <List dense align="center" style={{marginLeft: 0}}>

                {selectedTreesArr.map((tree, index) => {
                    return (
                        <ListItem
                            key={index}
                            width={1}
                            className={classes.listItemStyles}
                            style={{
                                paddingLeft: isMobile ? "0" : "inherit",
                                paddingRight: isMobile ? "0" : "inherit",
                            }}
                        >
                            <Box
                                className={classes.listItemTextBox}
                            >
                                <ListItemText 
                                    disableTypography
                                    primary={
                                        `   ${index+1}. 
                                            pom nr. ${tree.numar} - rand ${tree.rand} - ${tree.fruct}
                                        `} 
                                    className={isMobile ? classes.listItemTextMobile : classes.listItemText} 
                                />
                            </Box>
                            <ListItemSecondaryAction
                                style={{
                                    marginRight: isMobile ? "8%" : "9%",
                                    right: isMobile ? '0' : "16px"
                                }}
                            >
                                <ListItemText 
                                    disableTypography
                                    primary={`${tree.price} ${currency}`} 
                                    className={isMobile ? classes.listItemTextMobile : classes.listItemText}
                                />
                            </ListItemSecondaryAction>
                            <ListItemSecondaryAction
                                style={{
                                    marginRight: isMobile ? '0' : "2%",
                                    right: isMobile ? '0' : "16px"
                                }}
                            >
                                <IconButton edge="end" aria-label="delete tree" onClick={() =>  deleteTree(tree, isLoading)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })}
            
                

                <Typography 
                    className={`${classes.listItemText} ${classes.totalPriceText}`}
                    variant="subtitle1" 
                    children={`${totalPrice} ${currency} / an`}
                />
            

                
            </List>
            
        </Box>
    )

})
