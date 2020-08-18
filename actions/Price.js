import React, { useState, useContext, useEffect } from "react";
import Context from "../store/context";
export default function Price() {
  const {
    globalState: { glass, legs, applications, length, width, height, price },
    globalDispatch,
  } = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(price.basePrice);

  useEffect(() => {
    const glassPrice = glass.currentOption.price;
    const legsPrice = legs.currentOption.price;
    const applicationsPrice = applications.currentOption.price;

    const scalePrice =
      length.currentOption.value / 4 +
      width.currentOption.value / 4 +
      height.currentOption.value / 2;

    const total =
      price.basePrice + glassPrice + legsPrice + applicationsPrice + scalePrice;

    setTotalPrice(total);
  }, [glass, legs, applications, length, width, height]);

  useEffect(() => {
    globalDispatch({
      type: "UPDATE_PRICE",
      payload: totalPrice,
    });
  }, [totalPrice]);

  return <> {totalPrice} Eur </>;
}
