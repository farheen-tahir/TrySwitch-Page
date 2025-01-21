'use client'
import React, {useEffect,useRef} from "react";
import Container from "../global/Container";
import CardAbout from "./CardAbout";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutContainerRef=useRef(null)
//   useEffect(()=>{
//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: aboutContainerRef.current,
//         start: 'top 80%', // Trigger animation when the top of the container hits 80% of the viewport
//         end: 'top 20%', // End trigger
//         scrub: 1, // Smooth scroll-based animation
//         markers: true, // Enable markers for debugging
//       },
//     });

//     timeline.fromTo(
//       ['.card-1', '.card-2', '.card-3'],
//       { x: 200, opacity: 0 }, // Starting position for all cards
//       { x: 0, opacity: 1, duration: 2, stagger: 0.5,
//         onComplete: () => animateCardContent() 
        
//        } // Ending position with stagger
//     );
//     const animateCardContent = () => {
//       ['.card-1', '.card-2', '.card-3'].forEach((cardClass, index) => {
//         gsap.timeline()
//           .fromTo(
//             `${cardClass} .inner-content`, // Target inner content inside the card
//             { y: 50, opacity: 0 }, // Starting state
//             { y: 0, opacity: 1, duration: 0.7, delay: index * 0.3,stagger:0.5 } // Animate in sequence
//           );
//       });
//     };
// },[])

// useEffect(() => {
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: aboutContainerRef.current,
//       start: "top 0%", // Trigger animation when the top of the container hits 80% of the viewport
//       end: "top -100%", // End trigger
//       scrub: 1, // Smooth scroll-based animation
//       markers: true, // Enable markers for debugging
//       pin:true
     
//     },
//   });

//   // Step 1: Animate empty cards (text only)
//   timeline.fromTo(
//     [".card-1", ".card-2", ".card-3"],
//     { x: -200, opacity: 0 }, // Starting position for all cards
//     { x: 0, opacity: 1, duration: 5,delay:1, stagger: 0.5 } // Ending position with stagger
//   );

//   // Step 2: Animate phone images inside cards
//   timeline.add(() => {
//     const animations = [
//       { class: ".card-1 .inner-content", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       { class: ".card-2 .inner-content", from: { y: -200, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       { class: ".card-3 .inner-content", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
//     ];

//     animations.forEach((animation, index) => {
//       gsap.fromTo(
//         animation.class,
//         animation.from,
//         { ...animation.to, duration: 1, delay: index * 0.5 }
      
//       );
     
//     });
//   });

//   // return () => {
//   //   ScrollTrigger.kill(); // Clean up GSAP and ScrollTrigger instances on component unmount
//   // };
// }, []);
// useEffect(() => {
// const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: aboutContainerRef.current,
//       start: "top 0%", // Trigger animation when the top of the container hits the viewport
//       end: "top -100%", // End trigger
//       scrub: 1, // Smooth scroll-based animation
//       markers: true, // Enable markers for debugging
//       pin: true, // Pin the container during animation
//     },
//   });

//   // Step 1: Animate empty cards (text only) one by one
//   timeline
//     .fromTo(
//       ".card-1",
//       { x: -200, opacity: 0 }, // Starting position for the first card
//       { x: 0, opacity: 1, duration: 3 } // Animate the first card
//     )
//     .fromTo(
//       ".card-2",
//       { x: -200, opacity: 0 }, // Starting position for the second card
//       { x: 0, opacity: 1, duration: 3 } // Animate the second card
//     )
//     .fromTo(
//       ".card-3",
//       { x: -200, opacity: 0 }, // Starting position for the third card
//       { x: 0, opacity: 1, duration: 3 } // Animate the third card
//     );

//   // Step 2: Animate content inside cards sequentially after all cards are in place
//   const contentAnimations = [
//     { 
//       card: ".card-1",
//       phone: { class: ".card-1 .phone", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       text: { class: ".card-1 .text", from: { opacity: 0 }, to: { opacity: 1 } }
//     },
//     { 
//       card: ".card-2",
//       phone: { class: ".card-2 .phone", from: { y: -200, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       text: { class: ".card-2 .text", from: { opacity: 0 }, to: { opacity: 1 } }
//     },
//     { 
//       card: ".card-3",
//       phone: { class: ".card-3 .phone", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       text: { class: ".card-3 .text", from: { opacity: 0 }, to: { opacity: 1 } }
//     },
//   ];

//   contentAnimations.forEach((animation, index) => {
//     timeline
//       .fromTo(
//         animation.phone.class, // Animate the phone image
//         animation.phone.from,
//         { ...animation.phone.to, duration: 4, 
//           delay: index * 0.5
//          }
//       )
//       .fromTo(
//         animation.text.class, // Animate the text after the phone animation
//         animation.text.from,
//         { ...animation.text.to, duration: 1, delay: 0.3 } // Small delay after phone animation
//       );
//   });
 
// }, []);


// new one 
// useEffect(() => {
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: aboutContainerRef.current,
//       start: "top 0%", // Trigger animation when the top of the container hits the viewport
//       end: "top -100%", // End trigger
//       scrub: 1, // Smooth scroll-based animation
//       markers: true, // Enable markers for debugging
//       pin: true, // Pin the container during animation
//     },
//   });

//   // Check if the screen width is medium or larger
//   const isMediumScreen = window.innerWidth >= 768;

//   // Step 1: Animate empty cards (text only) one by one
//   timeline
//     .fromTo(
//       ".card-1",
//       { x: isMediumScreen ? -200 : 0, y: !isMediumScreen ? -200 : 0, opacity: 0 }, // Adjust position for smaller screens
//       { x: 0, y: 0, opacity: 1, duration: 3 } // Animate the first card
//     )
//     .fromTo(
//       ".card-2",
//       { x: isMediumScreen ? -200 : 0, y: !isMediumScreen ? -200 : 0, opacity: 0 }, // Adjust position for smaller screens
//       { x: 0, y: 0, opacity: 1, duration: 3 } // Animate the second card
//     )
//     .fromTo(
//       ".card-3",
//       { x: isMediumScreen ? -200 : 0, y: !isMediumScreen ? -200 : 0, opacity: 0 }, // Adjust position for smaller screens
//       { x: 0, y: 0, opacity: 1, duration: 3 } // Animate the third card
//     );

//   // Step 2: Animate content inside cards sequentially after all cards are in place
//   const contentAnimations = [
//     { 
//       card: ".card-1",
//       phone: { class: ".card-1 .phone", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       text: { class: ".card-1 .text", from: { opacity: 0 }, to: { opacity: 1 } }
//     },
//     { 
//       card: ".card-2",
//       phone: { class: ".card-2 .phone", from: { y: -200, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       text: { class: ".card-2 .text", from: { opacity: 0 }, to: { opacity: 1 } }
//     },
//     { 
//       card: ".card-3",
//       phone: { class: ".card-3 .phone", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
//       text: { class: ".card-3 .text", from: { opacity: 0 }, to: { opacity: 1 } }
//     },
//   ];

//   contentAnimations.forEach((animation, index) => {
//     timeline
//       .fromTo(
//         animation.phone.class, // Animate the phone image
//         animation.phone.from,
//         { ...animation.phone.to, duration: 4, delay: index * 0.5 }
//       )
//       .fromTo(
//         animation.text.class, // Animate the text after the phone animation
//         animation.text.from,
//         { ...animation.text.to, duration: 1, delay: 0.3 } // Small delay after phone animation
//       );
//   });
// }, []);
  
// let timeline;

useEffect(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: aboutContainerRef.current,
      start: "top -20%", // Trigger animation when the top of the container hits the viewport
      end: "top -100%", // End trigger
      scrub: 1, // Smooth scroll-based animation
      markers: true, // Enable markers for debugging
      pin: true, // Pin the container during animation
    },
  });

  // Check if the screen width is small
  const isSmallScreen = window.innerWidth < 768;

  if (isSmallScreen) {
    // For small screens, animate cards one by one
    const cardAnimations = [
      { card: ".card-1", phone: ".card-1 .phone", text: ".card-1 .text", delay: 0 },
      { card: ".card-2", phone: ".card-2 .phone", text: ".card-2 .text", delay: 0.5 },
      { card: ".card-3", phone: ".card-3 .phone", text: ".card-3 .text", delay: 1 },
    ];

    // Step 1: Animate cards (text and phone) one by one
    cardAnimations.forEach((animation) => {
      timeline
        .fromTo(
          animation.card, // Animate the card itself
          { y: 200, opacity: 0 }, // Starting position
          { y: 0, opacity: 1, duration: 1, delay: 
            animation.delay 
          } // Final position
        )
        .fromTo(
          animation.phone, // Animate the phone image inside the card
          { y: 100, opacity: 0 }, // Starting position for phone
          { y: 0, opacity: 1, duration: 2, delay:  
            animation.delay + 0.3 
          } // Final position for phone
        )
        .fromTo(
          animation.text, // Animate the text inside the card
          { opacity: 0 }, // Starting position for text
          { opacity: 1, duration: 1, delay: 
             animation.delay + 0.6 
            } // Final position for text
        );
    });
  } else {
    // For larger screens, use the previous timeline animation for a simultaneous effect
    timeline
    .fromTo(
      ".card-1",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 8 } // Increased duration for slower animation
    )
    .fromTo(
      ".card-2",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 10 } // Increased duration for slower animation
    )
    .fromTo(
      ".card-3",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 12 } // Increased duration for slower animation
    );
  
  // Slowing down the animations inside the cards
  const contentAnimations = [
    {
      card: ".card-1",
      phone: { class: ".card-1 .phone", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
      text: { class: ".card-1 .text", from: { opacity: 0 }, to: { opacity: 1 } }
    },
    {
      card: ".card-2",
      phone: { class: ".card-2 .phone", from: { y: -200, opacity: 0 }, to: { y: 0, opacity: 1 } },
      text: { class: ".card-2 .text", from: { opacity: 0 }, to: { opacity: 1 } }
    },
    {
      card: ".card-3",
      phone: { class: ".card-3 .phone", from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
      text: { class: ".card-3 .text", from: { opacity: 0 }, to: { opacity: 1 } }
    }
  ];
  
  contentAnimations.forEach((animation, index) => {
    timeline
      .fromTo(
        animation.phone.class, // Animate the phone image
        animation.phone.from,
        { ...animation.phone.to, duration: 6, delay: index * 0.8 } // Slower animation and longer delay
      )
      .fromTo(
        animation.text.class, // Animate the text after the phone animation
        animation.text.from,
        { ...animation.text.to, duration: 3, delay: 0.5 } // Slower animation and slight delay
      );
  });
  
  }
}, []);



return (
    <div className="w-full my-5 h-auto mb-[16rem]" ref={aboutContainerRef}>
      <h2 className="mx-auto text-center text-3xl font-black py-5">
        Why{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A0EA6] to-[#F54208]">
          TrySwitch
        </span>
        ?
      </h2>
      <Container className="bg-custom-image h-[24rem] p-0 rounded-xl bg-cover bg-center  "  >
        <div className="relative w-full flex-col md:flex-row  mx-auto top-1/2 justify-center flex md:justify-around items-start   gap-10 pb-2 overflow-hidden" >
          <CardAbout className="card-1" imgString="/assets/images/FirstAbout.png" 
          // timeline={timeline}
          />
          <CardAbout className="card-2" imgString="/assets/images/SecondAbout.png" 
          // timeline={timeline}
          />
          <CardAbout className="card-3" imgString="/assets/images/ThirdAbout.png" 
          // timeline={timeline}
          />
        </div>
      </Container>
     

    </div>

  

  );
};

export default About;
