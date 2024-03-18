import Link from "next/link";
import React, { type FC } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { type Puzzle } from "types/types";
import { deSlugTitle } from "~/utils/utils";

type ProgressCardProps = {
  puzzle: Puzzle;
};
export const ProgressCard: FC<ProgressCardProps> = async ({ puzzle }) => {
  const { collection, puzzleName, puzzleNumber } = puzzle;

  return (
    <Link
      className=" rounded-lg border-2 border-transparent bg-gray-200 p-2 text-gray-800 hover:border-2 hover:border-yellow-400"
      href={`/puzzles/${collection}/${puzzleNumber}`}
    >
      <div className="text-center text-lg">{deSlugTitle(puzzleName).replace(" ", ". ")}</div>
      <div className="flex justify-between font-bold">
        <div className="m-2 flex flex-col items-center justify-center ">
          Part 1
          {puzzle.UserSolution[0]?.part_1_complete ? (
            <FaRegCheckCircle className="text-4xl text-green-600" />
          ) : (
            <FaRegCircle className="text-4xl text-orange-500" />
          )}
        </div>
        <div className="m-2 flex flex-col items-center justify-center">
          Part 2
          {puzzle.UserSolution[0]?.part_2_complete ? (
            <FaRegCheckCircle className="text-4xl text-green-600" />
          ) : (
            <FaRegCircle className="text-4xl text-orange-500" />
          )}
        </div>
      </div>
    </Link>
  );
};
