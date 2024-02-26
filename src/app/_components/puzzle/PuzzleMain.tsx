/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import React, { useEffect, useState } from "react";
import { PuzzleInputBox } from "./PuzzleInputBox";
import { PuzzleSubmitButton } from "./PuzzleSubmitButton";
import { IoSend } from "react-icons/io5";
import { api } from "~/trpc/react";
import Markdown from "react-markdown";

interface PuzzleMainProps {
  puzzleId: string;
}

export const PuzzleMain: React.FC<PuzzleMainProps> = ({ puzzleId }) => {
  const [part1, setPart1] = useState(true);

  const puzzleDescription = api.puzzle.getPuzzleByid.useQuery({
    puzzleID: puzzleId.toString(),
    part: part1 ? "1" : "2",
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container flex flex-col px-4 py-16 ">
        <h2 className="py-4 text-4xl font-extrabold tracking-tight">
          PUZZLE TITLE - Part {part1 ? "1" : "2"}
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
            {puzzleDescription.data ? puzzleDescription.data : "Loading"}
          </Markdown>
        </div>
        <div className="my-8 flex">
          <PuzzleInputBox />
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
