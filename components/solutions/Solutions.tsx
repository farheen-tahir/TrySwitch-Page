"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Solutions = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="bg-gradient-to-r flex flex-col md:flex-row h-auto md:h-[25rem] from-[#270AAD] to-[#D9D2FC] py-6 px-4 md:px-6 mt-20 rounded-xl max-w-[65rem] mx-0 ">
      <div className="w-full md:w-[65%] pl-[2rem] ">
        <h1 className="solution-title text-[3rem] font-black text-white py-2 md:text-start text-center">
          Solutions
        </h1>
        <p className="solution-description text-lg max-sm:text-sm  text-white pt-[1rem] pr-7  md:text-start text-center">
          TrySwitch simplifies real estate investing by connecting you with
          verified sellers and tools to manage listings, build networks, and
          communicate efficiently. For off-market sellers, it’s easy to list
          properties, grow your audience, and track performance. Collaborate,
          share documents, schedule tasks, and automate workflows—all in one
          app. Boost your business with targeted marketing and streamlined
          communication.
        </p>
      </div>
      {/* <div
        className="solution-right-container max-w-[90%] md:max-w-[20rem] relative md:absolute md:left-[50rem] self-center max-md:mt-5 lg:left-[55rem]  solution-right-container "
        //    className='absolute inset-y-0 right-0 w-16 ...'
      >
        <Image
          priority
          alt="join community"
          src="assets/images/Solution.svg"
          width={400}
          height={400}
          className="z-20 relative"
          //   className="w-[16rem] object-cover bg-about-image bg-contain bg-center phone"
        />
        <div className="tilted-box max-md:hidden w-[20rem] h-[20rem] bg-gradient-to-r from-[#270AAD] to-[#D9D2FC] z-10 absolute left-0 top-0 rounded-xl custom-transform"></div>
        <div className="tilted-box max-md:hidden w-[20rem] h-[20rem] bg-gradient-to-r from-[#270AAD] to-[#D9D2FC] z-0 absolute left-0 top-0 rounded-xl custom-transform2"></div>
      </div> */}
      <div className="solution-right-container max-w-[90%] md:max-w-[20rem] relative md:absolute md:left-[50rem] self-center max-md:mt-5 lg:left-[55rem]">
      
      {/* Main Image - Triggers Hover Animation */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative z-20"
      >
        <Image
          priority
          alt="join community"
          src="/assets/images/Solution.svg"
          width={400}
          height={400}
          className="relative z-20"
        />
      </div>

      {/* Tilted Box 1 - Rotate 5 degrees (Smooth) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={
          hovered
            ? { opacity: 1, scale: 1, rotate: 5 }
            : { opacity: 0, scale: 0.9, rotate: 0 }
        }
        transition={{
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1], 
          type: "spring",
          stiffness: 80,
          damping: 10,
        }}
        className="tilted-box max-md:hidden w-[20rem] h-[20rem] bg-gradient-to-r from-[#270AAD] to-[#D9D2FC] z-10 absolute left-0 top-0 rounded-xl"
      />

      {/* Tilted Box 2 - Rotate 10 degrees (Smoother Delay) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        animate={
          hovered
            ? { opacity: 1, scale: 1, rotate: 10 }
            : { opacity: 0, scale: 0.9, rotate: 0 }
        }
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier
          type: "spring",
          stiffness: 70,
          damping: 12,
          delay: hovered ? 0.1 : 0,
        }}
        className="tilted-box max-md:hidden w-[20rem] h-[20rem] bg-gradient-to-r from-[#270AAD] to-[#D9D2FC] z-0 absolute left-0 top-0 rounded-xl"
      />
    </div>
    </div>
  );
};

export default Solutions;
