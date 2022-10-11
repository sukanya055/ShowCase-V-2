import React from "react";
import chevron from "../assets/leftChevron.gif";

const GetStarted = () => {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="flex justify-between items-center w-full px-5">
        <div>
          <img
            className="w-[130px] md:w-[300px]"
            src={chevron}
            alt="chevronImg"
          />
        </div>
        <div className="text-center">
          <p className="text-[20px] md:text-[35px] lg:text-[45px] text-[#112D57] font-bold text-center px-5 md:px-24 lg:px-32 xl:px-52 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-gradient-to-r from-[#F0FF00] px-10 md:px-16 py-3 text-[20px] md:text-[28px] lg:text-[30px] text-white rounded-lg border-0 outline-none to-[#58CFFB] inline-block mt-20">
            Get Started
          </button>
        </div>
        <div>
          <img
            className="rotate-180 w-[130px] md:w-[300px]"
            src={chevron}
            alt="chevronImg"
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
