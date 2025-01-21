import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
const GButton = ({
  className,
  ref,
  img,
  text,
}: {
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
  img?: string;
  text: string;
}) => {
  return (
    <Button
      ref={ref}
      asChild
      className={cn(
        "flex justify-center items-center   h-14 w-40  ",
        className
      )}
    >
      <Link href="#" className="flex gap-4 items-center">
        <Image
          src={img || ""}
          alt="download app icons"
          width={30}
          height={20}
          priority
        />
        <span className="text-xs font-extralight ">
          Get It On <br />
          <span className="text-base font-semibold">{text}</span>
        </span>
      </Link>
    </Button>
  );
};

export default GButton;
