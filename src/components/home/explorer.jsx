"use client"
import React, { useEffect, useRef, useState  } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import HomeExplorersAnimation from '../common/home-explorers-animation';
import ContactUsLeads from '../contactUsleads/contactUsLeads';


const JoinUs = () => {

  const introTitleRef6 = useRef(null);
  const introTextRef6 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollSmoother, ScrollTrigger);
    ScrollTrigger.saveStyles(".intro-title-6"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introTitle6 = introTitleRef6.current;
    const splitText = new SplitText(introTitle6, { type: "lines", linesClass: "intro-title-6" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introTitle6,
        start: "top 100%",
        end: "top 10%", // Adjust the end position based on your needs
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
    ScrollTrigger.saveStyles(".intro-text-6"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introText6 = introTextRef6.current;
    const splitText = new SplitText(introText6, { type: "lines", linesClass: "intro-text-6" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introText6,
        start: "top 100%",
        end: "top 10%", // Adjust the end position based on your needs
        once: true, 
        // markers: true,
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
  // useEffect(() => {
  //   const timelineHeader = gsap.timeline({
  //     scrollTrigger: {
  //       id: "ZOOM",
  //       trigger: ".joinus-journey  ",
  //       scrub: 0.5,
  //       start: "top 160%",
  //       end: "bottom 10%",
  //       markers: false,
  //     }
  //   });

  //   timelineHeader
  //     .to(".joinus-journey  ", {
  //       scale: .9,
  //     })
  //     .to(".joinus-journey  ", {
  //       scale: 1,
  //     });

  // }, []);
  useEffect(() => {
    gsap.from('.joinus-journey .marquee-gsap', {
      xPercent: 12,
      duration: 2,
    });
    gsap.to('.joinus-journey .marquee-gsap', {
      xPercent: -75,
      scrollTrigger: {
        trigger: '.joinus-journey .marquee-container',
        start: 'top 80%',
        end: 'top 1%',
        scrub: 5,
        duration: 2,
        // markers: true
      },
    });
  }, []);

  const [joinUsModal, setJoinUsModal] = useState(false);
  const handleJoinUsModal = () => setJoinUsModal(!joinUsModal)
  // const handleGetIntouch = () => {
  //   debugger;
  //   console.log('Func calle')
  // }
    return (
       <>
            {/* <div className='fj-btn-text journey-anchor-btn-outter' onClick={handleGetIntouch} >
                  <span className="fj-dark fj-inline fj-link1 link  fj-anchor-circle" >
                    <span >Join our team</span> 
                    <span className="fj-anchor-style dark-anchor">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0514 21.9498L21.9509 12.0503M21.9509 12.0503L12.0513 12.0503M21.9509 12.0503L21.9508 21.9498" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </span>

                </div> */}
        <section className='joinus-journey  '>
          <div className="marquee-container fj-container">
            <h1 className="fj-h0 fj-dark fj-dark marquee-gsap fj-y-120">
            Join us on a journey of radical discovery. 
            </h1>
          </div>
          <div className=' fj-white  fj-container fj-pt-120'>
            <div className='fj-inline home-inline fj-container2 '>
              <div className='left-text-column' >
                <h3 className='fj-h3 fj-dark text intro-title-6' ref={introTitleRef6}>
                Home of the <br/> explorers
                </h3>
                <div className='fj-btn-text journey-anchor-btn-outter' onClick={handleJoinUsModal} >
                  <span className="fj-dark fj-inline fj-link1 link  fj-anchor-circle" >
                    <span >Join our team</span> 
                    <span className="fj-anchor-style dark-anchor">
                      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.0514 21.9498L21.9509 12.0503M21.9509 12.0503L12.0513 12.0503M21.9509 12.0503L21.9508 21.9498" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </span>

                </div>
              </div>
              <div ref={introTextRef6} className="quote-text dot-text">
              <p className='fj-text-r fj-dark'>Fusion Journey is home to a wide range of exceptionally curious UX/UI designers who not only have a <br/>passion for user experiences,  but also endless  curiosity for different cultures and the beautifully <br/>complex human condition.</p>
              </div>
            </div>
            <div className='fj-text-center ani-img join-ani-img'>
              {/* <Image src={animation6} alt='animation6' /> */}
              <HomeExplorersAnimation />
            </div>
          </div>
        </section>
       <ContactUsLeads show2={joinUsModal} handleClose2={handleJoinUsModal}/>

        {/* <JoinUsModal /> */}
        
       </>
    );
};

export default JoinUs;