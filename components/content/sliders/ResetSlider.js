import React, { useEffect } from "react";
import { WithStore } from "pure-react-carousel";

function ResetSlider(props) {
  useEffect(() => {
    props.carouselStore.setStoreState({ currentSlide: 0 });
  });

  return <></>;
}

export default WithStore(ResetSlider);
