'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DesignSysSlider = ({ designSysSliderImgs}) => {
  // console.log('minchalnngeslider>>>>', ministrySliderImgs)
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "200px",
  };

  return (
    <div className="landing-wrapper fj-container full-slider">
      <div className="landing-inner-content">
        <div className="fjslide">
        <Slider {...settings}>
            {designSysSliderImgs?.map((item, index) => (
                 <div className="slide" key={index}>
                 <Image src={item.path} alt="Slide 1"  height={100} width={900}/>
               </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    // <div>hello</div>
  );
};

export default DesignSysSlider;
