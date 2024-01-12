"use client";

import React from "react";
import { useHintClick } from "~/app/_hooks/useHintClick";
import HintModal from "./HintModal";

export const HintButton = ({
  hint,
  children,
}: {
  hint: {
    keyword: string;
    smallHint: string;
    hintLink: string;
  };
  children: React.ReactNode;
}) => {
  const { handleHintClick, setHintClick, clickPos, hintClick } = useHintClick();

  return (
    <button onClick={handleHintClick} className="font-extrabold">
      {children}
      {hintClick && (
        <HintModal
          setHintClick={setHintClick}
          hintInfo={hint}
          clickPos={clickPos}
        />
      )}
    </button>
  );
};
