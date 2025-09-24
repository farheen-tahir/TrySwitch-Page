"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type ModalType = "terms" | "privacy";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
  const [md, setMd] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    fetch(`/assets/content/${type}.txt`)
      .then((res) => res.text())
      .then(setMd)
      .catch((err) => console.error("Error loading markdown:", err));
  }, [isOpen, type]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-2xl rounded-lg shadow-lg p-6 overflow-y-auto max-h-[80vh]">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
          {type === "terms" ? "Terms & Conditions" : "Privacy Policy"}
        </h2>

        <div className="overflow-y-auto break-words max-h-[56vh] prose prose-slate text-justify">
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

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-[var(--color-primary)]"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-8 py-2 rounded-lg bg-[linear-gradient(to_bottom,_#270AAD,_#583FCB)] text-white "
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
