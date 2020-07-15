import React from "react";
import { Grommet } from "grommet";

import Header from "./Header/Toolbar/Header";
import Footer from "./Footer/Footer";

const RNTheme = {};

export default function MainWrapper(props) {
  // get content from wordpress

  return (
    <Grommet style={{ height: "100%" }} theme={RNTheme}>
      <Header />
      {/* <Box style={props.style}>  */}
      {props.children}
      {/* </Box> */}
      <Footer />
    </Grommet>
  );
}
