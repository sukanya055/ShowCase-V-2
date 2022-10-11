import React from "react";
import circleGif2 from "../assets/circle2.gif";
import rocket from "../assets/rocket.gif";
const WorksAndQuotes = () => {
  const quotes = [
    {
      number: 1,
      title: "Quick Quotes",
      desc: "  Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    },
    {
      number: 2,
      title: "Fast Approval",
      desc: "  Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    },
    {
      number: 3,
      title: "Easy Application",
      desc: "  Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    },
  ];

  return (
    <>
      <div className="hero min-h-screen mt-20 w-full">
        <div className="hero-content flex-col lg:flex-row justify-between w-full">
          <div className="w-full flex justify-center md:w-[50%] px-5">
            <img src={rocket} className="rounded-lg" alt="" />
          </div>
          <div className="w-full lg:w-[50%] gap-[44px] mt-20">
            <div>
              {quotes.map(({ number, title, desc }) => (
                <div key={number} className="mb-[44px]">
                  <div className="flex items-center gap-5 md:gap-10 ">
                    <div className="relative">
                      <img
                        className="w-[75px] sm:w-[85px] md:w-[108px] "
                        src={circleGif2}
                        alt=""
                      />
                      <span
                        style={{
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                        className="absolute text-[#686868] text-[39px]"
                      >
                        {number}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-[22px] md:text-[24px] lg:text-[28px] text-[#182F43] font-bold">
                        {title}
                      </h4>
                    </div>
                  </div>
                  <div>
                    <p className="mt-4 pl-4 text-[13px] md:text-[16px] text-[#182F43]">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksAndQuotes;
