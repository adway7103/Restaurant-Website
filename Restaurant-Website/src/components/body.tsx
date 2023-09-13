import React from "react";
import burger from "../img/burger.png";
import "../index.css";

const Body = () => {
  return (
    <>
      <div className=" md:flex justify-around px-[5%] py-[4%]">
        <div className="md:w-[45%] w-[90%]">
          <div className=" text-left flex font-display md:text-[3.5rem] w-[97%] text-[4rem] leading-none p-1 justify-left">
            <div>ITS GREAT TIME FOR A TASTY BURGER</div>
          </div>
          <div className="font-poppins items-center justify-center mt-[1rem] md:text-[0.8rem] leading-tight text-[0.8rem] p-1">
            
          </div>
          <div className="flex justify-between mt-[1rem]">
            <button className="bg-red-600 text-white ml-3 px-2 py-3 font-display btn">
              VIEW DEALS
            </button>
          </div>
        </div>
        <div className="md:w-[40%]">
          <img src={burger} className="w-full h-full" alt="" />
        </div>
      </div>
    </>
  );
};

export default Body;
