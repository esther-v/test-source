import React from "react";
import Logo from '../assets/logo.svg';
import User from "./User.js";

const NavBar = () => {
  return(
    <nav>
      <img src={Logo} alt="Logo N-movie App" />
      <User />
    </nav>
  )
}

export default NavBar;