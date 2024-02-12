"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../../assets/images/avatar.png";

const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "100px",
        vertical: false,
        responsive: [
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              centerMode: true,
              centerPadding: "0px",
            },
          },
          
        ],
      };
      

  return (
    <div className="fjslide testimonial-slider">
   <Slider {...settings} >
       
      <div className="slide">
        <div className="frame1 fj-inline">
            <Image src={avatar} alt='avatar'/>
            <div>
            <h2 className="fj-sub-h2 fj-dark">Sahar Ben Ari</h2>
            <h6 className="fj-text-r fj-dark">CMO / Purple</h6>
            </div>
           
        </div>
        <p className="fj-textlg-md fj-dark quote">
            “Professionals in their craft! Deep understanding of our users and always insistent on the small details.. that which differentiate a good experience from an amazing one.”
            </p>
      </div>
      <div className="slide">
        <div className="frame1 fj-inline">
            <Image src={avatar} alt='avatar'/>
            <div>
            <h2 className="fj-sub-h2 fj-dark">Sahar Ben Ari</h2>
            <h6 className="fj-text-r fj-dark">CMO / Purple</h6>
            </div>
           
        </div>
        <p className="fj-textlg-md fj-dark quote">
            “Professionals in their craft! Deep understanding of our users and always insistent on the small details.. that which differentiate a good experience from an amazing one.”
            </p>
      </div>
      <div className="slide">
        <div className="frame1 fj-inline">
            <Image src={avatar} alt='avatar'/>
            <div>
            <h2 className="fj-sub-h2 fj-dark">Sahar Ben Ari</h2>
            <h6 className="fj-text-r fj-dark">CMO / Purple</h6>
            </div>
           
        </div>
        <p className="fj-textlg-md fj-dark quote">
            “Professionals in their craft! Deep understanding of our users and always insistent on the small details.. that which differentiate a good experience from an amazing one.”
            </p>
      </div>  <div className="slide">
        <div className="frame1 fj-inline">
            <Image src={avatar} alt='avatar'/>
            <div>
            <h2 className="fj-sub-h2 fj-dark">Sahar Ben Ari</h2>
            <h6 className="fj-text-r fj-dark">CMO / Purple</h6>
            </div>
           
        </div>
        <p className="fj-textlg-md fj-dark quote">
            “Professionals in their craft! Deep understanding of our users and always insistent on the small details.. that which differentiate a good experience from an amazing one.”
            </p>
      </div>
    </Slider>
    </div>
  );
};

export default TestimonialsSlider;
