"use client";

import React from "react";
import type { PropsWithChildren } from "react";

type MainButtonProps = {
  onClick: () => void;
  disabled?: boolean | undefined
};

const MainButton: React.FC<PropsWithChildren<MainButtonProps>> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      className="flex items-center justify-center rounded-lg bg-gray-200 p-2 font-semibold text-gray-600"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MainButton;
