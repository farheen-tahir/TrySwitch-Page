import React from "react";
import Image from "next/image";

const Solutions = () => {
  return (
    <div className="bg-gradient-to-r flex flex-col md:flex-row h-auto md:h-[25rem] from-[#270AAD] to-[#D9D2FC] py-6 px-4 md:px-6 my-20 rounded-xl max-w-[65rem] mx-0 ">
      <div className="w-full md:w-[65%] ">
        <h1 className="text-4xl font-black text-white py-2 md:text-start text-center">
          Solutions
        </h1>
        <p className="text-xl max-sm:text-sm  text-white pt-[1rem] pr-7  md:text-start text-center">
          TrySwitch simplifies real estate investing by connecting you with
          verified sellers and tools to manage listings, build networks, and
          communicate efficiently. For off-market sellers, it’s easy to list
          properties, grow your audience, and track performance. Collaborate,
          share documents, schedule tasks, and automate workflows—all in one
          app. Boost your business with targeted marketing and streamlined
          communication.
        </p>
      </div>
      <div
        className="max-w-[90%] md:max-w-[20rem] relative md:absolute md:left-[50rem] self-center max-md:mt-5 lg:left-[55rem] "
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
        <div className="max-md:hidden w-[20rem] h-[20rem] bg-gradient-to-r from-[#270AAD] to-[#D9D2FC] z-10 absolute left-0 top-0 rounded-xl custom-transform"></div>
        <div className="max-md:hidden w-[20rem] h-[20rem] bg-gradient-to-r from-[#270AAD] to-[#D9D2FC] z-0 absolute left-0 top-0 rounded-xl custom-transform2"></div>
      </div>
    </div>
  );
};

export default Solutions;
