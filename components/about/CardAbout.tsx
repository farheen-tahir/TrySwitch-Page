'use client'
import React, {useEffect}from "react";
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

const CardAbout = ({ className,imgString,timeline }: { className?: string,imgString:string,timeline?:any }) => {
  const isFooterContent = className?.includes("card-2");

  return (
    <Card className={cn("bg-[#f5f5f5] h-[26rem] w-60 mx-auto md:w-72  md:m-0 flex justify-between items-center flex-col", className)}>
      {isFooterContent ? (
        <div className="inner-content  flex flex-col justify-between">
          <CardContent className="flex items-center justify-center h-full py-0 my-0 ">
            <Image
              priority
              width={250}
              height={150}
              alt="phone.png"
              src={imgString}
              className="w-[16rem] object-cover bg-about-image bg-contain bg-center phone"
            />
          </CardContent>
          <CardFooter className="text-center flex flex-col text">
            <CardTitle className="w-full">Trusted Connections</CardTitle>
            <CardDescription className="w-full">Verified sellers, secure investments.</CardDescription>
          </CardFooter>
        </div>
      ) : (
        <div className="inner-content  flex flex-col justify-between">
          <CardHeader className="text-center text">
            <CardTitle >Trusted Connections</CardTitle>
            <CardDescription >Verified sellers, secure investments.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center h-full py-0 my-0 ">
            <Image
              priority
              width={400}
              height={400}
              alt="phone.png"
              src={imgString}
              className="w-[12rem] md:w-[16rem] absolute bottom-0 object-cover 
           
               bg-contain bg-center phone"
            />
          </CardContent>
        </div>
      )}
    </Card>
  );
};

export default CardAbout;
