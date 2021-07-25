import React, { useState } from "react";

import privateImg from "../../assets/images/private.svg";
import eyeImg from "../../assets/images/eye.svg";
import moneyImg from "../../assets/images/money.svg";

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <div className="box">
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <img className="icon_image" src={moneyImg} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <div className="balance">
            <span className="detail">R$</span> 0,00{" "}
          </div>
        ) : null}
      </div>

      <button className="button" onClick={toggleHandler}>
        <img
          style={{ marginTop: "2px" }}
          className="icon_image"
          src={toggleState ? privateImg : eyeImg}
          alt="Privacidade do Saldo"
        />
      </button>
    </div>
  );
};

export default Account;
