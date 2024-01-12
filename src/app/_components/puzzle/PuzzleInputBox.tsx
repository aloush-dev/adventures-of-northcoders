"use client";

import React, { type ChangeEvent, useState } from "react";

export function PuzzleInputBox() {
  const [input, setInput] = useState<number>(0);

  return (
    <input
      className="remove-arrow rounded-lg p-2 bg-gray-200 text-gray-600"
      value={input}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setInput(parseInt(e.target.value));
      }}
      type="number"
    ></input>
  );
}
