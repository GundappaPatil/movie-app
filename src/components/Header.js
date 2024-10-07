import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
const navigate = useNavigate();
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/')
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute z-10  ml-10 mt-10 bg-gradient-to-b from-black flex">
      <img className="w-40" src={logo} alt="Logo" />
      <button onClick={handleClick}>Sign Out</button>
    </div>
  );
};

export default Header;
