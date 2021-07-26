import React, {useState} from "react";
import styled from "styled-components";
import privateImg from "../../assets/images/private.svg";
import eyeImg from "../../assets/images/eye.svg";
import moneyImg from "../../assets/images/money.svg";
import {Balance, Box, Button, Detail, Icon, IconTheme} from "../UI";

const IconMargin = styled(Icon)`
  marginTop: "2px";
`;


const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{fontSize: "26px", padding: "20px 0"}}>
        Saldo disponível{" "}
        <span>
          <IconTheme src={moneyImg} alt="Ícone Saldo"/>
        </span>
        {toggleState ? (
          <Balance>
            <Detail>R$</Detail> 0,00{" "}
          </Balance>
        ) : null}
      </div>

      <Button onClick={toggleHandler}>
        <IconMargin
          src={toggleState ? privateImg : eyeImg}
          alt="Privacidade do Saldo"
        />
      </Button>
    </Box>
  );
};

export default Account;
