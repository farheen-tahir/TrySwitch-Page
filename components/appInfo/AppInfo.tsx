'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "../global/Container";
import GButton from "../global/GButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const AppInfo = ({ userType = 1, animationPath="/assets/webm/seller-animation.webm" }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.playbackRate = 0.5; // Slows the video to 50% speed
      }
    }, []);
    useEffect(() => {
  
        gsap.from(videoRef.current, {
          x: userType===1?-200:200,
          opacity: 0,
          duration: 3,
          ease:"power2.out",
          scrollTrigger: {
            // markers: true,
            scroller: "body",
            trigger: videoRef.current, // Element to trigger the animation
            start: "top 80%", // Animation starts when top of the element hits 80% of the viewport
            end: "top 30%", // Animation ends when top of the element hits 30% of the viewport
            // scrub: 3, //mooth scrubbing
            toggleActions: "play none none none", // Play once, no reverse
          once: true,
          },
        });
      }, []); 
    return (
    <Container className="h-full justify-between flex flex-col md:flex-row    py-6 px-4 md:px-6 mt-8 md:mt-20 rounded-xl max-w-[65rem] mx-0 ">
      {userType === 2 && (
        <div className="w-full md:w-1/2  ">
          <h1 className="text-4xl font-black  text-primary py-2 md:text-start text-center">
            For Seller
          </h1>
          <p className="text-xl max-sm:text-sm  text-[#555555] pt-[1rem] pr-7  md:text-start text-center">
            In a market increasingly dominated by MLS software, off-market
            sellers aiming to expand their reach can’t afford to fall behind.
            Instead of competing against this trend, join it with TrySwitch. Our
            platform empowers off-listing sellers to list single or multiple
            properties, build a network of followers, and gain full visibility
            into how their properties perform among clients’ saved properties.
            With TrySwitch, you can also collaborate and share documents in real
            time, schedule appointments, manage tasks, and automate workflows
            directly within the app. Get started today!
          </p>
          <div className="justify-center flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-8 sm:mt-16">
            <GButton
              className="w-full sm:w-2/5 bg-primary hover:bg-secondary"
              img="/assets/images/PlaystoreIcon.svg"
              text="Google Play"
            />
            <GButton
              className="w-full sm:w-2/5 bg-secondary hover:bg-primary"
              img="/assets/images/AppleIcon.svg"
              text="App Store"
            />
          </div>
        </div>
      )}
      <div
        className="w-full md:w-1/2 flex justify-center overflow-hidden"
        //    className='absolute inset-y-0 right-0 w-16 ...'
      >
        {/* <Image
          priority
          alt="join community"
          src="assets/images/Solution.svg"
          width={400}
          height={400}
          className="h-full"
          //   className="w-[16rem] object-cover bg-about-image bg-contain bg-center phone"
        /> */}
         <video ref={videoRef} autoPlay loop muted playsInline  className="w-full md:w-[85%] h-auto">
        <source src={animationPath} type="video/webm" />
        <source src={animationPath} type="video/mp4" />
        Your browser does not support this
      </video>
        {/* <video
          poster="/assets/webm/hero-section.webm"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "auto" }}
        /> */}
      </div>
      {userType === 1 && (
        <div className="w-full md:w-1/2 ">
          <h1 className="text-4xl font-black text-primary py-2 md:text-start text-center">
            For Investor
          </h1>
          <p className="text-xl max-sm:text-sm  text-[#555555] pt-[1rem] pr-7  md:text-start text-center">
            Whether you’re a residential investor, real estate flipper,
            buy-and-hold investor, wholesaler, or land developer, TrySwitch
            simplifies your search for discounted investment opportunities. Our
            platform connects you with verified sellers and equips you with
            tools to organize listings, build networks, and communicate in
            real-time. Avoid the hassle of unverified sellers and the risk of
            dealing with potential scammers—focus on securing properties that
            fit your strategy. With TrySwitch, investing is made simpler, safer,
            and more efficient.
          </p>
          <div className="justify-center flex flex-col sm:flex-row gap-7 sm:gap-8 w-full mt-8 sm:mt-16">
            <GButton
              className="w-full sm:w-2/5 bg-primary hover:bg-secondary"
              img="/assets/images/PlaystoreIcon.svg"
              text="Google Play"
            />
            <GButton
              className="w-full sm:w-2/5 bg-secondary hover:bg-primary"
              img="/assets/images/AppleIcon.svg"
              text="App Store"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

export default AppInfo;
