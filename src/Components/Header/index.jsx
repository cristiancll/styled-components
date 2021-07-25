import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";
import styled from "styled-components";
import {Color} from "../UI/variables";


const StyledHeader = styled.nav`
  background-color: ${Color.primary};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const HeaderButton = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;
  
  background: ${(props) => props.primary ? "transparent" : "white"};
  color: ${(props) => props.primary ? "white" : Color.primary};
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank"/>
      <div>
        <HeaderButton href="https://google.com">Ajuda</HeaderButton>
        <HeaderButton primary href="https://google.com">Sair</HeaderButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
