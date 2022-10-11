import React, { useState } from "react";
import { Layout } from "../components";
import circle from "../assets/blue_circle.png";
import girl from "../assets/girl.png";
import phone from "../assets/phone.png";
import { FaAngleLeft } from "react-icons/fa";
import { BiShow, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
const initialState = {
  name: "",
  email: "",
  password: "",
  terms: false,
};
const BussinessAccountSetup = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialState);
  };
  return (
    <Layout>
      <div className="px-8 py-11 flex flex-row h-full">
        <div className="basis-1/4">
          <img src={circle} alt="circle" />
        </div>
        <div className="basis-2/4 py-6 px-8 ">
          <div className="flex justify-between items-center">
            <h1 className="text-gray-400 font-bold flex text-lg items-center cursor-pointer">
              <FaAngleLeft />
              Back
            </h1>
            <div className="flex justify-end items-end flex-col">
              <p className="text-gray-400 test-md">STEP 01/03</p>
              <h1 className="text-gray-400 text-lg font-bold">Personal info</h1>
            </div>
          </div>
          <div className=" flex flex-col items-center  justify-center">
            <div className="px-9 py-10 w-2/3">
              <h1 className="capitalize text-center text-2xl font-semibold text-gray-900">
                Register individual account!
              </h1>
              <p className="font-normal text-md text-gray-400 capitalize">
                For purpose of industry regulation,yours details are required
              </p>

              <form
                onSubmit={handleOnSubmit}
                className="form-control flex justify-center  flex-col gap-3 mt-9  w-full max-w-xs"
              >
                <div className="w-full">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Your full name *
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    placeholder="Rahul Pradhan."
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Email address *
                    </span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    placeholder="xyz@gmail.com"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Create Password *
                    </span>
                  </label>
                  <div className="flex gap-2 justify-center items-center input  input-bordered">
                    <input
                      required
                      type={show ? "text" : "password"}
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                      className=" w-full outline-none max-w-xs"
                    />
                    {show ? (
                      <BiShow
                        className="text-2xl  text-gray-400"
                        onClick={toggle}
                      />
                    ) : (
                      <BiHide
                        className="text-2xl text-gray-400"
                        onClick={toggle}
                      />
                    )}
                  </div>
                </div>
                <label className="cursor-pointer mt-2 label">
                  <input
                    type="checkbox"
                    required
                    value={formData.terms}
                    onChange={(e) =>
                      setFormData({ ...formData, terms: !formData.terms })
                    }
                    className="checkbox  checkbox-sm checkbox-secondary"
                  />
                  <span className="label-text text-md text-gray-500 font-semibold">
                    I agree to terms & conditions
                  </span>
                </label>
                <button
                  type="submit"
                  className="text-lg text-white bg-blue-500 px-4 py-2 rounded-md  hover:bg-blue-400 transition-colors delay-100 ease-out"
                >
                  Register account
                </button>
              </form>
              <button className="btn w-full bg-white mt-4 text-black capitalize">
                <FcGoogle className="text-xl mr-2 " /> Register with Google
              </button>
            </div>
          </div>
        </div>
        <div className="basis-1/4 relative flex items-center justify-center ">
          <img
            src={phone}
            alt="phone"
            className="absolute   w-[205px] h-[456px]"
          />
          <img src={girl} alt="girl" className="absolute  left-24" />
        </div>
      </div>
    </Layout>
  );
};

export default BussinessAccountSetup;
