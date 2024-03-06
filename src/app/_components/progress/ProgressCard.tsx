import Link from "next/link";
import React, { type FC } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { type Puzzle } from "types/types";
import { deSlugTitle } from "~/utils/utils";

type ProgressCardProps = {
  puzzle: Puzzle;
};
export const ProgressCard: FC<ProgressCardProps> = async ({ puzzle }) => {
  const { collection, puzzleNumber } = puzzle;

  return (
    <Link
      className=" rounded-lg border-2 border-transparent bg-gray-200 p-2 text-gray-800 hover:border-2 hover:border-yellow-400"
      href={`/puzzle/${collection}/${puzzleNumber}`}
    >
      <div className="flex justify-center font-bold">
        {deSlugTitle(collection || "")}
      </div>
      <div>Puzzle No.{puzzleNumber}</div>
      <div className="flex justify-between">
        <div className="m-2 flex flex-col items-center justify-center">
          Part 1
          {puzzle.UserSolution[0]?.part_1_complete ? (
            <FaRegCheckCircle />
          ) : (
            <FaRegCircle />
          )}
        </div>
        <div className="m-2 flex flex-col items-center justify-center">
          Part 2
          {puzzle.UserSolution[0]?.part_2_complete ? (
            <FaRegCheckCircle />
          ) : (
            <FaRegCircle />
          )}
        </div>
      </div>
    </Link>
  );
};
