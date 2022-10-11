import React from "react";
import { Layout } from "../components";
import { Player } from "@lottiefiles/react-lottie-player";
import circularAnimation from "../lotties/circularAnimation";
import whatsApp from "../assets/whatsapp.png";
import gps from "../assets/gps.png";
import save from "../assets/save.png";
import product from "../assets/product_demo.png";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
const Product = () => {
  return (
    <div>
      <Layout>
        <div className="lg:px-28 py-4 sm:px-8">
          <div className="flex relative items-center justify-center">
            {/* <Player
              autoplay
              loop
              src={circularAnimation}
              style={{ height: "400px", width: "400px" }}
            ></Player> */}

            <div className="relative">
              <HiOutlineChevronLeft className="absolute text-5xl font-bold cursor-pointer text-white top-1/2 " />

              <img
                src={product}
                alt="product"
                className=" shadow-lg rounded-full object-cover h-[500px] w-[500px]"
              />
              <HiOutlineChevronRight className="absolute text-5xl cursor-pointer font-bold text-white right-0 top-1/2 " />
            </div>
          </div>
          <div className="shadow-md rounded-lg p-5 px-28 my-8  ">
            {/* top part */}
            <div className="flex flex-row items-center justify-between">
              <div className="basis-1/2">
                <h3 className="font-light font-roboto text-md">
                  Classic Shoose
                </h3>
                <h1 className="font-semibold text-2xl font-roboto my-2">
                  Color black slim fit shoose
                </h1>
                <p className=" text-md font-poppins font-normal w-8/12">
                  Buy shoose for men in India @ Limeroad. ... Buy shoose for men
                  in India @ Limeroad. 2572 products. 2572 RESULT(S) FROM SHOOSE
                  FOR MEN.
                </p>
              </div>
              <button className="basiz-1/2 shadow-xl hover:shadow-lg p-2 rounded-md ">
                Rs. 1279.00
              </button>
            </div>
            <div className="flex flex-row place-items-stretch  justify-between gap-8 mt-12">
              <div className="basis-1/3 px-8 py-3 shadow-md rounded-xl cursor-pointer hover:scale-105 transition-transform ease-out delay-100 ">
                <div className="flex items-center justify-center gap-1 flex-col">
                  <img
                    src={whatsApp}
                    alt="whatsapp"
                    className="w-[72px] h-[61px]"
                  />
                  <h1 className="text-lg font-semibold">WHATSAPP</h1>
                  <p className="text-md font-light">contact on WhatsApp</p>
                </div>
              </div>
              <div className="basis-1/3 px-8 py-3 shadow-md rounded-xl cursor-pointer  hover:scale-105 transition-transform ease-out delay-100 ">
                <div className="flex items-center justify-center gap-1 flex-col">
                  <img src={gps} alt="whatsapp" className="w-[50px] h-[62px]" />
                  <h1 className="text-lg font-semibold">GPS</h1>
                  <p className="text-md font-light">look for directions</p>
                </div>
              </div>
              <div className="basis-1/3 px-8 py-3 shadow-md rounded-xl cursor-pointer  hover:scale-105 transition-transform ease-out delay-100">
                <div className="flex items-center justify-center gap-1 flex-col">
                  <img
                    src={save}
                    alt="whatsapp"
                    className="w-[50px] h-[75px]"
                  />
                  <h1 className="text-lg font-semibold">SAVE</h1>
                  <p className="text-md font-light">
                    Save the video for later use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Product;
