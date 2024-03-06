import React from "react";
import type { PropsWithChildren } from "react";

type MainButtonProps = {
  onClick: () => void;
};

const MainButton: React.FC<PropsWithChildren<MainButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="mx-2 flex items-center justify-center rounded-lg bg-gray-200 p-2 font-semibold text-gray-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MainButton;
