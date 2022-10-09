import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import profileImg from '../../assets/images/profile.png'
import styles from './NormalProfile.module.css'
const NormalProfile = () => {
    return (
        <>
            <div className='my-20'>
                <div
                    className={`w-full lg:w-[830px]  mx-auto bg-[#FAFAFA] px-4 md:px-16 lg:px-20 py-20 rounded-lg ${styles.normalProfileBoxShadow}`}
                >
                    <button
                        className='flex gap-2 items-center text-[#858A89] text-[15px] md:text-[20px] '
                    ><BsChevronLeft /> Back</button>
                    <div className='flex items-center gap-2 mt-12'>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-2" className="radio radio-primary" />
                            <label className='text-[#1B1C21] text-[14px] md:text-[16px] font-bold' htmlFor="">Profile</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-2" className="radio radio-primary" />
                            <label className='text-[#1B1C21] text-[14px] md:text-[16px] font-bold' htmlFor="">Change Password</label>
                        </div>
                    </div>
                    <div className='py-10 flex justify-center '>
                        <div>
                            <div className='w-[140px] h-[140px] md:w-[154px] md:h-[154px] rounded-[50%] mx-auto' >
                                <img className='w-full h-full object-cover' src={profileImg} alt="" />
                            </div>
                            <div className='text-center'>
                                <input
                                    type="file"
                                    id='img'
                                    className='hidden'
                                />
                                <label
                                    className='btn bg-[#858A89] px-[26px] md:px-[36px] mt-[14px] text-white font-bold text-[14px] md:text-[16px] rounded-full '
                                    htmlFor="img"
                                >Add pic</label>
                                <p className='mt-5 text-[#858A89] text-[14px] md:text-[16px] '>People visiting your profile will see the following info</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className='w-full lg:w-[80%] mx-auto'>
                            <div className='w-full'>
                                <input
                                    type="text"
                                    placeholder="User name"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div className='w-full  mt-10'>
                                <label
                                    className='block text-[#858A89] font-bold mb-4 text-[14px] md:text-[16px]'
                                    htmlFor="">About Me</label>
                                <textarea
                                    className="textarea textarea-bordered w-full min-h-[165px]"
                                    placeholder="Bio"
                                ></textarea>
                            </div>
                            <div className='flex gap-4 justify-center mt-[64px] flex-col md:flex-row'>
                                <p className='border-2 border-[#CED0D0] px-4 py-2 text-[#858A89] border-solid cursor-pointer text-center  rounded-md text-[14px] md:text-[16px]'>Temporarily disable my account</p>
                                <p className='border-2 border-[#CED0D0] px-4 py-2 text-[#858A89] border-solid cursor-pointer text-center rounded-md text-[14px] md:text-[16px]'>Delete my account</p>
                            </div>
                            <div className='flex justify-center mt-10'>
                                <button
                                    className='bg-[#3371F2] text-white px-8  md:px-10 py-3 rounded-xl text-[14px] md:text-[16px]'
                                    type='submit' >Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NormalProfile;