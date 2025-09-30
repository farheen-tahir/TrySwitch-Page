'use client';
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const Page = () => {
  const [md, setMd] = useState("");

  useEffect(() => {
    fetch(`/assets/content/privacy.txt`)
      .then((res) => res.text())
      .then(setMd)
      .catch((err) => console.error("Error loading markdown:", err));
  }, []);
  return (
    <div>
      {" "}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="text-[#270AAD] font-semibold py-2" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-[#270AAD] font-semibold py-2" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-[#270AAD] font-semibold py-2" {...props} />
          ),
          h4: ({ ...props }) => (
            <h4 className="text-[#270AAD] font-semibold py-2" {...props} />
          ),
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  );
};

export default Page;
