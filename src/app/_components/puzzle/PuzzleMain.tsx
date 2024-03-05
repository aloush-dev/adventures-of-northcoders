/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useState } from "react";
import { PuzzleInputBox } from "./PuzzleInputBox";
import { PuzzleSubmitButton } from "./PuzzleSubmitButton";
import { IoSend } from "react-icons/io5";
import Markdown from "react-markdown";

interface PuzzleMainProps {
  puzzleInfo: {
    collection: string;
    puzzleNumber: number;
    part1Instructions: string;
    part2Instructions: string;
    openedCount: number;
    completedCount: number;
    createdAt: Date;
    createdBy: number | null;
  };
}

export const PuzzleMain: React.FC<PuzzleMainProps> = ({ puzzleInfo }) => {
  const [part1, setPart1] = useState(true);

  const deSlugTitle = (slug: string): string => {
    const words = slug.split("-");

    const titleCase = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return titleCase;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container flex flex-col px-4 py-16 ">
        <h2 className="py-4 text-4xl font-extrabold tracking-tight">
          {deSlugTitle(puzzleInfo.collection)} - Part {part1 ? "1" : "2"}
        </h2>

        <div className="flex justify-center p-6">
          <button
            onClick={() => setPart1(true)}
            className="mx-2 flex items-center justify-center rounded-lg bg-gray-200 p-2 font-semibold text-gray-600"
          >
            Part 1
          </button>
          <button
            onClick={() => setPart1(false)}
            className="mx-2 flex items-center justify-center rounded-lg bg-gray-200 p-2 font-semibold text-gray-600"
          >
            Part 2
          </button>
        </div>

        <div className="whitespace-pre-wrap">
          <Markdown>
            {part1
              ? puzzleInfo.part1Instructions
              : puzzleInfo.part2Instructions}
          </Markdown>
        </div>
        <div className="my-8 flex">
          <PuzzleInputBox part={part1 ? 1 : 2} />
          <PuzzleSubmitButton>
            Submit
            <div className="px-2 text-xl">
              <IoSend />
            </div>
          </PuzzleSubmitButton>
        </div>
      </div>
    </div>
  );
};
