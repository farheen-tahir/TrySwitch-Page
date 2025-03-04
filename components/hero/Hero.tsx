"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../global/Container";
import GButton from "../global/GButton";
import gsap from "gsap";
// import Image from "next/image";
const totalFrames = 150; // Number of images (0000.png - 0150.png)
const frameRate = 15;
const Hero = () => {
  const boxRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const heroAnim = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const bg = useRef(null);
  const [frame, setFrame] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTime = useRef<number | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    for (let i = 0; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/assets/images/${String(i).padStart(4, "0")}.png`;
      imagesRef.current[i] = img;
    }
  }, []);

  // ✅ Animate frames smoothly but stop at last frame
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;

      // Calculate the current frame based on elapsed time
      const currentFrame = Math.min(
        Math.floor((elapsed / 1000) * frameRate),
        totalFrames // Stop at last frame
      );

      setFrame(currentFrame);

      // Stop animation when last frame is reached
      if (currentFrame < totalFrames) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(boxRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.7,
      delay: 2,
    })
      .from([btn1Ref.current, btn2Ref.current], {
        opacity: 0,
        duration: 0.4,
      })
      .from(
        heroAnim.current,
        {
          opacity: 0,
          duration: 0.5,
          onStart: () => {
            if (videoRef.current) {
              videoRef.current.play();
            }
          },
        },
        "-=0.3"
      );
  }, []);

  return (
    <Container
      ref={bg}
      className="hero-section justify-between bg-gradient-to-r flex flex-col md:flex-row h-auto md:h-[28rem] from-orange-200 to-purple-300 py-6 px-4 md:px-6 my-0 rounded-xl w-full"
    >
      {/* Left Section */}
      <div className="w-full md:w-[60%]  px-4 md:px-0 lg:px-16 xl:px-20 flex flex-col h-full hero-left-container">
        <h1
          ref={boxRef}
          className=" text-6xl md:text-6xl w-full md:w-full md:leading-[4rem] md:mt-10 font-bold mt-2 leading-[4rem] sm:leading-[5rem] text-[#292929] font-sans"
        >
          The all-in-one app for off-market deals
        </h1>
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-8 sm:mt-16">
          <GButton
            ref={btn1Ref}
            className="w-full sm:w-2/5 bg-primary hover:bg-secondary"
            img="/assets/images/PlaystoreIcon.svg"
            text="Google Play"
          />
          <GButton
            ref={btn2Ref}
            className="w-full sm:w-2/5 bg-secondary hover:bg-primary"
            img="/assets/images/AppleIcon.svg"
            text="App Store"
          />
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full h-full sm:flex sm:items-center sm:mt-3 lg:mt-0 hero-right-container md:w-[40%]"
        ref={heroAnim}
      >
        <img
          src={imagesRef.current[frame]?.src || `/assets/images/0000.png`}
          alt="Hero Animation"
          className="w-full h-auto"
        />
      </div>
    </Container>
  );
};

// const Hero = () => {
//   const boxRef = useRef(null);
//   const btn1Ref = useRef(null);
//   const btn2Ref = useRef(null);
//   const heroAnim = useRef(null);
//   const bg = useRef(null);
//   const [frame, setFrame] = useState(0);
//   const animationRef = useRef<number | null>(null);
//   const startTime = useRef<number | null>(null);
//   const imagesRef = useRef<HTMLImageElement[]>([]);

//   // Preload images
//   useEffect(() => {
//     for (let i = 0; i <= totalFrames; i++) {
//       const img = new Image();
//       img.src = `/assets/images/${String(i).padStart(4, "0")}.png`;
//       imagesRef.current[i] = img;
//     }
//   }, []);

//   // Image Animation (Loop from 0-150 then stop)
//   useEffect(() => {
//     const animate = (timestamp: number) => {
//       if (!startTime.current) startTime.current = timestamp;
//       const elapsed = timestamp - startTime.current;

//       const currentFrame = Math.min(
//         Math.floor((elapsed / 1000) * frameRate),
//         totalFrames
//       );

//       setFrame(currentFrame);

//       if (currentFrame < totalFrames) {
//         animationRef.current = requestAnimationFrame(animate);
//       }
//     };

//     animationRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, []);

//   // GSAP Animation for Hero Elements
//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(boxRef.current, {
//       x: -200,
//       opacity: 0,
//       duration: 0.7,
//       delay: 0.5, // Small delay for smooth effect
//       ease: "power2.out",
//     })
//       .from([btn1Ref.current, btn2Ref.current], {
//         opacity: 0,
//         y: 30,
//         duration: 0.5,
//         stagger: 0.2,
//         ease: "power2.out",
//       })
//       .from(
//         heroAnim.current,
//         {
//           x: 200,
//           opacity: 0,
//           duration: 0.7,
//           ease: "power2.out",
//         },
//         "-=0.5"
//       );
//   }, []);

//   return (
//     <Container
//       ref={bg}
//       className="hero-section flex flex-col md:flex-row justify-between bg-gradient-to-r from-orange-200 to-purple-300 h-auto md:h-[28rem] py-6 px-4 md:px-6 rounded-xl w-full"
//     >
//       {/* Left Section */}
//       <div className="w-full md:w-[60%] px-4 md:px-0 lg:px-16 xl:px-20 flex flex-col h-full hero-left-container">
//         <h1
//           ref={boxRef}
//           className="text-6xl md:text-6xl w-full font-bold mt-2 leading-[4rem] sm:leading-[5rem] text-[#292929]"
//         >
//           The all-in-one app for off-market deals
//         </h1>
//         <div className="flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-8 sm:mt-16">
//           <GButton
//             ref={btn1Ref}
//             className="w-full sm:w-2/5 bg-primary hover:bg-secondary"
//             img="/assets/images/PlaystoreIcon.svg"
//             text="Google Play"
//           />
//           <GButton
//             ref={btn2Ref}
//             className="w-full sm:w-2/5 bg-secondary hover:bg-primary"
//             img="/assets/images/AppleIcon.svg"
//             text="App Store"
//           />
//         </div>
//       </div>

//       {/* Right Section (Image Sequence Animation) */}
//       <div
//         className="w-full h-full sm:flex sm:items-center sm:mt-3 lg:mt-0 hero-right-container md:w-[40%]"
//         ref={heroAnim}
//       >
//         <img
//           src={imagesRef.current[frame]?.src || `/assets/images/0000.png`}
//           alt="Hero Animation"
//           className="w-full h-auto"
//         />
//       </div>
//     </Container>
//   );
// };

export default Hero;
