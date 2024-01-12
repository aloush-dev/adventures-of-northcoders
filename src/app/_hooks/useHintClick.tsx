import { useState, type MouseEvent } from "react";

interface HintClickHook {
  hintClick: boolean;
  setHintClick: React.Dispatch<React.SetStateAction<boolean>>;
  clickPos: { x: number; y: number };
  handleHintClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const useHintClick = (): HintClickHook => {
  const [hintClick, setHintClick] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const handleHintClick = (event: MouseEvent<HTMLButtonElement>) => {
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
