import React, { useEffect } from 'react';
import { BsGearWide, BsPlayCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Layout } from '../components';
import { useCookies } from 'react-cookie';
import axios from 'axios';
const BusinessDashboard = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    console.log(cookies?.token)
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
                        <img className='w-[205px] sm:w-[305px] mx-auto lg:w-[205px] md:h-[205px] object-cover rounded-[50%] bg-gray-400' src="https://www.jigsawacademy.com/wp-content/themes/jigsaw-new/assets/images/boy-img-removebg-preview.webp" alt="" />
                    </div>
                    <div className='flex mt-10 md:mt-0'>
                        <div className=' '>
                            <div className='flex gap-10 sm:gap-16 md:gap-32 w-full items-center'>
                                <h3 className='text-[17px] sm:text-[20px] md:text-[28px] font-bold '>Candes Perreira</h3>
                                <div className="dropdown dropdown-end md:dropdown-start ml-10">
                                    <label tabIndex={0} className="btn btn-ghost rounded-btn"><p><BsGearWide
                                        className='text-[23px] cursor-pointer'
                                    /></p></label>
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
                            <div className=' leading-7 mt-6 md:w-[50%] pr-3'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptates quibusdam debitis! Est ipsam nulla, reiciendis amet explicabo illum maxime voluptates. Natus sed doloremque eligendi reiciendis veniam repellendus</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex justify-center gap-10 mb-20'> 
                    <div className=' border-solid border-gray-400 border-2 px-10 py-5 cursor-pointer'>
                        <p>WhatsApp</p>
                    </div>
                    <div className=' border-solid border-gray-400 border-2 px-10 py-5 cursor-pointer'>
                        <p>GPS</p>
                    </div>
                    
                </div>


                <div className='text-center '>
                    <h3 className='font-bold text-xl mb-10'>Your Videos</h3>
                    <div>

                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default BusinessDashboard;




