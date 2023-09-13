import React from "react";
import logo from "../img/logo.png"
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center p-[10px] mx-[7%] ">
        <div className="flex justify-center md:w-[13%] w-[25%]">
          <img src={logo} alt="" />
        </div>
        <div className="font-thin md:text-base text-[7px] font-display flex justify-around gap-1 items-center w-[40%] md:w-[50%]">
            <a href="" className="block nav-link">HOME</a>
            <a href="" className="block nav-link">LOCATION</a>
            <a href="" className="block nav-link">ABOUT</a>
            <a href="" className="block nav-link">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;