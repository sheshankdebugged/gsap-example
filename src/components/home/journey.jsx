'use client'
import React, { useEffect, useRef, useState } from 'react';
const { gsap } = require("gsap");
  
const { ScrollTrigger } = require("gsap/ScrollTrigger");
const { ScrollToPlugin } = require("gsap/ScrollToPlugin");

/* The following plugins are Club GSAP perks */
const { ScrollSmoother } = require("gsap/ScrollSmoother");
const { SplitText } = require("gsap/SplitText");
import Link from 'next/link';
import SelectedItinerariesAnimation from '../home/selected-itineraries-ani';
import Services from '../home/services'
import JourneyAnimation from '../common/journey-animation';
import ContactUsLeads from '../contactUsleads/contactUsLeads';
// import timeline from 'gsap/TextPlugin'
gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);

const OurJourney = () => {
  const [showGetinTouch, setGetInTouch] = useState(false);
 const sequence = gsap.timeline();
  const introTitleRef3 = useRef(null);
  const introTitleRef4 = useRef(null);
  useEffect(() => {
    // ScrollTrigger.saveStyles(".intro-title-3"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle3 = introTitleRef3.current;
    const splitText = new SplitText(introTitle3, { type: "lines", linesClass: "intro-title-3" });
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle3,
        start: "top 60%",
        end: "top 100%", // Adjust the end position based on your needs
        once: true, 
        markers: false,
      },
    });

    tl.from(splitText.lines, {
      opacity: 0,
      y: 200,
      x: 0,
      stagger: .1,
      duration: .4,
      ease: "power3.out",
    });

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-4"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle4 = introTitleRef4.current;
    const splitText = new SplitText(introTitle4, { type: "lines", linesClass: "intro-title-4" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle4,
        start: "top 60%",
        end: "top 100%", // Adjust the end position based on your needs
        once: true, 
        markers: false,
      },
    });

    tl.from(splitText.lines, {
   opacity: 0,
     y: 200,
     x: 0,
     stagger: .1,
     duration: .4,
     ease: "power3.out",
    });

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);

  const introTextRef2 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-text-2"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introText2 = introTextRef2.current;
    const splitText = new SplitText(introText2, { type: "lines", linesClass: "intro-text-2" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText2,
        start: "top 60%",
        end: "top 100%", // Adjust the end position based on your needs
        once: true, 
        markers: false,
      },
    });

    tl.from(splitText.lines, {
      opacity: 0,
      y: 200,
      x: 0,
      stagger: .1,
      duration: .4,
      ease: "power3.out",
    });

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill();
      splitText.revert();
    };
  }, []);
  // const wrapRef = useRef(null);

  // useEffect(() => {
  //   const wrapElement = wrapRef.current;
  //   wrapElement.style.transition = '.6s ease';
  //   gsap.to(wrapElement, {
  //     backgroundColor: gsap.getProperty('html', '--primary-dark'),
  //     scrollTrigger: {
  //       trigger: '.journey-section',
  //       scrub: true,
  //       end: 'bottom bottom',
  //       // markers: true,
  //       onUpdate: ({ progress, direction }) => {
  //         // Change the background color based on scroll position
  //         const bgColor = progress > 0.07 ? gsap.getProperty('html', '--primary-dark') : gsap.getProperty('html', '--light-color');
  
  //         // Check if scroll is near the end
  //         const isNearEnd = direction === 1 && progress > 1;
  
  //         // If near the end, transition to white
  //         if (isNearEnd) {
  //           wrapElement.style.transition = 'background-color .6s ease';
  //           wrapElement.style.backgroundColor = gsap.getProperty('html', '--light-color');
  //         } else {
  //           wrapElement.style.transition = '.6s ease';
  //           wrapElement.style.backgroundColor = bgColor;
  //         }
  
  //         // Add or remove a className based on the condition
  //         const isDarkColor = bgColor === gsap.getProperty('html', '--primary-dark');
  //         if (isDarkColor) {
  //           wrapElement.classList.add('journey-dark');
  //         } else {
  //           wrapElement.classList.remove('journey-dark');
  //         }
  //       },
  //     },
  //   });
  // }, []);
  
  const mainPinSectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const mainPinSection = mainPinSectionRef.current;
    const cardsSection = cardsRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainPinSection,
        start: 'top 30%',
        end: () => `+=${0.7 * cardsSection.clientHeight}`, // Adjust the factor (0.8) as needed
        // Adjust as needed
        pin: true,
        scrub: true,
        // markers: true, // Add markers for debugging
      },
    });

    // Additional animations if needed
    // tl.to(mainPinSection, { opacity: 0, duration: 0.5 });

    // Cleanup function for ScrollTrigger
    return () => {
      tl.kill(); // Kill the timeline to prevent memory leaks
    };
  }, []);
  useEffect(() => {
    gsap.from('.journey-section .marquee-gsap', {
      xPercent: 12,
      duration: 2,
    });
    gsap.to('.journey-section .marquee-gsap', {
      xPercent: -55,
      scrollTrigger: {
        trigger: '.journey-section .marquee-container',
        start: 'top 80%',
        end: 'top 1%',
        scrub: 6,
        duration: 2,
        // markers: true
      },
    });
  }, []);
  // useEffect(() => {
  //   const marqueeTimeline = gsap.timeline({
  //     stagger: 10, // Adjust the stagger value as needed
  //   });
  
  //   // Initial position
  //   marqueeTimeline.from('.journey-section .marquee-gsap', {
  //     xPercent: 6.6,
  //     duration: 2,
  //   });
  
  //   // Transition animation
  //   marqueeTimeline.to('.journey-section .marquee-gsap', {
  //     xPercent: -105,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: '.journey-section .marquee-container',
  //       start: 'top 60%',
  //       end: '150% 30%',
  //       scrub: true,
   
  //       // markers: true
  //     },
  //   });
  
  //   // Cleanup function
  //   return () => {
  //     marqueeTimeline.kill(); // Kill the timeline to prevent memory leaks
  //   };
  // }, []);

  // Handle Get In touch Modal
  const handleGetIntouch = () => setGetInTouch(!showGetinTouch)
  
  return (
    <>
    <div className='wrap ' >
    <section className='journey-section'>
        <div className="marquee-container ">
          <h1 className="fj-h0 fj-dark  marquee-gsap zoom-text fj-pt-120" >
            Creativity needs freedom. Quality needs patience.
          </h1>
        </div>
        <div className=' fj-container fj-y-120'>
          <div className='fj-inline fj-container2'>
            <div className='left-text-column client-journeys-title'>
              <div ref={introTitleRef3}>
                <h3 className='fj-h3 intro-title-3 fj-w-0'>
                  Our <br/> Journey
                </h3>
              </div>
              <div className='fj-btn-text journey-anchor-btn-outter' type='button'>
                <Link href="/our-story" className="fj-link1 link fj-anchor-circle journey-anchor-btn">
                  <span>Get to know us</span>
                  <span className="fj-anchor-style">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0514 21.9498L21.9509 12.0503M21.9509 12.0503L12.0513 12.0503M21.9509 12.0503L21.9508 21.9498" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                </Link>
              </div>
            </div>
            <div ref={introTextRef2} className='journey-des'>
            <p className='fj-text-r intro-text-2'>We are a highly curious, women-run, digital design agency that doesn&apos;t take shortcuts.</p>
            <p className='fj-text-r intro-text-2'>
            We believe in the positive power of design, and are passionate beyond reason about digital products and user experiences.</p>
            <p className='fj-text-r intro-text-2 fj-mt-25'>
            We might be anywhere in the world right now. But don&apos;t worry, we&apos;re here for you and ready to embark on a great journey.</p>
            </div>
            
          </div>
          <div className='fj-text-center home-ani-2 home-ani-1 journey-ani-div'>
            <JourneyAnimation/>
          </div>
          <div className='dark-touch'>
            
          </div>
        </div>
         <div className=' fj-container journey-video-start '>
          <div className='fj-y-120'>
          <div className=' selected-intineraries selected-intineraries1 '>
          <div className='main-pin-section fj-pl-123  desktop-view' ref={mainPinSectionRef}>
            <h3 className='fj-h3 intro-title-4' ref={introTitleRef4} >
              Selected<br /> Itineraries
            </h3>
            <div className='home-ani-2 home-ani-1 home-ani-4 '>
              <SelectedItinerariesAnimation/>
            </div>
          </div>
          <div className='main-pin-section fj-pl-123 mobile-view' >
            <h3 className='fj-h3 intro-title-4' ref={introTitleRef4} >
              Selected<br /> Itineraries
            </h3>
            <div className='home-ani-2 home-ani-1 home-ani-4'>
              <SelectedItinerariesAnimation/>
            </div>
          </div>
          <div className="cards" ref={cardsRef}>
            <Services/>
          </div>
          </div>
          </div>
         
          
        </div>
      </section>
    </div>

   
     
    </>
  );
};

export default OurJourney;
