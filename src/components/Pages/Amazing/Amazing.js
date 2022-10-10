import React from 'react';
import video from '../../../video/30-second-explainer-videos-ytshorts.savetube.me.mp4'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Amazing = () => {
  
    return (
        <>
            <div className="hero min-h-screen overflow-x-hidden mt-28 lg:mt-0">
                <div className="hero-content max-w-[1400px] justify-between flex-col lg:flex-row-reverse p-2 md:p-4">
                    <div
                        className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[504px] lg:h-[500px]  xl:w-[604px] xl:h-[600px] rounded-[50%] bg-green-300 relative overflow-hidden'>
                        <div
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%,-50%)'
                            }}
                            className='z-10 absolute w-[90%] flex justify-between items-center text-white'>
                            <span>
                                <BsChevronLeft
                                    className='text-5xl'
                                />
                            </span>
                            <span>
                                <BsChevronRight
                                    className='text-5xl'
                                />
                            </span>
                        </div>
                        <video
                            src={video}
                            width={'100%'}
                            height={'100%'}
                            autoPlay
                            loop={true}
                            muted={true}
                        // className='absolute top-0 left-0 w-full h-full opacity-100'

                        >
                            <p>Your browser doesn't support this video</p>
                        </video>
                    </div>
                    <div className='lg:w-[60%] w-full pr-10 mt-10 lg:mt-0'>
                        <div className=' pl-4 md:pl-12 mt-10 '>
                            <h1 className="text-[27px] sm:text-[30px] lg:text-[44px] xl:text-[53px] 2xl:text-[64px] text-[#112D57] font-bold">An Amazing Journey</h1>
                            <p className="py-6 text-[#5C5C5C] lg:text-[23px] xl:[26px] 2xl:text-[30px] leading-[34px] md:leading-[48px] lg:pr-52">
                                We design and develop world-class websites and applications, design better and spend less time without restricting creative freedom.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Amazing;