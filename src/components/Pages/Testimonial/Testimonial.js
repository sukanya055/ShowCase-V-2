import React, { useState } from 'react';
import Slider from "react-slick";
import ReviewCard from './ReviewCard';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const [num, setNum] = useState(0)

    const reviews = [
        {
            name: "Chris",
            desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint vitae ducimus quod quos eligendi! Ea quia voluptatum enim alias id aperiam officiis exercitationem neque pariatur quo! Quaerat, illum nemo!'
        },
        {
            name: "Hemsworth",
            desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint vitae ducimus quod quos eligendi! Ea quia voluptatum enim alias id aperiam officiis exercitationem neque pariatur quo! Quaerat, illum nemo!'
        },
        {
            name: "Steve",
            desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint vitae ducimus quod quos eligendi! Ea quia voluptatum enim alias id aperiam officiis exercitationem neque pariatur quo! Quaerat, illum nemo!'
        },
        {
            name: "Tony",
            desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint vitae ducimus quod quos eligendi! Ea quia voluptatum enim alias id aperiam officiis exercitationem neque pariatur quo! Quaerat, illum nemo!'
        },
        {
            name: "Tom Cruise",
            desc: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint vitae ducimus quod quos eligendi! Ea quia voluptatum enim alias id aperiam officiis exercitationem neque pariatur quo! Quaerat, illum nemo!'
        },
    ]



    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        // slidesToScroll: 1,
        arrows:false,
        beforeChange: (current, next) => setNum(next),
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className='mt-20 mb-[120px] py-[60px] overflow-x-hidden'>
            <div>
                <div className='text-center'>
                    <h1 className='md:text-4xl text-2xl font-oleo text-center '><span className='relative room-title1 font-bold text-[#112D57] text-[23px] md:text-[28px] lg:text-[37px] xl:text-[50px]' >Review of our customer</span></h1>

                </div>
                <div className='mt-[160px] py-20'>
                    <div className=''>
                        <Slider {...settings}>
                            {
                                reviews.map((review, index) => <ReviewCard
                                    key={review._id}
                                    index={index}
                                    num={num}
                                    review={review}
                                />)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;