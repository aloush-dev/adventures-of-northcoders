import { useState } from "react";

export const useHintClick = () => {
  const [hintClick, setHintClick] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleHintClick = (event) => {
    setClickPos({ x: event.clientX, y: event.clientY - 140 });
    setHintClick(!hintClick);
  };

  return {
    hintClick,
    setHintClick,
    clickPos,
    handleHintClick,
  };
};
