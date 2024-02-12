"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap/all";
import {SplitText, ScrollTrigger} from "gsap/all"
import TopDesignSection from '../../../components/services/design-experience/top-section'
import DesignFeatures from '../../../components/services/design-experience/features'
import OtherService from '../../../components/services/design-experience/other-services'
import Workshopslider from '../workshops/workshop-slider'
export default function Workshops() {
    
  const topSectionData = {
 
    title: {
      part1: 'Workshops',
    },
    desc: {
      part1: 'In a world of benefit-to-cost and risk-reward, there is no better way to affect change than changing mindsets.  ',
      part2: 'We offer a range of highly-focused Design Thinking and Ideation workshops to tackle design, user-experience and product challenges. This can also include rapid prototyping to transform ideas into tangible design concepts that can be readily tested and used to determine desirable outcomes.'
    },
    videoDetail: {
      src1: 'https://candokidsbastg.wpengine.com/test/new-videos/workshop-ani.mov',
      src2: 'https://candokidsbastg.wpengine.com/test/new-videos/workshop-ani.webm  ',
    }
  }
  const designFeatures = {
    title: {
      part1: 'Areas of',
      part2: 'expertise',
    },
    features: [
      'Proof of concepts',
      'Ideation',
      'Design thinking',
      'Rapid prototyping & testing',
    ]
  }
  const introSectionRef1 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    ScrollTrigger.saveStyles(".section1"); // Save initial styles to avoid FOUC (Flash of Unstyled Content)

    const introSection1 = introSectionRef1.current;
    const splitText = new SplitText(introSection1, { type: "lines", linesClass: "section1" });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: introSection1,
        start: "top 50%",
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
  return (
    <div className='design-experience-services'>
   <TopDesignSection data={topSectionData}/>
   <DesignFeatures data={designFeatures}/>

   <section className='client-section fj-clear fj-y-120 fj-container'>
          <div className='fj-container2' >
            <h3 className='fj-h3 section1' ref={introSectionRef1}>
            Workshop snapshots
            </h3>
          </div>
          <div className='fj-slider-box'>
          <Workshopslider />
          </div>
      </section>
   <OtherService/>
    </div>
  )
}
