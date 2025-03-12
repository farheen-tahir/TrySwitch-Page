"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, [pathname]); // Runs on route change

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
<div className="wrap">
  <div className="loading">
    <div className="bounceball"></div>
    <div className="text">NOW LOADING</div>
  </div>
</div>
</div>
  );
};

export default Loader;
