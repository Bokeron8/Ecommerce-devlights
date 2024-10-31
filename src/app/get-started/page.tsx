import React from "react";

function GetStarted() {
  return (
    <div className="h-dvh bg-[url('/Get-Started.png')] bg-[length:100%_100%] flex justify-center items-center">
      <div className="w-3/12 flex flex-col gap-8">
        <p className="text-white text-3xl text-center font-semibold">
          You want
          <br /> Authentic, here
          <br /> you go!
        </p>

        <button className="bg-blue-700 text-white text-xl py-3 font-semibold">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
