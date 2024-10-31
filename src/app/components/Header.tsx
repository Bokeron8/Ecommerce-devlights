import React from "react";
import LittleLogo from "../icons/LittleLogo";
import PersonIcon from "../icons/PersonIcon";
import HeartIcon from "@/app/icons/HeartIcon";
import ShoppingCart from "@/app/icons/ShoppingCart";
import SearchIcon from "@/app/icons/SearchIcon";
import MicrophoneIcon from "@/app/icons/MicrophoneIcon";

function Header() {
  return (
    <div className="flex justify-between items-center p-6 md:px-32">
      <div className="flex-shrink-0">
        <LittleLogo textColor="black" cartColor="#3163E2" />
      </div>

      <div className="flex items-center px-5 py-2 bg-white rounded-md shadow-sm flex-grow mx-2 md:mx-4 lg:mx-16">
        <SearchIcon />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search any Product..."
          className="bg-transparent p-2 w-full"
        />
        <MicrophoneIcon />
      </div>

      <div className="flex items-center space-x-3 flex-shrink-0">
        <div className="flex mr-4 gap-2">
          <PersonIcon />
          <span>Ingresar</span>
        </div>
        <HeartIcon />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Header;
