import React from "react";

import food from "../assets/images/food.svg"
import others from "../assets/images/others.svg"
import health from "../assets/images/health.svg"
import transport from "../assets/images/transport.svg"
import utilities from "../assets/images/utilities.svg"
import {Icon} from "./UI";

export default (type) => {
  const Images = {
    Food: <Icon src={food} alt="Alimentação"/>,
    Health: <Icon src={health} alt="Saúde"/>,
    Transport: <Icon src={transport} alt="Transporte"/>,
    Utilities: <Icon src={utilities} alt="Utilidades"/>,
    Others: <Icon src={others} alt="Outros"/>
  };
  return Images[type] || Images.Others;
}
