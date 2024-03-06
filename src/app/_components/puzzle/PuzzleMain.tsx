import React from "react";
import Part from "./Part";
import GetInput from "./GetInput";

interface PuzzleMainProps {
  puzzleInfo: {
    puzzleId: string;
    part_1_complete: boolean | null;
    part_2_complete: boolean | null;
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
          {deSlugTitle(puzzleInfo.puzzle.collection)} - Part 1
        </h2>
        <div>
          <h3>Part - 1</h3>
          <Part
            instructions={puzzleInfo.puzzle.part1Instructions}
            partNumber={1}
            inputId={puzzleInfo.input.id}
            puzzleCollection={puzzleInfo.puzzle.collection}
            puzzleNumber={puzzleInfo.puzzle.puzzleNumber}
            solution={
              puzzleInfo.part_1_complete ? puzzleInfo.input.answerPart1 : null
            }
          />
        </div>
        {puzzleInfo.part_1_complete && (
          <div>
            <h3>Part - 2</h3>
            <Part
              instructions={puzzleInfo.puzzle.part2Instructions}
              partNumber={2}
              inputId={puzzleInfo.input.id}
              solution={
                puzzleInfo.part_2_complete ? puzzleInfo.input.answerPart2 : null
              }
              puzzleCollection={puzzleInfo.puzzle.collection}
              puzzleNumber={puzzleInfo.puzzle.puzzleNumber}
            />
          </div>
        )}
        <div className=" self-start">
          <GetInput
            input={puzzleInfo.input.input}
            part_1_complete={puzzleInfo.part_1_complete}
          />
        </div>
      </div>
    </div>
  );
};
