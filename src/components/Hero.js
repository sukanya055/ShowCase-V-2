import React from "react";

import elipse1 from "../assets/Ellipse1.png";
import elipse2 from "../assets/Ellipse 2.png";
import Slider from "react-slick";
import heroImg1 from '../assets/heroImg/Ellipse 622 (1).png'
import heroImg12 from '../assets/heroImg/Ellipse 622.png'


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate()

  const images = [
    {
      img: heroImg1
    },
    {
      img: heroImg12
    },

  ]
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <div className="hero min-h-screen p-0 my-20 lg:my-20">
        <div className="hero-content justify-between flex-col lg:flex-row-reverse items-center max-w-[2100px] p-0">

          <div className="w-full flex justify-center md:justify-end mr-16 sm:mr-36 relative">

            <div className="flex relative">

              {/* rounds shape  */}
              <div className="bg-gradient-to-r from-[#5EFCE8] to-[#736EFE] w-[280px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full"></div>
              <div className="bg-gradient-to-r from-[#5EFCE8] to-[#736EFE] w-[280px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full top-[56px] left-[70px] sm:top-[86px] sm:left-[120px] absolute"></div>

              {/* slider  */}
              <div className="w-[305px] [h-305px] sm:w-[445px] sm:h-[445px] rounded-full absolute top-[17%] lg:top-[13%]  left-[15%] p-3">
                <Slider {...settings}>
                  {
                    images?.map((img, index) => <img
                      key={index}
                      className="w-full h-full object-contain" src={img.img} alt="" />)
                  }
                </Slider>

              </div>

            </div>


          </div>
          <div className='w-full my-20 lg:my-0'>
            <div>
              <img src={elipse1} alt="" />
              <img src={elipse2} alt="" />
            </div>
            <div className='pl-5 md:pl-14'>
              <h1 className="text-[27px] md:text-[34px] lg:text-[44px] xl:text-[53px] 2xl:text-[64px] text-[#112D57] font-bold">Let’s Showcase</h1>
              <p className="py-6 text-[#5C5C5C] lg:text-[23px] xl:[26px] 2xl:text-[30px] leading-[34px] md:leading-[48px]">Bringing your product online is now easy and brezzy.You have
                something to sell , show is online.</p>

            </div>
            <div className='pl:5  md:pl-14 flex justify-center lg:justify-start gap-9'>
              <button
                onClick={() => navigate(`/products/${"product-allVideo"}`)}
                className="btn btn-primary bg-[#FF109F] rounded-full border-0 outline-none text-white px-5 sm:px-7">Shop more</button>
              <button

                className="btn btn-primary bg-[#719efd] opacity-[0.3] rounded-full border-0 outline-none text-white px-5 sm:px-7">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Hero;
