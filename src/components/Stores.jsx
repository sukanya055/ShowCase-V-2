import React from "react";
import { productData } from "../utils/products";
import NewStoreCard from "./NewStoreCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const Stores = () => {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };
  return (
    <div className="my-14">
      <h1 className="md:text-4xl text-xl text-center font-bold  text-[#112D57] mb-14 font-[poppins] ">
        New stores on Showcase
      </h1>
      <div className="flex w-auto justify-center flex-wrap gap-5 items-center overflow-hidden">
        {productData.map((data) => (
          <NewStoreCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
