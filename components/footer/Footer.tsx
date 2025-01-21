import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import GradientIcon from "./GradientIcon";
const Footer = () => {
  return (
    <footer className="shadow-2xl">
      <div className="w-full flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 px-8 lg:px-32 py-10 max-sm:py-4">
          <Image
            src="/assets/images/Logo.svg"
            alt="TrySwitch logo"
            width={175}
            height={36}
            priority
          />
          <div className="pt-5 mx-auto flex gap-10 text-gray-800 font-bold max-sm:text-[0.875rem]">
            <p>Learn</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div className="flex space-x-4 pt-5 max-sm:justify-evenly">
            <GradientIcon Icon={FaFacebook} className="h-9 w-9" />
            <GradientIcon Icon={RiInstagramFill} className="h-9 w-10" />
            <GradientIcon Icon={FaLinkedin} className="h-9 w-8" />
            <GradientIcon Icon={FaXTwitter} className="h-9 w-8" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-8 lg:px-32 py-10 max-sm:py-4">
          <h4 className="font-semibold py-3 text-transparent bg-clip-text bg-gradient-to-r from-[#2A0EA6] to-[#F54208]">
            Subscribe to get new updates & offers.
          </h4>

          <div className="relative w-full">
            <Input
              type="email"
              placeholder="Enter your email address here"
              className="rounded-xl h-10 pl-4 pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              <IoIosArrowForward className="h-5 w-5" color="#2A0EA6" />
            </button>
          </div>
          <div className="flex items-center space-x-2 py-5">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs text-gray-500 font-medium leading-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By checking this box, you agree to receive updates, news, and
              exclusive offers from us. You can unsubscribe at any time.
            </label>
          </div>
        </div>
      </div>

      <div className="flex w-full mx-auto gap-3 justify-center items-center text-sm py-3 text-slate-700 flex-wrap ">
        <p>Disclaimer</p>
        <p className="text-lg text-slate-700 writing-mode-vertical-rl">|</p>
        <p>Warranties</p>
        <p className="text-lg text-slate-700 writing-mode-vertical-rl">|</p>
        <p>Guaranties</p>
        <p className="text-lg text-slate-700 writing-mode-vertical-rl">|</p>
        <p>Disclosures</p>
      </div>

      <div className="w-full bg-gradient-to-t from-[#2A0EA6] to-[#F54208] py-3">
        <p className="text-center text-white">
          Copyright © 2024 TrySwitch, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
