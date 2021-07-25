import React from "react";
import bank_logo from "../../assets/images/bank_logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="logo_image" src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <a className="secondary_button" href="https://google.com">
          Ajuda
        </a>
        <a className="primary_button" href="https://google.com">
          Sair
        </a>
      </div>
    </div>
  );
};

export default Header;
