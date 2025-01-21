// 'use client'
import About from "@/components/about/About";
import Community from "@/components/community/Community";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
// import { useEffect, useState } from "react";


// Loader Component
const Loader = () => (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-800  z-50"
  // className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
  >
    <div className="spinner-border animate-spin border-4 border-t-4 border-t-transparent rounded-full w-16 h-16"></div>
  </div>
);
export default function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 200); // Adjust the duration to match your needs

//     return () => clearTimeout(timer); // Clean up the timer
//   }, []);
  return (

    <>
    
    <section>
        <Hero />
    </section>
    <section className="xxs:h-[131rem] xs:h-[145rem] sm:h-[151rem]  md:h-auto">
    <About />
    </section>
    <section>
    <Features />
     
    </section>
    <section>
      <Community />
    </section>
    <section>
      <Contact />
    </section>
    
    </>
  );
}
