import React from "react";
import LittleLogo from "../icons/LittleLogo";

function Footer() {
  return (
    <div className="bg-[#FD6E86] p-6 md:p-32 md:py-16 flex justify-between">
      <LittleLogo cartColor="white" textColor="white" />
      <div className="text-white">
        <span>&quot;Copyrights 2024&quot;</span>
        <br />
        <span>Devlights</span>
      </div>
    </div>
  );
}

export default Footer;
