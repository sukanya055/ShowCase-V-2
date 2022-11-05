import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import { data } from "../utils/productData";
import whatsApp from "../assets/whatsapp.png";
import gps from "../assets/location.png";
import save from "../assets/save.png";
import product from "../assets/product_demo.png";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useParams } from "react-router-dom";
import "./Map";
import Map from "./Map";
import axios from "axios";
import { useQuery } from "react-query";
import { useCookies } from 'react-cookie';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Loader from "../utils/Loader";


const Product = () => {
  const [cookies,] = useCookies(['token']);
  const { id } = useParams();
  const [productData, setProductData] = useState({});
  const [userDetails, setUserDetails] = useState(null)
  console.log(id)
  const { isLoading, data, refetch } = useQuery(
    [
      "get-single-product",
      id
    ],
    () =>
      axios.get(`http://localhost:5000/admin/get-single-product/${id}`, {
        headers: {
          'Authorization': cookies?.token,
        }
      })
  );

  useEffect(() => {
    (async () => {

      if (cookies?.token) {

        try {
          const { data } = await axios.get('http://localhost:5000/user/infor', {
            headers: {
              'Authorization': cookies?.token,
            }
          });
          console.log(data)
          setUserDetails(data)
        }
        catch (err) {
          console.log(err)
        }
      }
      else {
        alert("Login please");
      }
    })();
  }, [cookies])





  const savedVideo = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/admin/save?userId=${userDetails?._id}&productId=${id}`)

      console.log(data)

    } catch (error) {

    }
  }

  if (isLoading) return <Loader />
  console.log(data)
  const { link, price, discount, category, brand, type, companyName, email,saved } = data?.data?.result[0] || {}
  const { latitude, longitude, phone, country } = data?.data?.result[0].videoOwner || {}
  return (
    <div>
      <Layout>
        <div className="lg:px-28 py-40 sm:px-8">
          <div className="flex relative items-center justify-center">


            <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[404px] lg:h-[400px]  xl:w-[604px] xl:h-[600px] rounded-[50%] bg-green-300 relative overflow-hidden">

              <video
                src={link}
                width={"100%"}
                height={"100%"}
                autoPlay
                loop={true}
                muted={true}
                controls={true}
              // className='absolute top-0 left-0 w-full h-full opacity-100'
              >
                <p>Your browser doesn't support this video</p>
              </video>
            </div>

          </div>
          <div className="shadow-md rounded-lg p-5 px-28 my-8  ">
            {/* top part */}
            <div className="flex flex-row items-center justify-between">
              <div className="basis-1/2">
                <h3 className="font-light font-roboto text-md">
                  {productData?.type}
                </h3>
                <h1 className="font-semibold text-2xl font-roboto my-2">
                  {productData?.title}
                </h1>
                <p className=" text-md font-poppins font-normal w-8/12">
                  {productData?.desc}
                </p>
              </div>
              <button className="basiz-1/2 shadow-xl hover:shadow-lg font-bold p-2 rounded-md ">
                Rs. {(price - (price * discount) / 100).toFixed(0)}  <span className="text-green-700 text-lg font-normal">
                  {discount}% off
                </span>
              </button>
            </div>
            <div className="flex flex-row place-items-stretch  justify-between gap-8 mt-12">
              <div className="basis-1/3 px-8 py-3 shadow-md rounded-xl cursor-pointer hover:scale-105 transition-transform ease-out delay-100 ">
                <div
                  onClick={() => {
                    if ((phone && country) !== undefined) {
                      window.open(`https://wa.me/${country}${phone}`)
                    }
                    else {
                      alert("Sorry we don't found any number!");
                    }
                  }}
                  className="flex items-center justify-center gap-1 flex-col">
                  <img
                    src={whatsApp}
                    alt="whatsapp"
                    className="w-[72px] h-[61px]"

                  />
                  <h1 className="text-lg font-semibold">WHATSAPP</h1>
                  <p className="text-md font-light">contact on WhatsApp</p>
                </div>
              </div>
              <label
                htmlFor="my-modal-4"
                className="basis-1/3 px-8 py-3 shadow-md rounded-xl cursor-pointer  hover:scale-105 transition-transform ease-out delay-100 "
              >
                <div className="  flex items-center justify-center gap-1 flex-col">
                  <img
                    src={gps}
                    alt="whatsapp"
                    className="w-[60px] h-[60px]"
                    onClick={gps}
                  />

                  <h1 className="text-lg font-semibold">GPS</h1>
                  <p className="text-md font-light">look for directions</p>
                </div>
              </label>
              <div className="basis-1/3 px-8 py-3 shadow-md rounded-xl cursor-pointer  hover:scale-105 transition-transform ease-out delay-100">
                <div
                  onClick={()=>savedVideo()}
                  className="flex items-center justify-center gap-1 flex-col">
                  <img
                    src={save}
                    alt="whatsapp"
                    className="w-[50px] h-[75px]"
                  />
                  <h1 className="text-lg font-semibold">SAVE</h1>
                  <p className="text-md font-light">
                   {
                    saved?.includes(userDetails?._id) ? 'You have already save ':' Save the video for later use'
                   }
                  </p>
                </div>
              </div>

            </div>
            <div>
              <div className="mt-3 px-4 py-3">
                <h4 className="text-md font-normal ">Category: {category}</h4>
                <h4 className="text-md font-normal ">Type: {type}</h4>
                <h4 className="text-md font-normal capitalize">
                  Brand: <span className="capitalize">{brand}</span>
                </h4>
                <h4 className="text-md font-normal capitalize">
                  Company: <span className="capitalize">{companyName}</span>
                </h4>
                <h4 className="text-md font-normal capitalize">
                  Email: <span className="capitalize">{email}</span>
                </h4>

              </div>
            </div>
          </div>

        </div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label className="modal-box h-full p-0   relative">
            {/* <Map productData={productData} /> */}
          </label>
        </label>
      </Layout>
    </div>
  );
};

export default Product;
