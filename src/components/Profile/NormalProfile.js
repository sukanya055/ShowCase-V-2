import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import profileImg from '../../assets/images/profile.png'

const NormalProfile = () => {
    return (
        <>
            <div>
                <div className='w-[70%] mx-auto'>
                    <button
                        className='flex gap-2 items-center text-[#858A89] text-[20px] '
                    ><BsChevronLeft /> Back</button>
                    <div className='flex items-center gap-2 mt-12'>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-2" className="radio radio-primary" />
                            <label className='text-[#1B1C21] text-[16px] font-bold' htmlFor="">Profile</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="radio-2" className="radio radio-primary" />
                            <label className='text-[#1B1C21] text-[16px] font-bold' htmlFor="">Change Password</label>
                        </div>
                    </div>
                    <div className='py-10 flex justify-center'>
                        <div>
                            <div className='w-[154px] h-[154px] rounded-[50%] mx-auto' >
                                <img className='w-full h-full object-cover' src={profileImg} alt="" />
                            </div>
                            <div className='text-center'>
                                <input
                                    type="file"
                                    id='img'
                                    className='hidden'
                                />
                                <label
                                    className='btn bg-[#858A89] px-[36px] mt-[14px] text-white font-bold text-[16px] rounded-full'
                                    htmlFor="img"
                                >Add pic</label>
                                <p className='mt-5 text-[#858A89] text-[16px] '>People visiting your profile will see the following info</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NormalProfile;