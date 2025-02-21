"use client";
import React, { useEffect, useRef } from "react";
import Container from "../global/Container";
import Image from "next/image";
import { Button } from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Community = () => {
  gsap.registerPlugin(ScrollTrigger);
  const communityImgRef = useRef(null);
  const communityBtnRef = useRef(null);
  const communityBoxRef = useRef(null);
  const communityTitleRef = useRef(null);
  const communityParaRef = useRef(null);

  // useGSAP(() => {
  //   gsap.fromTo(
  //     // communityImgRef.current,
  //     ".community-img",
  //     { opacity: 0, x: 50 },
  //     {
  //       opacity: 1,
  //       x: 0,
  //       scrollTrigger: {
  //         trigger: communityImgRef.current,
  //         start: "top 80%",
  //         end: "top 30%",
  //         scrub: true,
  //         // markers:true
  //       }
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   // const timeline = gsap.timeline({
  //   //   scrollTrigger: {
  //   //     markers:true,
  //   //     scroller:"body",
  //   //     trigger: ".box-1", // Element to trigger the animation
  //   //     start: "top 0%", // Animation starts when top of the element hits 80% of the viewport
  //   //     end: "top -100%", // Animation ends when top of the element hits 30% of the viewport
  //   //     scrub: 1,
  //   //   },
  //   // });
  //   gsap.from([communityTitleRef.current,communityParaRef.current,communityBtnRef.current],{
  //     x:-200,
  //     opacity:0,
  //     duration:2,
  //     delay:2,
  //     stagger:0.3,
  //     scrollTrigger: {
  //       markers:true,
  //       scroller:"body",
  //       trigger: ".box-1", // Element to trigger the animation
  //       start: "top 10%", // Animation starts when top of the element hits 80% of the viewport
  //       end: "top 50%", // Animation ends when top of the element hits 30% of the viewport
  //       scrub: 1, // Smooth scrubbing
  //     },
  //   }),
  //   // timeline.from([btn1Ref.current,btn2Ref.current],{
  //   //   opacity:0,
  //   //   duration:0.4
  //   // })
  //   gsap.from(communityImgRef.current, {
  //     x: 200,
  //     opacity: 0,
  //     duration: 2,
  //     scrollTrigger: {
  //       markers:true,
  //       scroller:"body",
  //       trigger: ".box-1", // Element to trigger the animation
  //       start: "top 10%", // Animation starts when top of the element hits 80% of the viewport
  //       end: "top 50%", // Animation ends when top of the element hits 30% of the viewport
  //       scrub: 1, // Smooth scrubbing
  //     },
  //   });
  // }, []);

  // useEffect(() => {
  //   gsap.from([communityTitleRef.current, communityParaRef.current, communityBtnRef.current], {
  //     x: -200,
  //     opacity: 0,
  //     duration: 3, // Increased duration for slower animation
  //     delay: 2,
  //     stagger: 1, // Adjusted stagger for more delay between elements
  //     ease: "power2.out", // Apply smoother easing
  //     scrollTrigger: {
  //       // markers: true,
  //       scroller: "body",
  //       trigger: ".box-1", // Element to trigger the animation
  //       start: "top 80%", // Animation starts when top of the element hits 80% of the viewport
  //       end: "top 30%", // Animation ends when top of the element hits 30% of the viewport
  //       scrub: 1, // Smooth scrubbing
  //     },
  //   });

  //   gsap.from(communityImgRef.current, {
  //     x: 200,
  //     opacity: 0,
  //     duration: 3, // Increased duration for slower animation
  //     ease: "power2.out", // Apply smoother easing
  //     scrollTrigger: {
  //       // markers: true,
  //       scroller: "body",
  //       trigger: ".box-1", // Element to trigger the animation
  //       start: "top 80%", // Animation starts when top of the element hits 80% of the viewport
  //       end: "top 30%", // Animation ends when top of the element hits 30% of the viewport
  //       scrub: 1, // Smooth scrubbing
  //     },
  //   });
  // }, []);
  useEffect(() => {
    const mq = gsap.matchMedia(); // Initialize matchMedia for media queries

    mq.add("(min-width: 768px)", () => {
      // Animation for medium and larger screens
      gsap.from(
        [
          communityTitleRef.current,
          communityParaRef.current,
          communityBtnRef.current,
        ],
        {
          x: -200,
          opacity: 0,
          duration: 3,
          // delay: 2,
          stagger: 1,
          ease: "power2.out",
          scrollTrigger: {
            scroller: "body",
            trigger: ".box-1",
            start: "top 80%",
            end: "top 30%",
            // scrub: 3,
            // markers:true
            toggleActions: "play none none none", // Play once, no reverse
            once: true,
          },
        }
      );

      gsap.from(communityImgRef.current, {
        x: 200,
        opacity: 0,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          scroller: "body",
          trigger: ".box-1",
          start: "top 80%",
          end: "top -30%",
          // scrub: 3,
          toggleActions: "play none none none", // Play once, no reverse
          once: true,
        },
      });
    });

    mq.add("(max-width: 767px)", () => {
      // Animation for small screens
      gsap.from(
        [
          communityTitleRef.current,
          communityParaRef.current,
          communityBtnRef.current,
          // communityTitleRef.current
        ],
        {
          x: 100, // Slide up from bottom to its position
          opacity: 0,
          duration: 1.5,
          stagger: 1,
          ease: "power2.out",
          scrollTrigger: {
            // markers: true,
            scroller: "body",
            trigger: ".box-1",
            start: "top 50%",
            end: "top 30%",
            toggleActions: "play none none none", // Play once, no reverse
            once: true,
            // scrub: 3,
          },
        }
      );

      // gsap.from(communityParaRef.current, {
      //   x: 100, // Slide each line of the paragraph up
      //   opacity: 0,
      //   duration: 1.5,
      //   // delay: 0.5,
      //   // stagger: 0.2, // Stagger animation for each line
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     // markers: true,
      //     scroller: "body",
      //     trigger: communityTitleRef.current,
      //     start: "top 10%",
      //     end: "top 30%",
      //     // scrub: 3,
      //   },
      // });

      // gsap.from(communityBtnRef.current, {
      //   x: 100, // Slide up from bottom to its position
      //   opacity: 0,
      //   duration: 1.5,
      //   delay: 1, // Delay to ensure it animates after paragraph
      //   ease: "power2.out",
      //   scrollTrigger: {
      //     // markers: true,
      //     scroller: "body",
      //     trigger: communityParaRef.current,
      //     start: "top 10%",
      //     end: "top 30%",
      //     scrub: 3,
      //   },
      // });

      gsap.from(communityImgRef.current, {
        x: 100, // Slide up from bottom to its position
        opacity: 0,
        duration: 1.5,
        // delay: 1, // Delay to ensure it animates after the button
        ease: "power2.out",
        scrollTrigger: {
          // markers: true,
          scroller: "body",
          trigger: communityBtnRef.current,
          start: "top 80%",
          end: "top -200%",
          // scrub: 3,
        },
      });
    });

    return () => {
      mq.revert(); // Clean up media query animations when component unmounts
    };
  }, []);

  return (
    <Container
      className="mb-20 flex mt-10  justify-center items-start overflow-hidden box-1 md:flex-row flex-col"
      ref={communityBoxRef}
    >
      <div className="w-full md:w-1/2 ">
        <h1
          className="text-4xl font-black text-primary py-2 md:text-start text-center"
          ref={communityTitleRef}
        >
          Join Our Community
        </h1>
        <p
          className="text-xl max-sm:text-sm  text-gray-500 py-2 max-sm:pr-0 pr-7 my-7 md:text-start text-center"
          ref={communityParaRef}
        >
          Become a part of a thriving community of investors and sellers.
          Connect, collaborate, and grow with like-minded professionals in the
          real estate industry. Gain exclusive access to off-market deals, share
          insights, and stay ahead of the market—all within our trusted network.
        </p>
        <Button
          ref={communityBtnRef}
          className="bg-secondary w-full md:w-2/4 my-3 py-6 mx-auto md:mx-0 flex"
        >
          <p className="text-xl font-semibold my-4">Subscribe</p>
        </Button>
      </div>
      <div
        className=" w-full md:w-1/2   h-full flex justify-center items-center self-center"
        ref={communityImgRef}
      >
        <Image
          className="community-img"
          alt="join community"
          src="assets/images/Community.svg"
          width={400}
          height={400}
        />
      </div>
    </Container>
  );
};

export default Community;
