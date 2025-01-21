"use client";
import React, { forwardRef } from "react";

import { links } from "@/utils/links";


type NavLinksProps = React.RefAttributes<HTMLAnchorElement>;

const NavLinks = forwardRef<HTMLAnchorElement, NavLinksProps>((props, ref) => {
  return (
    <div className="flex gap-6 items-center">
      {links?.map((link) => (
        <a
          ref={ref}
          href={link.href}
          key={link.label}
          className="text-primary font-bold nav-link"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
});

// Assign a display name for debugging purposes
NavLinks.displayName = "NavLinks";

export default NavLinks;
