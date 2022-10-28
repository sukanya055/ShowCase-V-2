import React, { useEffect, useState } from 'react';
import { BsGearWide, BsPlayCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import PostVideo from './modal/PostVideo';
import userImg from '../assets/user.png'

const BusinessDashboard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [openModal, setOpenModal] = useState(null)
    const [userDetails, setUserDetails] = useState({})

    const { about, address, country, name, phone, whats, profile } = userDetails || {}

    useEffect(() => {
        (async () => {

            if (cookies?.token) {

                try {
                    const { data } = await axios.get('http://localhost:5000/user/infor', {
                        headers: {
                            'Authorization': cookies?.token,
                        }
                    });
                    setUserDetails(data)
                    console.log(data)
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

    return (
        <Layout>
            <section>
                <div className='flex  flex-col md:flex-row w-full px-10 justify-center md:w-[90%] lg:w-[70%] mx-auto my-32 gap-[18px]'>
                    <div className='text-center flex justify-center w-full'>
                        <img className='w-[205px] sm:w-[305px] mx-auto lg:w-[205px] md:h-[205px] object-cover rounded-[50%] ' src={profile ? profile : userImg} alt="" />
                    </div>
                    <div className='flex mt-10 md:mt-0 w-full'>
                        <div className=' '>
                            <div className='flex gap-10 sm:gap-16 md:gap-10 w-full items-center'>
                                <h3 className='text-[17px] sm:text-[20px] md:text-[28px] font-bold '>{name}</h3>
                                <div className="dropdown dropdown-end md:dropdown-start ml-10">
                                    <label tabIndex={0} className="btn btn-ghost rounded-btn">
                                        <p>
                                            <BsGearWide
                                                className='text-[23px] cursor-pointer'
                                            />
                                        </p>
                                    </label>
                                    <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                        <li><Link to='/businessProfile/updateBusinessProfile'>Update Profile</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex gap-16 items-center text-[12px] font-bold'>
                                <div className='flex gap-2 items-center'>
                                    <p><BsPlayCircle /></p>
                                    <p>Videos</p>
                                </div>
                                <p>30</p>


                            </div>
                            <div className=' leading-7 mt-6 pr-7'>
                                <p>{about} .</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center gap-10 mb-20 '>
                    <div
                        onClick={() => {
                            if (whats !== undefined) {
                                window.open(`https://wa.me/${country}${phone}`)
                            }
                            else {
                                alert("Please login to see your profile");
                            }
                        }}
                        className='flex justify-center items-center border-solid border-gray-400 border-2 px-10 py-5 cursor-pointer rounded-lg'>
                        <p>WhatsApp</p>
                    </div>
                    <div className=' flex justify-center items-center border-solid border-gray-400 border-2 px-10 py-5 cursor-pointer rounded-lg'>
                        <p>GPS</p>
                    </div>

                    <div className='flex justify-center items-center border-solid border-gray-400 border-2 px-10 py-5 cursor-pointer rounded-lg'>
                        {/* <p>Post Video</p> */}
                        {/* <!-- The button to open modal --> */}
                        <label onClick={() => setOpenModal(true)} htmlFor="my-modal-6" className="btn modal-button">Post Video</label>
                    </div>
                </div>

                <div className='text-center '>
                    <h3 className='font-bold text-xl mb-10'>Your Videos</h3>
                    <div>

                    </div>
                </div>

            </section>
            {
                openModal && <PostVideo
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                />
            }

        </Layout>
    );
};

export default BusinessDashboard;




