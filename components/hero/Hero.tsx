"use client";
import React, { useEffect, useRef } from "react";
import Container from "../global/Container";
import GButton from "../global/GButton";
import gsap from "gsap";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Animation from "./animationData.json";
const Hero = () => {
  const boxRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const heroAnim = useRef(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const bg = useRef(null);
  const tl=gsap.timeline()
  
  useEffect(() => {
    tl.from(boxRef.current,{
      x:-200,
      opacity:0,
      duration:0.7,
      delay:2
    },"-=0.3"),
    tl.from([btn1Ref.current,btn2Ref.current],{
      opacity:0,
      duration:0.4
    })
    tl.from(
      heroAnim.current,
      {
        opacity: 0,
        duration: 0.5,
        onStart: () => {
          // Play the Lottie animation when this step starts
          if (lottieRef.current) {
            lottieRef.current.play(); // No TypeScript error
          }
        },
      },
      "-=0.3"
    );
    
  }, []);
  return (
    <Container
      ref={bg}
    className="bg-gradient-to-r flex flex-col md:flex-row h-auto md:h-[28rem] from-orange-200 to-purple-300 py-6 px-4 md:px-6 my-0 rounded-xl w-full"

      // className="bg-gradient-to-r from-orange-200 to-purple-300   py-6 px-6 my-0 rounded-xl sm:w-full  flex-col md:flex-row h-auto md:h-[28rem]"
    >
      {/* sm:w-3/5 */}
      <div className="w-full px-4 md:px-0 lg:px-16 xl:px-20   flex flex-col h-full ">
        <h1
          ref={boxRef}
          className="text-3xl md:text-5xl md:w-[30rem] md:leading-[4rem] md:mt-10 font-bold mt-2 leading-[2rem] sm:leading-[5rem] text-[#292929] font-sans"
        >
          The all-in-one app for off-market deals
        </h1>
        <div className="flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-8 sm:mt-16">
          <GButton ref={btn1Ref} className="w-full sm:w-2/5 bg-primary hover:bg-secondary" img="/assets/images/PlaystoreIcon.svg" text="Google Play"/>
          <GButton ref={btn2Ref} className="w-full sm:w-2/5 bg-secondary hover:bg-primary" img="/assets/images/AppleIcon.svg" text="App Store"/>
        </div>
      </div>
      {/* sm:w-2/5 */}
      <div className="w-full  h-full sm:flex sm:items-center sm:mt-3 md:mt-14 lg:mt-0" ref={heroAnim} >
        <Lottie animationData={Animation} loop={false} width={100}  lottieRef={lottieRef}  />
      </div>
    </Container>
  //   <Container
  //   ref={bg}
    // className="bg-gradient-to-r flex flex-col md:flex-row h-auto md:h-[28rem] from-orange-200 to-purple-300 py-6 px-4 md:px-6 my-0 rounded-xl w-full"
  // >
  //   {/* Left Section */}
  //   <div className="w-full px-4 md:px-12 lg:px-16 xl:px-20 md:w-3/5 flex flex-col h-auto md:h-full">
  //     <h1
  //       ref={boxRef}
  //       className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 md:mt-10 leading-[2.5rem] sm:leading-[3rem] md:leading-[4rem] lg:leading-[5rem] text-[#292929] font-sans text-center md:text-left"
  //     >
  //       The all-in-one app for off-market deals
  //     </h1>
  //     <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 w-full mt-6 sm:mt-8 md:mt-16 justify-center md:justify-start">
  //       <GButton
  //         ref={btn1Ref}
  //         className="w-full sm:w-2/5 md:w-[200px] bg-primary"
  //         img="/assets/images/PlaystoreIcon.svg"
  //       />
  //       <GButton
  //         ref={btn2Ref}
  //         className="w-full sm:w-2/5 md:w-[200px]  bg-secondary"
  //         img="/assets/images/PlaystoreIcon.svg"
  //       />
  //     </div>
  //   </div>
  
  //   {/* Right Section */}
  //   <div className="w-full md:w-2/5 h-auto md:h-full flex justify-center items-center mt-8 md:mt-0">
  //     <Lottie
  //       animationData={Animation}
  //       loop={false}
  //       className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
  //     />
  //   </div>
  // </Container>
  

  );
};

export default Hero;
