'use client'
import React, { useRef,useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
const Logo = ({ ref }: { ref?: any }) => {
    // const logo=useRef(null);
    // useEffect(()=>{
    //   gsap.from(logo.current,{
    //     opacity:0,
    //     y:-10,
    //     delay:1
    //   })},[])
  return (
    // <Button asChild className='bg-transparent '>
    <Link href="/">
      <Image
        ref={ref}
        src="/assets/images/Logo.svg" // Path relative to public folder
        alt="TrySwitch logo"
        width={180}
        height={38}
        priority
      />
      {/* <VscCode className='w-6 h-6' /> */}
    </Link>
    //   </Button>
  );
};

export default Logo;
