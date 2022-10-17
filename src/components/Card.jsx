import React from "react";

const Card = ({ video, price, name, discount, brand }) => {
  return (
    <div className=" pb-6 rounded-lg border-[1px] border-gray-300">
      <iframe
        className="w-full rounded-t-lg"
        width="560"
        height="315"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
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
          free delaivery
        </button>
      </div>
    </div>
  );
};

export default Card;
