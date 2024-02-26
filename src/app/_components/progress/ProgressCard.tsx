"use client";

import Link from "next/link";
import React from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { puzzleNameToSlug } from "~/models/utils";
import { api } from "~/trpc/react";

const emptyUserSolution = {
  id: "Int",
  user: "User",
  userId: "Int",
  timeOpened: "DateTime",
  day: "Int",
  puzzleName: "String",
  part_1_complete: false,
  part_2_complete: false,
  part_1_solution: "Int",
  part_2_solution: "Int",
  part_1_time_of_completion: "DateTime",
  part_2_time_of_completion: "DateTime",
};

export const ProgressCard = () => {
  const { data } = api.user.getUserSolution.useQuery(1);

  const userData = data ?? emptyUserSolution;

  if (!userData) return <p>loading...</p>;

  return (
    <div className=" rounded-lg border-2 border-transparent bg-gray-200 p-2 text-gray-800 hover:border-2 hover:border-yellow-400">
      <Link href={`/puzzle/${puzzleNameToSlug(userData.puzzleName)}`}>
        <div className="flex justify-center font-bold">
          {userData.puzzleName}
        </div>
        <div className="flex justify-center font-medium">
          Day : {userData.day}
        </div>
        <div className="flex justify-between">
          <div className="m-2 flex flex-col items-center justify-center">
            Part 1
            {userData.part_1_complete ? <FaRegCheckCircle /> : <FaRegCircle />}
          </div>
          <div className="m-2 flex flex-col items-center justify-center">
            Part 2
            {userData.part_2_complete ? <FaRegCheckCircle /> : <FaRegCircle />}
          </div>
        </div>
      </Link>
    </div>
  );
};
