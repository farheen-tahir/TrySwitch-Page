// "use client";
// import React, { useEffect, useRef, useState } from "react";

// import GButton from "../global/GButton";
// import gsap from "gsap";
// import Image from "next/image";

// const totalFrames = 150; // Frames from 0000.png to 0150.png
// const frameRate = 24; // Frames per second
// const frameInterval = 1000 / frameRate; // Time per frame

// const Hero = () => {
//   const boxRef = useRef(null);
//   const btn1Ref = useRef(null);
//   const btn2Ref = useRef(null);
//   const heroAnim = useRef(null);
//   const bg = useRef(null);
//   const [frame, setFrame] = useState(0);
//   const [images, setImages] = useState<string[]>([]);
//   const [animationStarted, setAnimationStarted] = useState(false); // State to trigger animation

//   // Preload Images
//   useEffect(() => {
//     const preloadImages = async () => {
//       const loadedImages: string[] = [];
//       for (let i = 0; i <= totalFrames; i++) {
//         const src = `/assets/images/${String(i).padStart(4, "0")}.png`;
//         loadedImages.push(src);
//       }
//       setImages(loadedImages);
//       console.log("✅ All images preloaded!");
//     };
//     preloadImages();
//   }, []);

//   // GSAP Animation
//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.from(boxRef.current, { x: -200, opacity: 0, duration: 0.7, delay: 1.5 })
//       .from([btn1Ref.current, btn2Ref.current], { opacity: 0, duration: 0.4 })
//       .from(
//         heroAnim.current,
//         {
//           opacity: 0,
//           duration: 0.5,
//           onStart: () => {
//             setAnimationStarted(true); // Ensure image animation starts after GSAP
//           },
//         },
//         "-=0.3"
//       );
//   }, []);
//   useEffect(() => {
//     if (!animationStarted || images.length === 0) return;

//     let currentFrame = 0;

//     const playAnimation = () => {
//       if (currentFrame > totalFrames) return; // Stop after last frame
//       setFrame(currentFrame);
//       currentFrame++;
//       setTimeout(playAnimation, frameInterval);
//     };

//     playAnimation();
//   }, [animationStarted, images]);

//   return (
//     // <div ref={bg} className="hero-section flex flex-col md:flex-row h-auto md:h-[28rem] bg-gradient-to-r from-orange-200 to-purple-300 py-6 px-4 md:px-6 my-0 rounded-xl w-full">
//     //  <div className="w-full md:w-[60%] px-4 md:px-0 lg:px-16 xl:px-20 flex flex-col h-full hero-left-container">
//     //     <h1
//     //       ref={boxRef}
//     //       className="text-6xl md:text-6xl w-full md:w-full md:leading-[4rem] md:mt-10 font-bold mt-2 leading-[4rem] sm:leading-[5rem] text-[#292929] font-sans"
//     //     >
//     //       The all-in-one app for off-market deals
//     //     </h1>
//     //     <div className="flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-8 sm:mt-16">
//     //       <GButton
//     //         ref={btn1Ref}
//     //         className="w-full sm:w-2/5 bg-primary hover:bg-secondary"
//     //         img="/assets/images/PlaystoreIcon.svg"
//     //         text="Google Play"
//     //       />
//     //       <GButton
//     //         ref={btn2Ref}
//     //         className="w-full sm:w-2/5 bg-secondary hover:bg-primary"
//     //         img="/assets/images/AppleIcon.svg"
//     //         text="App Store"
//     //       />
//     //     </div>
//     //   </div>
//     //   {/* Right Section (Image Animation) */}
//     //   <div className="w-full h-full flex items-center hero-right-container md:w-[40%]" ref={heroAnim}>
//     //     {images.length > 0 && (
//     //       <img
//     //         src={images[frame]}
//     //         alt="Hero Animation"
//     //         className="w-full h-auto"
//     //         width={500}
//     //         height={500}
//     //       />
//     //     )}
//     //   </div>
//     // </div>
//     <div
//       ref={bg}
//       className="hero-section flex flex-col md:flex-row h-auto md:h-[28rem] bg-gradient-to-r from-orange-200 to-purple-300 py-6 px-4 md:px-6 my-0 rounded-xl w-full"
//     >
//       {/* Left Section */}
//       <div className="w-full md:w-[60%] px-4 md:px-0 lg:px-16 xl:px-20 flex flex-col h-full hero-left-container text-center md:text-left">
//         <h1
//           ref={boxRef}
//           className="text-4xl sm:text-5xl md:text-6xl w-full font-bold mt-2 sm:mt-5 leading-[3rem] sm:leading-[4rem] md:leading-[4rem] text-[#292929] font-sans"
//         >
//           The all-in-one app for off-market deals
//         </h1>
//         <div className="flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-6 sm:mt-12 justify-center md:justify-start">
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

//       {/* Right Section (Image Animation) */}
//       <div
//         className="w-full h-auto flex items-center justify-center md:justify-end hero-right-container md:w-[40%] mt-10 md:mt-0"
//         ref={heroAnim}
//       >
//         {images.length > 0 && (
//           <Image
//             src={images[frame]}
//             alt="Hero Animation"
//             className="hero-image w-[80%] sm:w-[70%] md:w-auto max-w-[500px]"
//             width={500}
//             height={500}
//             unoptimized
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";
import React, { useEffect, useRef, useState } from "react";
import GButton from "../global/GButton";
import gsap from "gsap";

const totalFrames = 150; // Total animation frames
const frameRate = 24; // Frames per second
const frameInterval = 1000 / frameRate; // Time per frame

const Hero = () => {
  const boxRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const heroAnim = useRef(null);
  const bg = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState(false);

  // **Preload Images Before Animation Starts**
  useEffect(() => {
    const preloadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 0; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `/assets/images/${String(i).padStart(4, "0")}.png`;

        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve; // Prevent blocking if an image fails
        });

        loadedImages.push(img);
      }

      setImages(loadedImages);
      setIsReady(true); // Now we can start animations
      console.log("✅ All images preloaded!");
    };

    preloadImages();
  }, []);

  // **Start GSAP Animation Only When Images Are Ready**
  useEffect(() => {
    if (!isReady) return;

    const tl = gsap.timeline();
    tl.from(boxRef.current, { x: -200, opacity: 0, duration: 0.7 })
      .from([btn1Ref.current, btn2Ref.current], { opacity: 0, duration: 0.4 })
      .from(heroAnim.current, { opacity: 0, duration: 0.5 });

    startCanvasAnimation(); // Trigger image animation **at the same time**
  }, [isReady]);

  // **Smooth Image Frame Animation on Canvas**
  const startCanvasAnimation = () => {
    if (!isReady) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let currentFrame = 0;

    // **Render the first frame immediately to avoid skipping**
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[0], 0, 0, canvas.width, canvas.height);

    const playAnimation = () => {
      if (currentFrame > totalFrames) return; // Stop after last frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[currentFrame], 0, 0, canvas.width, canvas.height);
      currentFrame++;
      setTimeout(playAnimation, frameInterval); // Controlled FPS
    };

    // Start after a small delay to sync with GSAP
    setTimeout(playAnimation, 100);
  };

  return (
    <div
      ref={bg}
      className="hero-section flex flex-col md:flex-row h-auto md:h-[28rem] bg-gradient-to-r from-orange-200 to-purple-300 py-6 px-4 md:px-6 my-0 rounded-xl w-full"
    >
      {/* Left Section */}
      <div className="w-full md:w-[60%] px-4 md:px-0  lg:pl-16 xl:pl-20 flex flex-col h-full hero-left-container text-center md:text-left justify-center align-center">
        <h1
          ref={boxRef}
          className="text-4xl sm:text-5xl md:text-[72px] w-full font-bold mt-2 sm:mt-5 leading-[3rem] sm:leading-[4rem] md:leading-[4rem] text-[#292929] font-sans"
        >
          The all-in-one app for off-market deals
        </h1>
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-6 sm:mt-12 justify-center md:justify-start">
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

      {/* Right Section (Canvas for Smooth Animation) */}
      <div
        className="w-full h-auto flex items-center justify-center md:justify-end hero-right-container md:w-[40%] mt-10 md:mt-0"
        ref={heroAnim}
      >
        {/* Show canvas only when images are fully loaded */}
        {isReady && (
          <canvas
            ref={canvasRef}
            width={500}
            height={500}
            className="w-full max-w-[500px]"
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
