
'use cleint';
import Link from 'next/link'
import React, { forwardRef } from 'react'

import { links } from '@/utils/links'

const NavLinks = ({ref}:{ref?:any}) => {
  return (
    <div className="flex gap-6 items-center">
      {links?.map((link, index) => (
        <a
        ref={ref}
          // ref={(el) => {
          //   if (ref && typeof ref === "object" && ref.current) {
          //     ref.current[index] = el; // Assign element to ref array
          //   }
          // }}
          href={link.href}
          key={link.label}
          className="text-primary font-bold nav-link"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};


export default NavLinks