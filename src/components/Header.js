import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute z-10  ml-10 mt-10 bg-gradient-to-b from-black">
      <img className="w-40" src={logo} alt="Logo" />
    </div>
  );
};

export default Header;
