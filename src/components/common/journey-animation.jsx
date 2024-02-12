'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

 gsap.registerPlugin(ScrollTrigger);
const JourneyAnimation = () => {
  const canvasRef = useRef(null);
  // const sequence = gsap.timeline();

 
  useEffect(() => {

    const initCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // canvas.width = window.innerWidth * 1;
      // canvas.height = window.innerHeight * 1;

      const render = () => {
        if (loadedImages === frameCount) {
          const frameIndex = Math.max(0, Math.min(sequence.frame, frameCount - 1));
          scaleImage(images[frameIndex], context);
        }
      };

      const resizeCanvas = () => {
        if (window.innerWidth < 500) {
          canvas.width = window.innerWidth * 0.9;
          canvas.height = window.innerHeight* 0.4;
        } 
        else if (window.innerWidth < 767) {
          canvas.width = window.innerWidth * 0.9;
          canvas.height = window.innerHeight* 0.5;
        }else if (window.innerWidth < 1024) {
          canvas.width = window.innerWidth * 0.8;
          canvas.height = window.innerHeight* 0.7;
        }
        else if (window.innerWidth < 1400) {
          canvas.width = window.innerWidth * 0.8;
          canvas.height = window.innerHeight* 0.7;
        } else {
       canvas.width = window.innerWidth * 1;
      canvas.height = window.innerHeight * 1;
        }

        render();
      };

      window.addEventListener("resize", resizeCanvas);

      const frameCount = 68;
      const currentFrame = (index) => {
        const imagePath = `https://candokidsbastg.wpengine.com/test/our_journey_animation/our-journey_animation_${(index + 1)
          .toString()
          .padStart(2, "0")}.png`;
        return imagePath;
      };

      const images = [];
      const sequence = {
        frame: 0,
      };

      let loadedImages = 0;

      const loadImages = () => {
        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          img.onload = () => {
            loadedImages++;
            if (loadedImages === frameCount) {
              render();
            }
          };
          images.push(img);
        }
      };

      gsap.to(sequence, {
        frame: frameCount + 1,
        snap: "frame",
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top 20%",
          end: "top 1%",
          trigger: "#page4",
          scrub: 6,
        },
        onUpdate: render,
      });

      const scaleImage = (img, ctx) => {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      };

      // Initial setup
      loadImages();
      resizeCanvas();
    };

    initCanvas();
  }, []);

  return <canvas id="page4" ref={canvasRef}></canvas>;
};
export default JourneyAnimation;
