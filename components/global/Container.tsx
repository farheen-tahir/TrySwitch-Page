import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
  ref,
}: {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto  max-w-6xl lg:max-w-screen-2xl xl:w-full  px-8 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
