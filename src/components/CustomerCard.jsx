import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const images = [
  {
    img: "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000",
    name: "Jens Bracker",
    desc: "eact Hook useEffect has a missing dependency: 'setLoginError'. Either include it or remove the dependency array. If 'setLoginError' changes too often, find the parent component that defines it and wrap that definition in useCallback",
  },
  {
    img: "https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg",
    name: "Rahul Pradhan",
    desc: "eact Hook useEffect has a missing dependency: 'setLoginError'. Either include it or remove the dependency array. If 'setLoginError' changes too often, find the parent component that defines it and wrap that definition in useCallback",
  },
  {
    img: "https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4=",
    name: "Binita Swain",
    desc: "eact Hook useEffect   Either include it or remove the dependency array. If 'setLoginError' changes too often, find the parent component that defines it and wrap that definition in useCallback",
  },
  {
    img: "https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg",
    name: "Binita Swain",
    desc: "eact Hook useEffect has  include it or remove the dependency array. If 'setLoginError' changes too often, find the parent component that defines it and wrap that definition in useCallback",
  },
];

const CustomerCard = () => {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <div className="flex w-full items-center flex-col justify-center">
      <div className="w-[900px]">
        <AliceCarousel
          mouseTracking
          autoPlay
          className="  "
          autoPlayInterval="3000"
        >
          {images.slice(0, 4).map((item, i) => (
            <div className="flex flex-col items-center justify-center">
              <div className="w-full py-9 items-center  flex justify-center">
                <img
                  key={i}
                  className="w-[200px] rounded-full h-[200px] object-cover"
                  src={item.img}
                  alt="profileImg"
                  onDragStart={handleDragStart}
                />
              </div>
              <div className="flex w-[600px] flex-col justify-center gap-2 items-center">
                <h1 className="text-lg font-semibold text-center text-gray-500">
                  " {item.desc} "
                </h1>
                <p className="text-lg font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-lg font-semibold text-gray-500">
                  FullStack developer
                </p>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default CustomerCard;
