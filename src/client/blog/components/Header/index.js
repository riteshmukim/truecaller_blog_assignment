import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "./truecaller-logo.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="Truecaller Blog" className="header-img" />
      </Link>
    </header>
  );
};

export default Header;
