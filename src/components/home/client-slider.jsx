"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideImg1 from "../../assets/images/client-slide-1.png";
import Link from "next/link";
import AnchorDarkBtn from '../common/anchor-dark-btn';
import AES from "crypto-js/aes";
const ClientSlider = ({ caseStudySlides}) => {
  
  // console.log('caseStudySlides????', caseStudySlides)
 const landingWrapperRef = useRef(null);
 const landingInnerContentRef = useRef(null);
  const sliderRef = useRef(null); 
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 2.1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1728,
        settings: {
          slidesToShow: 2.1,
      slidesToScroll: 2.1,
      intialSlide:0,
          centerMode: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1.4,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1.2,
          centerMode: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1.1,
          centerMode: false,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },

    ],
  };
  const handleTitle = (title) => {
    const titleArr = title.split(" ").join("-");
    return titleArr;
  };

  // Encrypt Id to hashed Id
  const handleCaseStudyId = (Id) => {
    const idString = Id.toString();
    const ciphertext = AES.encrypt(idString, "secretPassphrase");
    return encodeURIComponent(ciphertext.toString());
  };

  const getImageUrl = (image)=> {
    const parseImg = JSON.parse(image);
    // console.log('parseImg', parseImg)
    return parseImg?.link
  }
  const handleSlideClick = (item) => {
    const url = `case-study/${handleTitle(item.title)}_${item.id}`;
    window.location.href = url;
  };

  return (
    <div className="landing-wrapper fj-container fj-visible"  >
    {/* Your JSX content */}
    <div className="landing-inner-content">
      <div className="fjslide">
      <Slider {...settings} ref={sliderRef}>
      {caseStudySlides && caseStudySlides.length > 0 && caseStudySlides.map((item) => (
   <div className={`fj-slide-content shape-slide slide-${handleTitle(item.title)} ${item.isTransparent ? 'transparent-slide' : ''}`} key={item.id} ref={landingWrapperRef} onClick={() => handleSlideClick(item)}>

        <div className='card-arrow'>
        <Link href={`case-study/${handleTitle(item.title)}_${item.id}`}  className="fj-anchor-circle">
            <span className="fj-anchor-style fj-anchor-style-2 dark-anchor ">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" fill="#2D2D2D" />
                <rect x="0.75" y="35.25" width="34.5" height="34.5" rx="17.25" transform="rotate(-90 0.75 35.25)" stroke="#2D2D2D" strokeWidth="1.5" />
                <path d="M14.6436 21.4419L21.2433 14.8423M21.2433 14.8423L14.6436 14.8422M21.2433 14.8423L21.2432 21.4419" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </span>
          </Link>
        </div>
        <div>
   
          <div className="fj-relative slide-data">
          <div className="fj-card">
              <div className='fj-inline fj-align-start'>
                <div className="left">
                  <p className="fj-text-sm-md fj-uppercase">
                    Israeli Ministry of Health
                  </p>
                  <p className="fj-textlg-md">{item.title}</p>
                </div>
                <div>
                  <button className="fj-btn-outline" type="button">
                    <Link className="fj-text-sm fj-decoration-none fj-dark link" href={`case-study/${handleTitle(item.title)}_${item.id}`}>Design &amp; Experience</Link>
                  </button>
                </div>
              </div>

            </div>
     
            <div className="fj-slide" style={{ backgroundImage: `url(${getImageUrl(item.thumbnailImg)})`}} ref={landingInnerContentRef}></div>
          </div>
    
        </div>
       
       

      </div>
      ))}
    </Slider>
      </div>
   
    </div>
  </div>
   
  );
};

export default ClientSlider;
