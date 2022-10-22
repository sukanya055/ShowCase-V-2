import React, { useState, useEffect } from "react";
import { Layout, MainProducts } from "../components";

import { productData } from "../utils/products";

import { FiFilter } from "react-icons/fi";
import SideBarProduct from "../components/SideBarProduct";
const Products = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const onClickFilter = () => {
    setIsOpenSideBar((prev) => !prev);
  };
  return (
    <Layout>
      <div className="px-8 py-5">
        <div className="">
          <p className="font-normal text-gray-700 text-md">Mens Sections</p>
          <h1 className="font-semibold text-lg">Men T-shirt -7988 items</h1>
        </div>

        <div className="flex justify-between mt-5 md:justify-end items-center">
          <label
            htmlFor="my-modal-3"
            className=" md:hidden flex items-center btn modal-button"
          >
            <FiFilter className="text-2xl   cursor-pointer text-gray-900" />
          </label>

          <select className="select  w-auto select-primary bg-gray-100  max-w-xs capitalize ">
            <option disabled selected>
              Sort By
            </option>
            <option>Recomended</option>
            <option>Price high to low</option>
            <option>Price Low to High</option>
            <option>Ratigs</option>
          </select>
        </div>

        <div className="flex flex-row h-full ">
          <div className="basis-1/4 h-full px-4 py-3 hidden md:block items-center">
            <SideBarProduct />
          </div>
          <div className="md:basis-3/4 basis-4/4 h-full">
            <MainProducts filteredData={productData} />
          </div>
        </div>
        <div className="md:hidden block absolute top-0">
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle text-xl  absolute right-2 top-2"
              >
                ✕
              </label>
              <div className="mt-8">
                <SideBarProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
