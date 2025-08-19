"use client";
import React, { useEffect, useRef } from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SignUpButton from "./SignUpButton";
import LinksDropDown from "./LinksDropDown";
import gsap from "gsap";

const Navbar = () => {
  const logo = useRef(null);
  const linksRef = useRef(null);
  const navBtn = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.from([logo.current, ".nav-link", navBtn.current], {
      opacity: 0,
      y: -40,
      delay: 0.7,
      duration: 1,
      stagger: 0.15,
    });
  }, []); // No need to include `tl` here, as it is now defined within the effect.

  return (
    <nav 
    // className="sticky top-0 z-50  bg-white"
    >
      <Container className="flex flex-row justify-between sm:items-center py-6 flex-wrap ">
        <Logo ref={logo} />
        <div className="flex items-center">
          <div className="hidden [@media(min-width:856px)]:flex gap-4">
            <NavLinks ref={linksRef} />
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
