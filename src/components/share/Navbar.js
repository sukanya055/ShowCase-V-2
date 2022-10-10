import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import userIcon from '../../assets/userIcon.png'
import styles from './Navbar.module.css'
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [inputValue, setInputValue] = useState('')
    const [navbar, setNavbar] = useState(false);
    const navigate=useNavigate()
    // const [first, setFirst] = useState('')

    const handleDashboard=()=>{
        navigate('/joinUs')
    }


    return (
        <nav className="w-full bg-base-100 shadow ">
            <div className="justify-between px-4 mx-auto lg:max-w-[1400px] lg:items-center lg:flex lg:px-4">
                <div>
                    <div className="flex  items-center justify-between py-3 lg:py-5 lg:block">
                        {/* logo  */}
                        <div className='flex items-center text-2xl font-bold'>
                            <img className='h-[67px] w-[154px]' src={logo} alt="logo" />
                        </div>
                        <div className="lg:hidden">
                            {/* hamburger btn  */}
                            <button
                                className="p-2 text-black rounded-lg"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* nav menu  */}
                <div className='flex items-center mr-0 '>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${navbar ? "block" : "hidden"

                            }`}
                    >
                        <ul className="items-center  justify-center space-y-8 lg:flex lg:space-x-7 lg:space-y-0 text-center">
                            <li className="text-black hover:text-indigo-200">
                                <div className=''>
                                    <span className='relative'>
                                        <input
                                            onChange={(e) => setInputValue(e.target.value)}
                                            type="text"
                                            placeholder="Search"
                                            className={`input lg:w-[220px] 2xl:w-[336px] input-bordered input-md mr-0 lg:mr-5 relative inline-block bg-[#F4F4F2] border-0 outline-none ${styles.inputPlaceholder}`}

                                        />
                                        {!inputValue && <img className='absolute top-[17%] left-[20px] xl:left-[41px]' src={search} alt="searchIcon" />}
                                    </span>
                                </div>
                            </li>
                            <li className=" xl:text-[16px] lg:text-[14px] text-[#858A89] ">
                                All Videos
                            </li>
                            <li className=" xl:text-[16px] lg:text-[14px] text-[#858A89] ">
                                Men
                            </li>
                            <li className=" xl:text-[16px] lg:text-[14px] text-[#858A89] ">
                                Women
                            </li>
                            <li className=" xl:text-[16px] lg:text-[14px] text-[#858A89] ">
                                Kids
                            </li>
                            <li className=" xl:text-[16px] lg:text-[14px] text-[#858A89] ">
                                Home And Kitchen
                            </li>
                            <li className=" xl:text-[16px] lg:text-[14px] text-[#858A89] ">
                                {/* <span>
                                    <AiOutlineUser
                                        className='text-[42px] bg-[#E5EDFF] p-1 rounded-md'
                                    />
                                </span> */}



                                <div className="dropdown dropdown-end cursor-pointer">
                                    <label tabIndex={0} /* className="btn btn-ghost rounded-btn" */>
                                        <AiOutlineUser
                                            className='text-[42px] bg-[#E5EDFF] p-1 rounded-md cursor-pointer'
                                        />
                                    </label>
                                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li><p onClick={handleDashboard}>My Account</p></li>
                                        <li><p>Create Account</p></li>
                                    </ul>
                                </div>
                            </li>
                            <li className=" xl:text-[16px] lg:text-[14px] text-[#858A89] ">
                                <div className="space-x-2 inline-block ">
                                    <div className='flex justify-between items-center text-xl'>
                                        <div className='lg:ml-[80px]'>
                                            <button type="button" class="btn xl:text-[16px] lg:text-[14px] px-[20px] xl:px-10 text-white btn-primary bg-[#3371F2] capitalize border-0 outline-none" data-bs-toggle="button" aria-pressed="false" autocomplete="off">Login
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>

                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;