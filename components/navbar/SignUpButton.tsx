import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const SignUpButton = ({ ref }: { ref?: React.Ref<HTMLButtonElement> }) => {
  return (
    <Button
      ref={ref}
      asChild
      variant="outline"
      //   size="icon"

      className="flex justify-center items-center relative bg-secondary hover:bg-primary"
    >
      <Link href="/signup">
        <span className="text-white">Sign Up</span>
        {/* <span 
        className=" bg-primary text-white w-6 h-6 items-center justify-center flex rounded-full text-xs"
        >
        Sign Up
        </span> */}
      </Link>
    </Button>
  );
};

export default SignUpButton;
