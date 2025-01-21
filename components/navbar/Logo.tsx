"use client";
import React, { forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";

type LogoProps = React.RefAttributes<HTMLDivElement>;

const Logo = forwardRef<HTMLDivElement, LogoProps>((props, ref) => {
  return (
    <div ref={ref}>
      <Link href="/">
        <Image
          src="/assets/images/Logo.svg" // Path relative to the public folder
          alt="TrySwitch logo"
          width={180}
          height={38}
          priority
        />
      </Link>
    </div>
  );
});

// Assign a displayName for debugging purposes
Logo.displayName = "Logo";

export default Logo;
