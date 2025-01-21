'use client'
import React, { useEffect, useRef } from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SignUpButton from "./SignUpButton";
import LinksDropDown from "./LinksDropDown";
import gsap from "gsap";
// import NavSearch from './NavSearch'
// import CartButton from './CartButton'
// import DarkMode from './DarkMode'
// import LinksDropDown from './LinksDropDown'

const Navbar = () => {
  const logo=useRef(null);
  const linksRef = useRef(null);
  const navBtn=useRef(null);
  const tl=gsap.timeline()
  useEffect(()=>{
    // tl.from(logo.current,{
    //   opacity:0,
    //   y:-10,
    //   delay:1
    // })
    // tl.from(".nav-link", {
    //   opacity: 0,
    //   y: -30,
    //   duration: 1,
    //   stagger: 0.2,
    // });
    tl.from([logo.current,".nav-link",navBtn.current],{
      opacity:0,
      y:-40,
      delay:0.7,
      duration:1,
      stagger:0.15
    })
  },[])
  return (
    <nav
    // className="flex items-center justify-between py-6 px-6"
    >
      {/* <Logo />
      <div className="flex justify-center items-center gap-4">
        <NavLinks />
        <SignUpButton />
      </div> */}

      <Container className="  flex flex-row justify-between sm:items-center py-6 flex-wrap">
        <Logo ref={logo}/>
        
        <div className="flex items-center">
          <div className="hidden [@media(min-width:856px)]:flex gap-4">
          <NavLinks ref={linksRef}/>
            <SignUpButton ref={navBtn} />
          </div>
          <div className="flex [@media(min-width:856px)]:hidden ">
            <LinksDropDown />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
