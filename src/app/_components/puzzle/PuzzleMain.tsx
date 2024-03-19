"use client";

import React, { useState } from "react";
import Part from "./Part";
import GetInput from "./GetInput";
import { deSlugTitle } from "~/utils/utils";
import MainButton from "../ui/MainButton";
import Confetti from "react-confetti";
import Link from "next/link";

interface PuzzleMainProps {
  puzzleInfo: {
    puzzleId: string;
    part_1_complete: boolean;
    part_2_complete: boolean;
    part_1_time_of_completion: Date | null;
    part_2_time_of_completion: Date | null;
    timeOpened: Date | null;
    input: {
      answerPart1: string | null;
      answerPart2: string | null;
      input: string;
      id: string;
    };
    puzzle: {
      collection: string;
      puzzleNumber: number;
      part1Instructions: string;
      part2Instructions: string;
      completedCount: number;
      createdBy: number | null;
      createdAt: Date;
      puzzleName: string;
    };
  };
}

export const PuzzleMain: React.FC<PuzzleMainProps> = ({ puzzleInfo }) => {
  const [part2Selected, setPart2Selected] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <>
      <Link
        className="m-6 flex w-fit items-center justify-center rounded-lg bg-gray-200 p-2 font-semibold text-gray-600"
        href="/puzzles"
      >
        Back to all puzzles
      </Link>
      <div className="flex flex-col items-center justify-center bg-gray-800 text-white">
        {showConfetti && <Confetti />}

        <div className="container flex flex-col px-4 py-16 ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center gap-2">
              <MainButton onClick={() => setPart2Selected(false)}>
                Part 1
              </MainButton>
              <MainButton
                disabled={!puzzleInfo.part_1_complete}
                onClick={() => setPart2Selected(true)}
              >
                Part 2
              </MainButton>
            </div>
            <div className="my-2 text-sm font-extrabold">
              {puzzleInfo.part_1_complete
                ? ""
                : "Complete part 1 to access part 2"}
            </div>
          </div>

          <div className="my-4">
            <h2 className="py-4 text-4xl font-extrabold tracking-tight">
              {deSlugTitle(puzzleInfo.puzzle.puzzleName)} - Part{" "}
              {part2Selected ? 2 : 1}
            </h2>
            <div>
              <GetInput
                input={puzzleInfo.input.input}
                part_1_complete={puzzleInfo.part_1_complete}
              />
              <div className="my-2 text-sm font-extrabold">
                Both parts share the same input
              </div>
            </div>
          </div>
          <div>
            {part2Selected ? (
              <div>
                <Part
                  instructions={puzzleInfo.puzzle.part2Instructions}
                  partNumber={2}
                  inputId={puzzleInfo.input.id}
                  solution={
                    puzzleInfo.part_2_complete
                      ? puzzleInfo.input.answerPart2
                      : null
                  }
                  puzzleCollection={puzzleInfo.puzzle.collection}
                  puzzleNumber={puzzleInfo.puzzle.puzzleNumber}
                  setShowConfetti={setShowConfetti}
                />
              </div>
            ) : (
              <div>
                <Part
                  setShowConfetti={setShowConfetti}
                  instructions={puzzleInfo.puzzle.part1Instructions}
                  partNumber={1}
                  inputId={puzzleInfo.input.id}
                  puzzleCollection={puzzleInfo.puzzle.collection}
                  puzzleNumber={puzzleInfo.puzzle.puzzleNumber}
                  solution={
                    puzzleInfo.part_1_complete
                      ? puzzleInfo.input.answerPart1
                      : null
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
