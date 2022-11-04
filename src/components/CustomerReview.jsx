import React from "react";
import Customer from "./Customer";

const data = [
  {
    id: 1,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    user: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 2,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    user: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 3,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    user: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 4,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    user: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
  {
    id: 5,
    comment:
      "Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.",
    user: "https://wallpapercave.com/wp/wp5741281.jpg",
  },
];

const CustomerReview = () => {
  return (
    <div className="px-8 mt-5">
      <h1 className="md:text-4xl text-xl text-center font-bold  text-[#112D57] mb-14 font-[poppins] ">
        Review of our customer
      </h1>
      <div className="flex flex-wrap md:gap-8 gap-5 items-center justify-center">
        {data.map((item) => (
          <Customer key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
