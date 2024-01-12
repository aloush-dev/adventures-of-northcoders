import React from "react";

export const PuzzleSubmitButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <button className="flex items-center justify-center rounded-lg bg-gray-200 mx-2 p-2 text-gray-600">
      {children}
    </button>
  );
};
