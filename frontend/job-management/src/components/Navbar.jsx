import React from "react";
import Logo from "../../src/assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({onCreateClick}) => {
  return (
    <nav  className="w-[890px] h-[80px] mt-[21px] ml-[275px]  rounded-[122px] bg-white shadow-md flex items-center px-6">
      <div className="flex items-center  w-full">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <ul className="flex ml-[30px] space-x-15 text-black font-medium  px-6 py-2 ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Find Jobs</li>
          <li className="cursor-pointer">Find Talents</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Testimonials</li>
        </ul>
      </div>
      
        <button onClick={onCreateClick}
          style={{ background: "linear-gradient(to right, #A128FF, #6100AD)" }}
          className="rounded-full text-white h-[38px] w-[123px] cursor-pointer"
        >
          Create Jobs
        </button>
      
    </nav>
  );
};

export default Navbar;
