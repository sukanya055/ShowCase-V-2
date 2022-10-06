import React from "react";
import logo from "../assets/logo.png";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="shadow-md py-2 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-8 items-center justify-between ">
          <img src={logo} alt="logo" className="h-[50px] w-[110px]" />
          {/* Search  */}
          <div className="  bg-gray-100 py-2  rounded-2xl">
            <label className="input-group">
              <span className="bg-inherit">
                <BiSearchAlt className="text-gray-900" />
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="outline-none border-none bg-inherit"
              />
            </label>
          </div>
        </div>
        {/* Actions link */}
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-md text-gray-400 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
            All Videos
          </h1>
          <h1 className="text-md flex items-center gap-1 text-gray-400 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
            Men <FiChevronDown />
          </h1>
          <h1 className="text-md flex items-center gap-1 text-gray-400 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
            Women <FiChevronDown />
          </h1>
          <h1 className="text- flex items-center gap-1 text-gray-400 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
            kids <FiChevronDown />
          </h1>
          <h1 className="text-md flex items-center gap-1 text-gray-400 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
            Home & Kitchen <FiChevronDown />
          </h1>
        </div>

        {/* users */}
        <div className="flex items-center justify-center gap-5">
          <div className="bg-sky-100 p-2 rounded-lg cursor-pointer">
            <BiUser className="text-2xl" />
          </div>
          <button className="py-2 rounded-lg px-6 text-lg text-white bg-blue-500 hover:bg-blue-400 transition-colors delay-100 ease-out">
            {" "}
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
