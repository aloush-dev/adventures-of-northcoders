"use client";

import React, { type ChangeEvent, useState } from "react";

export const PuzzleInputBox = ({ part }: { part: number }) => {
  const [input, setInput] = useState<string>("");

  return (
    <input
      className="remove-arrow rounded-lg bg-gray-200 p-2 text-gray-600"
      value={input}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
      }}
      type="text"
    ></input>
  );
};
