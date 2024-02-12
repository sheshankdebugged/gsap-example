'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAnimationB = () => {
  const canvasRef = useRef(null);
  useEffect(() => {

    const initCanvas = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const render = () => {
        if (loadedImages === frameCount) {
          const frameIndex = Math.max(0, Math.min(sequence.frame, frameCount - 1));
          scaleImage(images[frameIndex], context);
        }
      };

      const resizeCanvas = () => {
        if (window.innerWidth < 576) {
          canvas.width = window.innerWidth * 1.3;
          canvas.height = window.innerHeight* 0.2;
        } 
        else if (window.innerWidth < 767) {
          canvas.width = window.innerWidth * 0.9;
          canvas.height = window.innerHeight* 0.7;
        }else if (window.innerWidth < 1024) {
          canvas.width = window.innerWidth * 1;
          canvas.height = window.innerHeight* 0.5;
        } else {
          canvas.width = 417;
          canvas.height = 209;
        }

        render();
      };

      window.addEventListener("resize", resizeCanvas);

      const frameCount = 13;
      const currentFrame = (index) => {
        const imagePath = `https://candokidsbastg.wpengine.com/test/lineanimation2/1/Line_${(index + 1)
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
          start: "top 50%",
          end: "top 1%",
          trigger: "#page_11",
          scrub: 3,
          // markers: true
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
  // useEffect(() => {
  //   const initCanvas = () => {
  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext("2d"); 

  //     canvas.width = window.innerWidth;
  //     canvas.height = 1000;

  //     window.addEventListener("resize", function () {
  //       canvas.width = window.innerWidth;
  //       canvas.height = 1000;
  //       render();
  //     });

  //     const frameCount = 25;
  //     const currentFrame = (index) => {
  //       const imagePath = `https://candokidsbastg.wpengine.com/test/Homepage_animation_hero_b/Homepage_animation_hero_b_${(index + 1)
  //         .toString()
  //         .padStart(2, "0")}.png`;
        
  //       return imagePath;
  //     };

  //     const images = [];
  //     const sequence = {
  //       frame: 0,
  //     };

  //     let loadedImages = 0;

  //     for (let i = 0; i < frameCount; i++) {
  //       const img = new Image();
  //       img.src = currentFrame(i);
  //       img.onload = () => {
  //         loadedImages++;
  //         if (loadedImages === frameCount) {
  //           // All images have loaded, trigger render
  //           render();
  //         }
  //       };
  //       images.push(img);
  //     }

  //     gsap.to(sequence, {
  //       frame: frameCount + 1,
  //       snap: "frame",
  //       ease: "power1.inOut",
  //       scrollTrigger: {
  //         scrub: true,
  //         start: "-60%",
  //         end: "+=50%",
  //         trigger: "#page3",
  //       },
  //       onUpdate: render,
  //     });

  //     function render() {
  //       if (loadedImages === frameCount) {
  //         const frameIndex = Math.max(0, Math.min(sequence.frame, frameCount - 1));
  //         scaleImage(images[frameIndex], context);
  //       }
  //     }

  //     function scaleImage(img, ctx) {
  //       var canvas = ctx.canvas;
  //       var hRatio = canvas.width / img.width;
  //       var vRatio = canvas.height / img.height;
  //       var ratio = Math.max(hRatio, vRatio);
  //       var centerShift_x = (canvas.width - img.width * ratio) / 2;
  //       var centerShift_y = (canvas.height - img.height * ratio) / 2;
  //       context.clearRect(0, 0, canvas.width, canvas.height);
  //       context.drawImage(
  //         img,
  //         0,
  //         0,
  //         img.width,
  //         img.height,
  //         centerShift_x,
  //         centerShift_y,
  //         img.width * ratio,
  //         img.height * ratio
  //       );
  //     }
  //   };

  //   initCanvas();
  // }, []);

  return <canvas id="page3" ref={canvasRef}></canvas>;
};

export default HeroAnimationB;
