"use client";

import React, {
  useState,
  useEffect,
  type SetStateAction,
  type Dispatch,
} from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";

const HintModal = ({
  children,
  clickPos,
  hintInfo,
  setHintClick,
}: {
  children?: React.ReactNode;
  clickPos: { x: number; y: number };
  hintInfo: {
    keyword: string;
    smallHint: string;
    hintLink: string;
  };
  setHintClick: Dispatch<SetStateAction<boolean>>;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const modalContent = (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      style={{ left: `${clickPos.x}px`, top: `${clickPos.y}px` }}
      className="absolute mr-2 mt-20 flex flex-col rounded-lg bg-gray-300 p-2 text-gray-900"
    >
      {hintInfo.smallHint}
      <Link
        target="_blank"
        className="w-fit text-sm font-bold "
        href={hintInfo.hintLink}
        onClick={() => setHintClick(false)}
      >
        Read more...
      </Link>

      {children}
    </motion.div>
  );

  return mounted ? createPortal(modalContent, document.body) : null;
};

export default HintModal;
