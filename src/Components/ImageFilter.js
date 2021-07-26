import React from "react";

import food from "../assets/images/food.svg"
import others from "../assets/images/others.svg"
import health from "../assets/images/health.svg"
import transport from "../assets/images/transport.svg"
import utilities from "../assets/images/utilities.svg"
import {IconTheme} from "./UI";

export default (type) => {
  const Images = {
    Food: <IconTheme src={food} alt="Alimentação"/>,
    Health: <IconTheme src={health} alt="Saúde"/>,
    Transport: <IconTheme src={transport} alt="Transporte"/>,
    Utilities: <IconTheme src={utilities} alt="Utilidades"/>,
    Others: <IconTheme src={others} alt="Outros"/>
  };
  return Images[type] || Images.Others;
}
