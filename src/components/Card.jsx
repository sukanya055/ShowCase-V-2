import React from "react";
import productVideo from "../assets/video/product.mp4";
const Card = ({ video, price, name, discount, brand }) => {
  return (
    <div className=" pb-6 rounded-lg border-[1px] border-b-4  shadow-sm  border-gray-300">
      <video className="rounded-t-lg h-full w-full md:w-[322px]" controls>
        <source src={productVideo} type="video/mp4" />
      </video>
      <div className="mt-3 px-4 py-3">
        <h1 className="text-md font-normal text-gray-400">{name}</h1>
        <div className="flex gap-3 items-center">
          <h1 className="text-gray-700 text-lg font-semibold">
            ₹{price - (price * discount) / 100}
          </h1>
          <h1 className="text-gray-600 text-lg font-semibold line-through ">
            ₹{price}
          </h1>
          <h1 className="text-gray-700 text-lg font-normal">{discount}% off</h1>
        </div>
        <button className=" mt-3 px-3 py-1 rounded-full bg-gray-200 capitalize text-gray-700">
          more details
        </button>
      </div>
    </div>
  );
};

export default Card;
