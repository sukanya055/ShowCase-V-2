import React from 'react';
import circleGif2 from '../../../assets/circle2.gif'
const WorksAndQuotes = () => {


    const quotes = [
        {
            number: 1,
            title: 'Quick Quotes',
            desc: '  Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.'
        },
        {
            number: 2,
            title: 'Fast Approval',
            desc: '  Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.'
        },
        {
            number: 3,
            title: 'Easy Application',
            desc: '  Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada.'
        },
    ]


    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-[50%]'>
                        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='w-[50%] gap-[44px]'>
                        <div>
                            {
                                quotes.map(({number,title,desc}) => (
                                    <div
                                    key={number}
                                    className='mb-[44px]'
                                    >
                                        <div className='flex items-center gap-10 '>
                                            <div className='relative'>
                                                <img className='w-[108px] ' src={circleGif2} alt="" />
                                                <span
                                                    style={{
                                                        top: '50%',
                                                        left: '50%',
                                                        transform: 'translate(-50%,-50%)'
                                                    }}
                                                    className='absolute text-[#686868] text-[39px]'
                                                >{number}</span>
                                            </div>
                                            <div>
                                                <h4 className='text-[28px] text-[#182F43] font-bold'>{title}</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='mt-4 pl-4 text-[16px] text-[#182F43]'>
                                                {
                                                    desc
                                                }
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorksAndQuotes;