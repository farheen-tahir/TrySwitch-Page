// "use client";
// import * as React from "react";
// import gsap from "gsap";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import { useEffect, useState } from "react";
// import { RxDash } from "react-icons/rx";
// import Image from "next/image";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);
// export function Slider({

//   timeline,
// }: {
//   timeline?: any;
// }) {
//   const [activeIndex] = useState(0); // Will be used for handling active index in the future
//   // const tl=gsap.timeline()
//   const data = [
//     {
//       url: "assets/images/Slide-1.svg",
//       title: "Discover Discounted Properties",
//       description:
//         "Easily find discounted properties at your convenience, anytime and anywhere. Enjoy a hassle-free experience free from daily spam calls, texts, and emails.",
//     },
//     {
//       url: "assets/images/Slide-2.svg",
//       title: "Organize Listings with Ease",
//       description:
//         "Customize and manage listings from any seller, all within a single, intuitive wishlist.",
//     },
//     {
//       url: "assets/images/Slide-3.svg",
//       title: "Collaborate in Real Time",
//       description:
//         "Connect and collaborate with verified sellers,peers, and service providers without delays.",
//     },
//     {
//       url: "assets/images/Slide-4.svg",
//       title: "Document Management Made Simple",
//       description:
//         "Upload, share, and manage documents seamlessly for each property listing.",
//     },
//     {
//       url: "assets/images/Slide-5.svg",
//       title: "Streamline Scheduling",
//       description:
//         "Create tasks, events, and appointments to ensure every step of your investment process is covered.",
//     },
//   ];

//   useEffect(() => {
//     // const timeline = gsap.timeline({

//     //     scrollTrigger: {
//     //       trigger: containerRef.current,
//     //       start: 'top 5%',
//     //       end: '+=500%',
//     //       scrub: 1,
//     //       pin: true,
//     //       markers: true, // For debugging
//     //       onUpdate: (self) => {
//     //         const progress = Math.floor(self.progress * data.length); // Calculate active index
//     //         setActiveIndex(progress);
//     //       },
//     //     },
//     //   });

//     // Animate images
//     data.forEach((_, index) => {
//       timeline.from(
//         `#data-slide-${index}`,

//         { y: -200, opacity: 0, duration: 0.5 },
//         0
//         //   { x: "0%", opacity: 1, duration: 0.3, ease: "power2.inOut" },

//         //   index * 0.5 // Stagger animations sequentially
//       );
//     });
//   }, [data,timeline]);

//   // const sliderRef = useRef(null);
//   // useEffect(() => {
//   //     const slides = gsap.utils.toArray(".carousel-item"); // Get all slide elements

//   //     gsap.to(slides, {

//   //       scrollTrigger: {
//   //         trigger: sliderRef.current,
//   //         start: "top 0%",
//   //         end: () => `+=500%`, // Total height based on number of slides
//   //         scrub: 1,
//   //         pin: true,
//   //         markers: true,

//   //         onUpdate: (self) => {
//   //           const progress = Math.round(self.progress * (data.length - 1)); // Calculate slide index
//   //           setActiveIndex(progress); // Update activeIndex based on scroll progress
//   //         },

//   //       },
//   //     });
//   //   }, [data.length]);

//   // const intervalTime = 3000; // Time interval for auto-loop in milliseconds

//   // // Auto-loop logic
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setActiveIndex((prevIndex) => (prevIndex + 1) % data.length); // Move to the next item and loop back
//   //   }, intervalTime);

//   //   return () => clearInterval(interval); // Clear interval on component unmount
//   // }, [data.length]);

//   // // Function to handle navigation
//   // const handleNavigation = (index: number) => {
//   //   setActiveIndex(index);
//   // };

//   return (
//     <Carousel className="w-full">
//       <CarouselContent>
//         {data.map((item, index) => (
//           <CarouselItem
//             key={index}
//             className={`transition-opacity duration-500 ${
//               activeIndex === index ? "opacity-100" : "opacity-0 absolute"
//             }`}
//           >
//             <div className="p-1" id={`data-slide-${index}`}>
//               <div className="flex items-center gap-5">
//                 <Image
//                   alt="slide-icons"
//                   src={item.url}
//                   width={50}
//                   height={50}
//                 />
//                 <h3 className="text-md capitalize text-primary font-extrabold sm:text-2xl">
//                   {item.title}
//                 </h3>
//               </div>
//               <p className="text-xl text-[#555555] py-10 inline-block break-words">
//                 {item.description}
//               </p>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>

//       {/* Bottom Navigation Dots */}
//       <div className="flex justify-center mt-4">
//         {data.map((_, index) => (
//           <RxDash
//             key={index}
//             fontSize={50}
//             color={`${activeIndex === index ? "#F54208" : "gray"}`}
//             //   onClick={() => handleNavigation(index)}
//           />
//         ))}
//       </div>
//     </Carousel>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { RxDash } from "react-icons/rx";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Slider({ timeline }: { timeline?: gsap.core.Timeline }) {
  const [activeIndex] = useState(0); // Future use for active index handling

  const data = React.useMemo(
    () => [
      {
        url: "assets/images/Slide-1.svg",
        title: "Discover Discounted Properties",
        description:
          "Easily find discounted properties at your convenience, anytime and anywhere. Enjoy a hassle-free experience free from daily spam calls, texts, and emails.",
      },
      {
        url: "assets/images/Slide-2.svg",
        title: "Organize Listings with Ease",
        description:
          "Customize and manage listings from any seller, all within a single, intuitive wishlist.",
      },
      {
        url: "assets/images/Slide-3.svg",
        title: "Collaborate in Real Time",
        description:
          "Connect and collaborate with verified sellers, peers, and service providers without delays.",
      },
      {
        url: "assets/images/Slide-4.svg",
        title: "Document Management Made Simple",
        description:
          "Upload, share, and manage documents seamlessly for each property listing.",
      },
      {
        url: "assets/images/Slide-5.svg",
        title: "Streamline Scheduling",
        description:
          "Create tasks, events, and appointments to ensure every step of your investment process is covered.",
      },
    ],
    []
  );

  useEffect(() => {
    if (!timeline) return;

    data.forEach((_, index) => {
      timeline.from(
        `#data-slide-${index}`,
        { y: -200, opacity: 0, duration: 0.5 },
        0 // Staggered animations
      );
    });
  }, [data, timeline]);

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className={`transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <div className="p-1" id={`data-slide-${index}`}>
              <div className="flex items-center gap-5">
                <Image
                  alt="slide-icons"
                  src={item.url}
                  width={50}
                  height={50}
                />
                <h3 className="text-md capitalize text-primary font-extrabold sm:text-2xl">
                  {item.title}
                </h3>
              </div>
              <p className="text-xl text-[#555555] py-10 inline-block break-words">
                {item.description}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Bottom Navigation Dots */}
      <div className="flex justify-center mt-4">
        {data.map((_, index) => (
          <RxDash
            key={index}
            fontSize={50}
            color={`${activeIndex === index ? "#F54208" : "gray"}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
