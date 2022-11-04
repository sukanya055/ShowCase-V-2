import React from "react";
import productVideo from "../assets/video/product.mp4";
const NewStoreCard = ({ video, name }) => {
  return (
    <div className="flex flex-col justify-start w-[250px]  bg-gray-50 shadow-md pb-5">
      <video className="w-full h-full" controls src={productVideo} />
      <h1 className=" px-2 mt-2 font-[poppins] text-md font-normal truncate ">
        {name}
      </h1>
    </div>
  );
};

export default NewStoreCard;
