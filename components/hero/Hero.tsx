"use client";
import React, { useEffect, useRef } from "react";
import Container from "../global/Container";
import GButton from "../global/GButton";
import gsap from "gsap";
// import Lottie, { LottieRefCurrentProps } from "lottie-react";
// import Animation from "./animationData.json";
import Image from "next/image";
const Hero = () => {
  const boxRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const heroAnim = useRef(null);
  // const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const bg = useRef(null);

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
            // Play the Lottie animation when this step starts
            // if (lottieRef.current) {
            //   lottieRef.current.play(); // No TypeScript error
            // }
          },
        },
        "-=0.3" // Overlap this animation with the previous one
      );
  }, []); // `tl` is now scoped to `useEffect`, so it doesn’t need to be included in dependencies.

  return (
    <Container
      ref={bg}
      className="bg-gradient-to-r flex flex-col md:flex-row h-auto md:h-[28rem] from-orange-200 to-purple-300 py-6 px-4 md:px-6 my-0 rounded-xl w-full"
    >
      {/* Left Section */}
      <div className="w-full px-4 md:px-0 lg:px-16 xl:px-20 flex flex-col h-full">
        <h1
          ref={boxRef}
          className="text-3xl md:text-5xl md:w-[30rem] md:leading-[4rem] md:mt-10 font-bold mt-2 leading-[2rem] sm:leading-[5rem] text-[#292929] font-sans"
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
        className="w-full h-full sm:flex sm:items-center sm:mt-3 lg:mt-0"
        ref={heroAnim}
      >
         <Image
                      priority
                      width={500}
                      height={500}
                      alt="phone-hero.png"
                      src="/assets/images/Tryswitch-hero.png"
                      // className="w-[16rem] object-cover bg-about-image bg-contain bg-center phone"
                    />
        
        {/* <Lottie
          animationData={Animation}
          loop={false}
          width={100}
          lottieRef={lottieRef}
        /> */}
      </div>
    </Container>
  );
};

export default Hero;
