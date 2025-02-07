"use client";
import React, { useEffect, useRef } from "react";
import Container from "../global/Container";
import Form from "./Form";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const contactImgRef = useRef(null); // Use ref for the target element

  useEffect(() => {
    gsap.from(contactImgRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.7,
      scrollTrigger: {
        // markers: true,
        scroller: "body",
        trigger: contactImgRef.current, // Element to trigger the animation
        start: "top 80%", // Animation starts when top of the element hits 80% of the viewport
        end: "top 30%", // Animation ends when top of the element hits 30% of the viewport
        scrub: 3, //mooth scrubbing
      },
    });
  }, []); 
  return (
    <Container className=" flex mb-20 flex-col lg:flex-row max-sm:p-0 gap-[10rem]">
      <div
        className="w-full lg:w-2/5  lg:block hidden "
        ref={contactImgRef} // h-[10%]
      >
        <Image
          src="/assets/images/ContactProperty.svg"
          alt="Contact Section Property Image"
          width={175}
          height={36}
          priority
          className="w-[100%] h-[100%] mx-auto"
        />
      </div>
      <div className="w-full lg:w-3/5 max-sm:p-0 ">
        <h2 className="text-5xl font-bold pb-3 text-gray-700">
          Let’s Get in Touch
        </h2>
        <p className="text-lg">
          Get in touch with us at{" "}
          <span className="text-secondary font-bold">Team@tryswitch.io</span>
        </p>
        <Form />
      </div>
    </Container>
  );
};

export default Contact;
