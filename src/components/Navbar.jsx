import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { VscThreeBars } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const token = localStorage.getItem("token");
  const [user] = useAuthState(auth);

  const handleSignOut=()=>{
    console.log('click')
    signOut(auth)
    localStorage.removeItem('token')
  }


  console.log(token);
  return (
    <div className="shadow-md md:py-2 px-6 py-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-1 md:gap-8 items-center justify-between ">
          <img src={logo} alt="logo" className="h-[57px] w-[110px]" />
          {/* Search  */}
          <div className="md:w-auto w-[130px]  bg-gray-100 py-2  rounded-2xl">
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
        <div className="lg:flex hidden  items-center justify-center gap-4">
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
        <div className="flex items-center justify-center gap-1 md:gap-5">
          <div className="bg-sky-100 p-2 rounded-lg cursor-pointer">
            <BiUser className="md:text-2xl text-xl" />
          </div>
          {token || user ? (
            <button 
            onClick={handleSignOut}
            className="py-2 hidden md:flex rounded-lg px-6 text-lg text-white bg-blue-500 hover:bg-blue-400 transition-colors delay-100 ease-out">
              Sign Out
            </button>
          ) : (
            <button className="py-2 hidden md:flex rounded-lg px-6 text-lg text-white bg-blue-500 hover:bg-blue-400 transition-colors delay-100 ease-out">
              {<Link to="/auth">Login</Link>}
            </button>
          )}

          {!isOpen && (
            <VscThreeBars
              onClick={toggle}
              className="md:hidden block text-3xl   cursor-pointer text-gray-900"
            />
          )}
        </div>
        {isOpen && (
          <div className="top-0 left-0  h-auto absolute w-full px-4 py-2 backdrop-blur-sm bg-white/95 z-40 shadow-lg ">
            <div className="flex justify-end">
              <CgClose
                onClick={toggle}
                className=" text-3xl cursor-pointer text-gray-900 "
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg flex items-center justify-center text-gray-700 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
                All Videos
              </h1>
              <h1 className="text-lg flex items-center justify-center text-gray-700 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
                Men <FiChevronDown />
              </h1>
              <h1 className="text-lg flex items-center justify-center text-gray-700 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
                Women <FiChevronDown />
              </h1>
              <h1 className="text-lg flex items-center justify-center text-gray-700 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
                kids <FiChevronDown />
              </h1>
              <h1 className="text-lg flex items-center justify-center text-gray-700 cursor-pointer hover:text-black transition-colors delay-75 ease-in-out">
                Home & Kitchen <FiChevronDown />
              </h1>
              <button className="text-lg text-white bg-blue-500 px-2 py-1 rounded-md  hover:bg-blue-400 transition-colors delay-100 ease-out">
                <Link to="/auth">Login</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
