// "use client";
// import React, { useEffect, useState, useRef } from "react";
// // import { Slider } from './Slider'
// import gsap from "gsap";
// import Image from "next/image";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { RxDash } from "react-icons/rx";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// gsap.registerPlugin(ScrollTrigger);

// const Features = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const images = [
//     "/assets/images/Slide-1.png",
//     "/assets/images/Slide-2.png",
//     "/assets/images/Slide-3.png",
//     "/assets/images/Slide-4.png",
//     "/assets/images/Slide-5.png",
//   ];
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
//   const containerRef = useRef(null);

//   useEffect(
//     () => {
//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 0%",
//           end: "+=500%",
//           scrub: 1,
//           pin: true,
//           markers: true,
//           onUpdate: (self) => {
//             const progress = Math.floor(self.progress * images.length); // Calculate active index
//             setActiveIndex(progress);
//           },
//         },
//       });

//       // Animate headline text
//       timeline.to(".headline-text", {
//         x: "-150%", // Move text to the left
//         duration: 50,
//       });
//       // Animate images

//       images.forEach((_, index) => {
//         timeline.fromTo(
//           `#slide-${index}`,
//           { x: 200, opacity: 0 }, // Start from below with 0 opacity
//           { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, // Animate to its position
//           index * 1.2 // Stagger delay for sequential appearance
//         );
//       });

//       data.forEach((_, index) => {
//         timeline.fromTo(
//           `#data-slide-${index}`,
//           { y: 200, opacity: 0 }, // Start from below with 0 opacity
//           { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, // Animate to its position
//           index * 1.2 // Stagger delay for sequential appearance
//         );
//       });
//     },
//     [
//       images?.length,data?.length
//     ]
//   );
//   return (
//     <div
//       ref={containerRef}
//       className="w-full my-5  feature-section overflow-hidden"
//     >
//       <h2 className="text-center text-secondary text-2xl font-black">
//         Features
//       </h2>
//       <div className="overflow-hidden">
//         <h1 className="headline-text whitespace-nowrap overflow-hidden text-ellipsis text-6xl text-[#ECECEC] font-extrabold leading-tight inline-block ">
//           TrySwitch – Your Gateway to Off-Market Deals. TrySwitch – Your Gateway
//           to Off-Market Deals. TrySwitch – Your Gateway to Off-Market Deals.
//           TrySwitch – Your Gateway to Off-Market Deals.
//         </h1>
//       </div>
//       <div className="flex flex-col sm:flex-row   ">
//         <div className="w-full sm:w-1/2 items-center flex slider">
//           {/* <Slider containerRef={containerRef} timeline={timeline}/> */}
//           <Carousel className="w-full">
//             <CarouselContent>
//               {data.map((item, index) => (
//                 <CarouselItem
//                   key={index}
//                   className={`transition-opacity duration-500 ${
//                     activeIndex === index ? "opacity-100" : "opacity-0 absolute"
//                   }`}
//                 >
//                   <div className="p-1" id={`data-slide-${index}`}>
//                     <div className="flex items-center gap-5">
//                       <Image
//                         alt="slide-icons"
//                         src={item.url}
//                         width={50}
//                         height={50}
//                       />
//                       <h3 className="text-md capitalize text-primary font-extrabold sm:text-2xl">
//                         {item.title}
//                       </h3>
//                     </div>
//                     <p className="text-xl text-[#555555] py-10 inline-block break-words">
//                       {item.description}
//                     </p>
//                   </div>
//                 </CarouselItem>
//               ))}
//             </CarouselContent>

//             {/* Bottom Navigation Dots */}
//             <div className="flex justify-center mt-4">
//               {data.map((_, index) => (
//                 <RxDash
//                   key={index}
//                   fontSize={50}
//                   color={`${activeIndex === index ? "#F54208" : "gray"}`}
//                   //   onClick={() => handleNavigation(index)}
//                 />
//               ))}
//             </div>
//           </Carousel>
//         </div>

//         <div className="w-full sm:w-1/2 items-center justify-center flex ">
//           <div className="feature-images relative ">
//             <Carousel className="w-full ">
//               <CarouselContent>
//                 {images.map((img, index) => (
//                   <CarouselItem
//                     key={index}
//                     className={`transition-opacity duration-500 carousel-item ${
//                       activeIndex === index
//                         ? "opacity-100 "
//                         : "opacity-0 absolute"
//                     }`}
//                   >
//                     <div className="p-1 flex items-center justify-center w-full h-full ">
//                       {/* <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card> */}
//                       <Image
//                         id={`slide-${index}`}
//                         src={img}
//                         alt={`slide`}
//                         width={600}
//                         height={600}
//                         className="w-[400px] h-[400px] object-contain"
//                       />
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               {/* <CarouselPrevious />
//       <CarouselNext /> */}
//             </Carousel>
//             {/* <Image
//             id='slide'
//                 src={images[0]}
//                 alt={`slide`}
//                 width={400}
//                 height={400}
//             /> */}
//             {/* </div>
//     ))} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

"use client";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RxDash } from "react-icons/rx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  // useEffect(() => {
  //   gsap.fromTo(".headline-text",
  //     {
  //       // opacity: 0,
  //        x: 1200 },
  //      {
  //       opacity: 1,
  //     x: 0, // Move text to the left
  //     // duration: 5,
  //     // delay: 1,
  //   // transform:"translateX(-150%)",
  //     scrollTrigger: {
  //       trigger: ".feature-section",
  //       scroller:"body",
  //       start:"top 0%",
  //       end:"top -100%",
  //       scrub:3,
  //       pin:true,
  //       markers:true
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.killAll(); // Cleanup on unmount
  //   };
  // }, []);

  useEffect(() => {
    gsap.fromTo(
      ".headline-text",
      {
        x: 300,
        // opacity:0
      },
      {
        // transform:"translateX(-150%)",
        // x:-20,
        opacity: 1,
        x: "-100%", // Move to the left
        duration: 20, // Adjust speed
        ease: "linear",
        repeat: -1, // Infinite loop
      }
    );
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize the `images` array
  const images = React.useMemo(
    () => [
      "/assets/images/Slide-1.png",
      "/assets/images/Slide-2.png",
      "/assets/images/Slide-3.png",
      "/assets/images/Slide-4.png",
      "/assets/images/Slide-5.png",
    ],
    []
  );

  // Memoize the `data` array
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
          "Connect and collaborate with verified sellers,peers, and service providers without delays.",
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

  const containerRef = useRef(null);

  // useEffect(() => {
  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top 0%",
  //       end: "+=500%",
  //       scrub: 3,
  //       pin: true,
  //       // markers: true,
  //       onUpdate: (self) => {
  //         const progress = Math.floor(self.progress * images.length); // Calculate active index
  //         setActiveIndex(progress);
  //       },
  //     },
  //   });

  // Animate headline text
  // timeline.to(".headline-text", {
  //   x: "-150%", // Move text to the left
  //   duration: 50,
  // });

  // Animate images
  // images.forEach((_, index) => {
  //   timeline.fromTo(
  //     `#slide-${index}`,
  //     { x: 200, opacity: 0 }, // Start from below with 0 opacity
  //     { x: 0, opacity: 1, duration: 1, ease: "power2.out" }, // Animate to its position
  //     index * 1.2 // Stagger delay for sequential appearance
  //   );
  // });

  // data.forEach((_, index) => {
  //   timeline.fromTo(
  //     `#data-slide-${index}`,
  //     { y: 200, opacity: 0 }, // Start from below with 0 opacity
  //     { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, // Animate to its position
  //     index * 1.2 // Stagger delay for sequential appearance
  //   );
  // });
  // }, []);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <div
      ref={containerRef}
      className="w-full my-5 feature-section overflow-hidden feature-section"
    >
      <h2 className="text-center text-secondary text-2xl font-black">
        Features
      </h2>
      <div className="overflow-hidden">
        <h1 className="headline-text whitespace-nowrap overflow-hidden text-ellipsis sm:text-[5rem] text-4xl text-[#ECECEC] font-extrabold leading-tight inline-block">
          TRYSWITCH–YOUR GATEWAY TO OFF-MARKET DEALS.
          {/* TrySwitch – Your Gateway
          to Off-Market Deals. TrySwitch – Your Gateway to Off-Market Deals.
          TrySwitch – Your Gateway to Off-Market Deals. */}
        </h1>
      </div>
      {/* <div className="flex flex-col sm:flex-row"> */}
      {/* <div className="w-full sm:w-1/2 items-center flex slider">
          <Carousel className="w-full">
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem
                  key={index} 
                  className={`relative transition-opacity duration-500 
                     ${ 
                    activeIndex === index ? "opacity-100" : "opacity-0 absolute"
                  } 
                  `}
                 
                >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 100,
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="p-1 absolute w-full"
                  id={`data-slide-${index}`}
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
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
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
        </div> */}
      {/* <div className="w-full sm:w-1/2 items-center justify-center flex">
          <div className="feature-images relative">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className={`transition-opacity duration-500 carousel-item ${
                      activeIndex === index
                        ? "opacity-100 "
                        : "opacity-0 absolute"
                    }`}
                  >
                    <div className="p-1 flex items-center justify-center w-full h-full">
                      <Image
                        id={`slide-${index}`}
                        src={img}
                        alt={`slide`}
                        width={600}
                        height={600}
                        className="w-[400px] h-[400px] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
           
          </div>
        </div> */}
      {/* </div> */}
      <div className="flex flex-col sm:flex-row w-full">
        {/* Text Carousel */}
        <div className="w-full sm:w-1/2 flex items-center slider overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent className="relative">
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className={`transition-all duration-700 transform 
                  ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10 absolute"
                  }
                `}
                >
                  <div className="p-4" id={`data-slide-${index}`}>
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
                    <p className="text-xl text-[#555555] py-5 break-words">
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Dots for Indicators */}
            <div className="flex justify-center mt-4">
              {data.map((_, index) => (
                <RxDash
                  key={index}
                  fontSize={50}
                  color={activeIndex === index ? "#F54208" : "gray"}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Image Carousel */}
        <div className="w-full sm:w-1/2 flex items-center justify-center">
          <div className="feature-images relative overflow-hidden">
            <Carousel className="w-full">
              <CarouselContent className="relative">
                {images.map((img, index) => (
                  <CarouselItem
                    key={index}
                    className={`transition-all duration-700 transform
                    ${
                      activeIndex === index
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-full absolute"
                    }
                  `}
                  >
                    <div className="p-1 flex items-center justify-center w-full h-full">
                      <Image
                        id={`slide-${index}`}
                        src={img}
                        alt={`slide`}
                        width={600}
                        height={600}
                        className="w-[400px] h-[400px] max-md:h-[250px] object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
