import React from "react";
import userImg from "../assets/user.png";
const Customer = ({ userId, comment,review }) => {
  return (
    <div className="px-5 flex flex-col justify-center gap-2 items-center py-6 w-[278px] bg-gray-50 shadow-lg rounded-md">
      <img
        className="w-[215px] h-[198px] rounded-xl object-fill"
        src={userId?.profile ? userId?.profile:userImg}
        alt="name"
      />
      <p className="text-md text-center font-[poppins] text-[#182F43]">
        {review}
      </p>
    </div>
  );
};

export default Customer;
