import React, { useEffect } from "react";
// import { productData } from "../utils/products";
import NewStoreCard from "./NewStoreCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import axios from "axios";
import { useState } from "react";
const Stores = () => {
  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  };
  const [productData, setProductData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/admin/get-latest-video`
        );
        setProductData(data?.data);
        
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  
  return (
    <div className="my-14">
      <h1 className="md:text-4xl text-xl text-center font-bold  text-[#112D57] mb-14 font-[poppins] ">
        New videos on Showcase
      </h1>
      <div className="flex w-auto justify-center flex-wrap gap-10 items-center overflow-hidden px-5">
        {productData.map((data) => (
          <NewStoreCard key={data._id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
