'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";

const BodyWrapper = ({ children }) => {
  //bg-animations//
  const wrapRef = useRef(null);
  const sectionClasses = ['.home .journey-section', '.our-story .tours-section', '.dark-service-section',  '.our-impact-section'];

  useEffect(() => {
    sectionClasses.forEach((sectionClass) => {
      const section = document.querySelector(sectionClass);

      if (section) {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top center', // Adjust the start position as needed
            end: 'bottom center', // Adjust the end position as needed
            scrub: true,
            toggleClass: {
              targets: 'body',
              className: 'journey-dark',
            },
          },
        });
      }
    });
  }, []);

  return (
    <body suppressHydrationWarning={true} ref={wrapRef}>
      {children}
    </body>
  )
}

export default BodyWrapper