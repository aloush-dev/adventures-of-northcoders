import Link from "next/link";
import React from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { puzzleNameToSlug } from "~/models/utils";

export const ProgressCard = ({
  solution,
}: {
  solution: {
    id: number;
    userId: number;
    timeOpened?: Date;
    day: number;
    puzzleName: string;
    part_1_complete: boolean;
    part_2_complete: boolean;
    part_1_solution?: number | null;
    part_2_solution?: number | null;
    part_1_time_of_completion?: Date | null;
    part_2_time_of_completion?: Date | null;
  };
}) => {
  return (
    <div className="rounded-lg bg-gray-200 p-2 text-gray-800">
      <Link href={`/puzzle/${puzzleNameToSlug(solution.puzzleName)}`}>
        <div className="flex justify-center font-bold">
          {solution.puzzleName}
        </div>
        <div className="flex justify-center font-medium">
          Day : {solution.day}
        </div>
        <div className="flex justify-between">
          <div className="m-2 flex flex-col items-center justify-center">
            Part 1
            {solution.part_1_complete ? <FaRegCheckCircle /> : <FaRegCircle />}
          </div>
          <div className="m-2 flex flex-col items-center justify-center">
            Part 2
            {solution.part_2_complete ? <FaRegCheckCircle /> : <FaRegCircle />}
          </div>
        </div>
      </Link>
    </div>
  );
};
