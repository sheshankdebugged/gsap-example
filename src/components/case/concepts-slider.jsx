"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ConceptsSlider = ({ conceptIdeationImgs }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };

  return (
    <div className="fjslide fj-inner">
      <Slider {...settings} style={{ outerHeight: '100px' }}>
      {conceptIdeationImgs && conceptIdeationImgs.length > 0 && conceptIdeationImgs?.map((item) => (
        <div className="fj-concept-slide" key={item.id}>
          <Image className="fj-w-full fj-contain" src={item.path} width={1615} height={890} alt="concept-slide-1" />
        </div>
      ))}
      {/* <div className="fj-concept-slide">
        <Image className="fj-w-full fj-contain" src={conceptslide2} alt="concept-slide-2"/>
      </div>
      <div className="fj-concept-slide">
        <Image className="fj-w-full fj-contain" src={conceptslide3} alt="concept-slide-3"/>
      </div> */}

    </Slider>
    
    </div>
  
  );
};

export default ConceptsSlider;
