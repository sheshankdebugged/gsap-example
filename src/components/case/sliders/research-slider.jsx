'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResearchSlider = ({ reserchsliderImgs }) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <div className="landing-wrapper fj-container research-slider">
      <div className="landing-inner-content">
        <div className="fjslide">
          <Slider {...settings}>
            {reserchsliderImgs?.map((item, index) => (
              <div className="slide" key={index}>
                <Image src={item?.path} alt="Slide 1" height={800} width={800} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    // <div>hello</div>
  );
};

export default ResearchSlider;
