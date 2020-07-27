import React from "react";
import MainWrapper from "../components/MainWrapper";
import App from "../components/App";
import GlobalStateProvider from "../store/GlobalStateProvider";

function Home() {
  return (
    <MainWrapper>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </MainWrapper>
  );
}

export default Home;
