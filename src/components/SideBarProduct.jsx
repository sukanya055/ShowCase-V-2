import React, { useEffect, useState } from "react";
import { data } from "../utils/productData";
import { mensCategories } from "../utils/data";
import productVideo from "../assets/video/product.mp4";
import blackFilter from "../assets/blackFilter.png";
import yellowFilter from "../assets/YellowFilter.png";
import axios from "axios";
const SideBarProduct = ({
  selectedCollections,
  sizeNumber,
  SetSize,
  setSizeNumber,
  handleOnChangeCollections,
  content,
  setPrice,
  refetch
}) => {
  const [priceValue, setPriceValue] = useState(0);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:5000/admin/min-max-price?content=${
          content.split("-")[1]
        }`
      );
      setPriceValue(data?.data);
      setPrice(data?.data);
      console.log(data)
      setSizeNumber(data?.data?.max)
    })();
  }, [content, setPrice,setSizeNumber]);
  console.log(sizeNumber);
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-medium text-lg uppercase">Filters</p>
        <div className="flex items-center gap-1">
          <img src={yellowFilter} alt="black" className="h-8 " />
          <img src={blackFilter} alt="black" className="h-8" />
        </div>
      </div>
      
      <div className="mt-3">
        <h1 className="text-lg font-bold  ">FILTER BY PRICE</h1>
        <div className="w-[100px] h-[2px] bg-yellow-500" />
      </div>
      <div className="mt-3">
        <input
          type="range"
          min={priceValue?.min}
          max={priceValue?.max}
          value={sizeNumber}
          onChange={(e) => {
              setSizeNumber(+e.target.value);
              refetch()
            SetSize();
          }}
          className="range range-secondary range-xs"
          step="0"
        />
        <div className="w-full flex justify-between text-md font-semibold text-gray-400 px-2">
          <span>{priceValue?.min}</span>
          <span>{priceValue?.max}</span>
        </div>
        <div className="flex justify-end w-full  ">
          <buton className="btn btn-sm  bg-transparent text-red-600 mt-3">
            Clear all
          </buton>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="text-lg font-bold  ">BEST SELLER</h1>
        <div className="w-[100px] h-[2px] bg-yellow-500" />
      </div>
      {data.map((product) => (
        <div
          className="mt-5 flex flex-col items-center gap-2 w-full"
          key={product.id}
        >
          <div className=" flex flex-row gap-[2px] w-full">
            <div className="basis-1/2">
              <video height="500" className="w-full" controls>
                <source src={productVideo} type="video/mp4" />
              </video>
            </div>
            <div className="basis-1/2">
              <h1 className="text-md font-semibold text-gray-500 text-center">
                {product.title}
              </h1>
              <p className="text-lg text-center font-semibold text-yellow-500">
                ₹{product.price}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBarProduct;
