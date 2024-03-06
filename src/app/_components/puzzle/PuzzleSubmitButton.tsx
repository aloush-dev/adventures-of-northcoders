import React, { type FC, type PropsWithChildren } from "react";

export const PuzzleSubmitButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button
      className={`
    mx-2 flex items-center justify-center 
    rounded-lg bg-gray-200 p-2 
    font-semibold text-gray-600
    `}
      type="submit"
    >
      {children}
    </button>
  );
};
