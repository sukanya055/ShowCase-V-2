import React from 'react';
import { BsGearWide, BsPlayCircle } from 'react-icons/bs';
import { Layout } from '../components';

const NormalDashboard = () => {
    return (
        <Layout>
            <section>
                <div className='flex  flex-col md:flex-row w-full px-10 justify-center md:w-[90%] lg:w-[70%] mx-auto my-32 gap-[18px]'>
                    <div className='text-center flex justify-center w-full'>
                        <img className='w-[205px] sm:w-[305px] mx-auto md:h-[205px] object-cover rounded-[50%] bg-gray-400' src="https://www.jigsawacademy.com/wp-content/themes/jigsaw-new/assets/images/boy-img-removebg-preview.webp" alt="" />
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
                                        <li><a>Update Profile</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className='flex gap-16 items-center text-[12px] font-bold'>
                                <div className='flex gap-2 items-center'>
                                    <p><BsPlayCircle /></p>
                                    <p>Saved Videos</p>
                                </div>
                                <p>30</p>


                            </div>
                            <div className=' leading-7 mt-6 md:w-[50%] pr-3'>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam voluptates quibusdam debitis! Est ipsam nulla, reiciendis amet explicabo illum maxime voluptates. Natus sed doloremque eligendi reiciendis veniam repellendus, optio consequuntur assumenda nulla ad amet ex quisquam repellat, adipisci rerum tempore!</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default NormalDashboard;




