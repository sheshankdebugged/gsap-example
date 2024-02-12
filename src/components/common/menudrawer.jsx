'use client'
import React, { useState, useEffect, useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import CardRow1 from '../sidebar/card-row-1';
import CardRow2 from '../sidebar/card-row-2';
import CardRow3 from '../sidebar/card-row-3';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLottie } from "lottie-react";
import logoFJ1 from "../../assets/images/json/logo.json";
import logoFJ2 from "../../assets/images/json/Logo_color_palette.json";
import logoFJ3 from "../../assets/images/json/Logo_pin.json";
import logoFJ4 from "../../assets/images/json/Logo_puzzle.json";
import logoFJ5 from "../../assets/images/json/Logo_trees.json";
import logoFJ6 from "../../assets/images/json/Logo_yin_yang.json";

gsap.registerPlugin(ScrollTrigger);

const MenuDrawer = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const MainWrapper = document.querySelector(".fj-main-wrapper");
    if (isMenuOpen) {
      document.body.classList.add('menu-open-body');
      MainWrapper.classList.add('fj-menu-open');
    } else {
      document.body.classList.remove('menu-open-body');
      MainWrapper.classList.remove('fj-menu-open');
    }

   
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);


  // Lottie Animation
  const [hoveredIndex, setHoveredIndex] = useState(1);

  const animations = {
    1: logoFJ1,
    2: logoFJ2,
    3: logoFJ3,
    4: logoFJ4,
    5: logoFJ5,
    6: logoFJ6,
  };

  const options = {
    animationData: animations[hoveredIndex],
    loop: false,
  };

  const { View, play, stop } = useLottie(options);

  const handleMouseEnter = () => {
    // Increment index cyclically
    const nextIndex = (hoveredIndex % 6) + 1;
    setHoveredIndex(nextIndex);
    play();
  };
  const handleMouseLeave = () => {
    // Reverse the animation on mouse leave
    play({ direction: -1 });
    play();

  };
  return (
    <>
      <div className={`menu main-menu-icon ${isMenuOpen ? "menu-open" : ""}`}  >
        <span className="menu-btn fj-a-link" onClick={toggleMenu}>
          <IoMdMenu className="menu-icon font-xl" />
        </span>
        <span className="close-btn" onClick={toggleMenu}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="main-menu-drawer fj-white">
          <header className="fj-container">
            <Link href="/" className="logo-box" onClick={toggleMenu}>

              <div
                className="logo-container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="animated-logo">{View}</div>
                <span>
                  <svg width="78" height="40" viewBox="0 0 78 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.22 0.94043H11.44V3.58043H4.38V7.26043H11.32V9.90043H4.38V16.1404H1.22V0.94043Z" fill="#FAFAFA" />
                    <path d="M16.9 16.3804C15.7 16.3804 14.8 16.0004 14.2 15.2404C13.6133 14.4671 13.32 13.4404 13.32 12.1604V5.28043H16.38V11.5004C16.38 13.3271 17.0333 14.2404 18.34 14.2404C19.6333 14.2404 20.28 13.3138 20.28 11.4604V5.28043H23.34V16.1404H20.32V14.0004C20.04 14.7204 19.62 15.3004 19.06 15.7404C18.5133 16.1671 17.7933 16.3804 16.9 16.3804Z" fill="#FAFAFA" />
                    <path d="M30.3 16.3804C28.9133 16.3804 27.7667 16.0871 26.86 15.5004C25.9667 14.9004 25.4267 14.0204 25.24 12.8604H28.32C28.4267 13.3671 28.6667 13.7338 29.04 13.9604C29.4267 14.1871 29.8867 14.3004 30.42 14.3004C31.0867 14.3004 31.5933 14.2004 31.94 14.0004C32.3 13.8004 32.48 13.5204 32.48 13.1604C32.48 12.9338 32.42 12.7471 32.3 12.6004C32.1933 12.4404 32 12.3071 31.72 12.2004C31.44 12.0804 31.0533 11.9604 30.56 11.8404L28.64 11.4204C27.5867 11.1938 26.7933 10.8338 26.26 10.3404C25.7267 9.8471 25.46 9.20043 25.46 8.40043C25.46 7.73376 25.6667 7.1471 26.08 6.64043C26.5067 6.12043 27.08 5.7271 27.8 5.46043C28.52 5.18043 29.3133 5.04043 30.18 5.04043C31.02 5.04043 31.7867 5.16043 32.48 5.40043C33.1733 5.6271 33.7533 5.97376 34.22 6.44043C34.7 6.9071 35.02 7.48043 35.18 8.16043H32.1C31.98 7.8271 31.7467 7.57376 31.4 7.40043C31.0533 7.21376 30.6533 7.12043 30.2 7.12043C29.68 7.12043 29.2467 7.21376 28.9 7.40043C28.5533 7.5871 28.38 7.84043 28.38 8.16043C28.38 8.45376 28.5133 8.68043 28.78 8.84043C29.06 8.9871 29.5067 9.1271 30.12 9.26043L32.04 9.68043C33.1867 9.93376 34.0333 10.3204 34.58 10.8404C35.1267 11.3604 35.4 12.0538 35.4 12.9204C35.4 13.6404 35.18 14.2604 34.74 14.7804C34.3 15.3004 33.6933 15.7004 32.92 15.9804C32.1467 16.2471 31.2733 16.3804 30.3 16.3804Z" fill="#FAFAFA" />
                    <path d="M37.3458 5.28043H40.4058V16.1404H37.3458V5.28043ZM37.3058 0.94043H40.4658V3.82043H37.3058V0.94043Z" fill="#FAFAFA" />
                    <path d="M48.0703 16.3804C46.9236 16.3804 45.9236 16.1404 45.0703 15.6604C44.217 15.1804 43.557 14.5138 43.0903 13.6604C42.637 12.8071 42.4103 11.8271 42.4103 10.7204C42.4103 9.61376 42.637 8.63376 43.0903 7.78043C43.557 6.91376 44.217 6.24043 45.0703 5.76043C45.9236 5.28043 46.9236 5.04043 48.0703 5.04043C49.217 5.04043 50.217 5.28043 51.0703 5.76043C51.9236 6.24043 52.577 6.91376 53.0303 7.78043C53.497 8.63376 53.7303 9.61376 53.7303 10.7204C53.7303 11.8271 53.497 12.8071 53.0303 13.6604C52.577 14.5138 51.9236 15.1804 51.0703 15.6604C50.217 16.1404 49.217 16.3804 48.0703 16.3804ZM45.5303 10.7204C45.5303 11.8404 45.7503 12.7204 46.1903 13.3604C46.6303 13.9871 47.257 14.3004 48.0703 14.3004C48.8836 14.3004 49.5103 13.9871 49.9503 13.3604C50.3903 12.7204 50.6103 11.8404 50.6103 10.7204C50.6103 9.60043 50.3903 8.72043 49.9503 8.08043C49.5103 7.44043 48.8836 7.12043 48.0703 7.12043C47.257 7.12043 46.6303 7.44043 46.1903 8.08043C45.7503 8.72043 45.5303 9.60043 45.5303 10.7204Z" fill="#FAFAFA" />
                    <path d="M55.7052 5.28043H58.7452V7.50043C59.0118 6.75376 59.4318 6.16043 60.0052 5.72043C60.5785 5.2671 61.3118 5.04043 62.2052 5.04043C63.0185 5.04043 63.6918 5.22043 64.2252 5.58043C64.7718 5.94043 65.1718 6.44043 65.4252 7.08043C65.6918 7.7071 65.8252 8.43376 65.8252 9.26043V16.1404H62.7652V9.92043C62.7652 9.00043 62.5918 8.31376 62.2452 7.86043C61.9118 7.4071 61.4185 7.18043 60.7652 7.18043C60.1252 7.18043 59.6318 7.41376 59.2852 7.88043C58.9385 8.33376 58.7652 9.0271 58.7652 9.96043V16.1404H55.7052V5.28043Z" fill="#FAFAFA" />
                    <path d="M0 32.5004H1.6C2.14667 32.5004 2.53333 32.3938 2.76 32.1804C2.98667 31.9538 3.1 31.5804 3.1 31.0604V19.9404H6.26V31.6404C6.26 32.8004 5.92667 33.6738 5.26 34.2604C4.60667 34.8471 3.62667 35.1404 2.32 35.1404H0V32.5004Z" fill="#FAFAFA" />
                    <path d="M13.9688 35.3804C12.8221 35.3804 11.8221 35.1404 10.9688 34.6604C10.1154 34.1804 9.45542 33.5138 8.98875 32.6604C8.53542 31.8071 8.30875 30.8271 8.30875 29.7204C8.30875 28.6138 8.53542 27.6338 8.98875 26.7804C9.45542 25.9138 10.1154 25.2404 10.9688 24.7604C11.8221 24.2804 12.8221 24.0404 13.9688 24.0404C15.1154 24.0404 16.1154 24.2804 16.9688 24.7604C17.8221 25.2404 18.4754 25.9138 18.9288 26.7804C19.3954 27.6338 19.6287 28.6138 19.6287 29.7204C19.6287 30.8271 19.3954 31.8071 18.9288 32.6604C18.4754 33.5138 17.8221 34.1804 16.9688 34.6604C16.1154 35.1404 15.1154 35.3804 13.9688 35.3804ZM11.4288 29.7204C11.4288 30.8404 11.6488 31.7204 12.0887 32.3604C12.5287 32.9871 13.1554 33.3004 13.9688 33.3004C14.7821 33.3004 15.4087 32.9871 15.8488 32.3604C16.2887 31.7204 16.5088 30.8404 16.5088 29.7204C16.5088 28.6004 16.2887 27.7204 15.8488 27.0804C15.4087 26.4404 14.7821 26.1204 13.9688 26.1204C13.1554 26.1204 12.5287 26.4404 12.0887 27.0804C11.6488 27.7204 11.4288 28.6004 11.4288 29.7204Z" fill="#FAFAFA" />
                    <path d="M25.0836 35.3804C23.8836 35.3804 22.9836 35.0004 22.3836 34.2404C21.7969 33.4671 21.5036 32.4404 21.5036 31.1604V24.2804H24.5636V30.5004C24.5636 32.3271 25.2169 33.2404 26.5236 33.2404C27.8169 33.2404 28.4636 32.3138 28.4636 30.4604V24.2804H31.5236V35.1404H28.5036V33.0004C28.2236 33.7204 27.8036 34.3004 27.2436 34.7404C26.6969 35.1671 25.9769 35.3804 25.0836 35.3804Z" fill="#FAFAFA" />
                    <path d="M34.1036 24.2804H37.1436V27.1204C37.3703 26.2004 37.7836 25.4604 38.3836 24.9004C38.9836 24.3271 39.7769 24.0404 40.7636 24.0404V27.0404H39.9836C39.0103 27.0404 38.2969 27.2338 37.8436 27.6204C37.3903 27.9938 37.1636 28.6271 37.1636 29.5204V35.1404H34.1036V24.2804Z" fill="#FAFAFA" />
                    <path d="M42.4044 24.2804H45.4444V26.5004C45.711 25.7538 46.131 25.1604 46.7044 24.7204C47.2777 24.2671 48.011 24.0404 48.9044 24.0404C49.7177 24.0404 50.391 24.2204 50.9244 24.5804C51.471 24.9404 51.871 25.4404 52.1244 26.0804C52.391 26.7071 52.5244 27.4338 52.5244 28.2604V35.1404H49.4644V28.9204C49.4644 28.0004 49.291 27.3138 48.9444 26.8604C48.611 26.4071 48.1177 26.1804 47.4644 26.1804C46.8244 26.1804 46.331 26.4138 45.9844 26.8804C45.6377 27.3338 45.4644 28.0271 45.4644 28.9604V35.1404H42.4044V24.2804Z" fill="#FAFAFA" />
                    <path d="M59.9225 35.3804C58.8158 35.3804 57.8425 35.1404 57.0025 34.6604C56.1758 34.1804 55.5358 33.5138 55.0825 32.6604C54.6292 31.7938 54.4025 30.8071 54.4025 29.7004C54.4025 28.5938 54.6292 27.6138 55.0825 26.7604C55.5492 25.9071 56.2025 25.2404 57.0425 24.7604C57.8825 24.2804 58.8425 24.0404 59.9225 24.0404C61.0292 24.0404 61.9958 24.2804 62.8225 24.7604C63.6492 25.2271 64.2825 25.8938 64.7225 26.7604C65.1758 27.6271 65.4025 28.6271 65.4025 29.7604C65.4025 30.0271 65.3825 30.3138 65.3425 30.6204H57.5225C57.6292 31.5004 57.8958 32.1671 58.3225 32.6204C58.7492 33.0738 59.2892 33.3004 59.9425 33.3004C60.5025 33.3004 60.9492 33.1871 61.2825 32.9604C61.6158 32.7338 61.8825 32.3871 62.0825 31.9204H65.1625C64.8025 33.0538 64.1692 33.9138 63.2625 34.5004C62.3558 35.0871 61.2425 35.3804 59.9225 35.3804ZM62.2825 28.5804C62.2025 27.8204 61.9492 27.2204 61.5225 26.7804C61.0958 26.3404 60.5625 26.1204 59.9225 26.1204C59.2958 26.1204 58.7692 26.3271 58.3425 26.7404C57.9292 27.1404 57.6625 27.7538 57.5425 28.5804H62.2825Z" fill="#FAFAFA" />
                    <path d="M71.7691 34.0204H69.1891L65.9891 24.2804H69.0691L71.9291 33.4004L74.5291 24.2804H77.7491L73.4691 39.0604H70.3291L71.7691 34.0204Z" fill="#FAFAFA" />
                  </svg>

                </span>
              </div>
            </Link>
          </header>
          <div className=" grid-container design-services">
            <CardRow1 closeMenu={closeMenu} />
            <CardRow2 closeMenu={closeMenu} />
            <CardRow3 closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDrawer;
