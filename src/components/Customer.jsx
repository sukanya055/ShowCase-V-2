import React from "react";

const Customer = ({ user, comment }) => {
  return (
    <div className="px-5 flex flex-col justify-center gap-2 items-center py-6 w-[278px] bg-gray-50 shadow-lg rounded-md">
      <img
        className="w-[215px] h-[198px] rounded-xl object-fill"
        src={user}
        alt="name"
      />
      <p className="text-md text-center font-[poppins] text-[#182F43]">
        {comment}
      </p>
    </div>
  );
};

export default Customer;
