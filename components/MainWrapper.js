import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from "./Header/Toolbar/Header";
import Footer from "./Footer/Footer";

const RNTheme = {};

const theme = createMuiTheme({
  status: {
    danger: "0a0",
  },
});

export default function MainWrapper(props) {
  // get content from wordpress

  return (
    // <Grommet style={{ height: "100%" }} theme={RNTheme}>
      <ThemeProvider theme={theme}>
        <Header />
        {props.children}
        <Footer />
      </ThemeProvider>
    // </Grommet>
  );
}
