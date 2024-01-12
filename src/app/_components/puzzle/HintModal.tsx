"use client";

import React, { type SetStateAction, type Dispatch } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const HintModal = ({
  hintClick,
  children,
  clickPos,
  hintInfo,
  setHintClick,
}: {
  hintClick: boolean;
  children?: React.ReactNode;
  clickPos: { x: number; y: number };
  hintInfo: {
    keyword: string;
    smallHint: string;
    hintLink: string;
  };
  setHintClick: Dispatch<SetStateAction<boolean>>;
}) => {
  const modalContent = (
    <AnimatePresence>
      {hintClick && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        //   transition={{ ease: "easeOut", duration: 0.5 }}
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
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default HintModal;
