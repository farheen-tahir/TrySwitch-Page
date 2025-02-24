import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const CardAbout = ({
  className,
  imgString,
  title,
  desc,
}: {
  className?: string;
  imgString: string;
  title:string;
  desc:string;

}) => {
  const isFooterContent = className?.includes("card-2");

  return (
    <Card
      className={cn(
        "about-card bg-[#f5f5f5] h-[26rem] w-60 mx-auto md:w-72  md:m-0 flex justify-between items-center flex-col",
        className
      )}
    >
      {isFooterContent ? (
        <div className="inner-content contents  flex-col justify-between">
          <CardContent className="card-content w-full relative flex items-center justify-center h-full py-0 my-0 ">
            {/* <Image
              priority
              width={250}
              height={150}
              alt="phone.png"
              src={imgString}
              className="w-[22rem] object-cover bg-about-image bg-contain bg-center phone"
            /> */}
              <Image
              priority
              width={400}
              height={400}
              alt="phone.png"
              src={imgString}
              className="about-img about-opposite-img w-[22rem] top-[-2%] md:w-[20rem] absolute bottom-0 object-cover 
           
               bg-contain bg-center phone"
            />
          </CardContent>
          <CardFooter className="text-center flex flex-col text">
            <CardTitle className="card-title w-full text-[20px]">{title}</CardTitle>
            <CardDescription className="card-description w-full text-[16px] px-0 py-2">
              {desc}
            </CardDescription>
          </CardFooter>
        </div>
      ) : (
        <div className="inner-content  flex flex-col justify-between">
          <CardHeader className="card-header text-center text">
            <CardTitle className="card-title text-[20px]">Trusted Connections</CardTitle>
            <CardDescription className="card-description text-[16px] px-0 py-2">
              Verified sellers, secure investments.
            </CardDescription>
          </CardHeader>
          <CardContent className="card-content flex items-center justify-center h-full py-0 my-0 ">
            <Image
              priority
              width={400}
              height={400}
              alt="phone.png"
              src={imgString}
              className="about-img w-[22rem] md:w-[20rem] absolute bottom-0 object-cover 
           
               bg-contain bg-center phone"
            />
          </CardContent>
        </div>
      )}
    </Card>
  );
};

export default CardAbout;
