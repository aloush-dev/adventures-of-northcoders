"use client";

import Link from "next/link";
import React from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { api } from "~/trpc/react";
import { type Puzzle } from "./ProgressSummary";

export const ProgressCard = ({ puzzle }: { puzzle: Puzzle }) => {
  const emptyUserSolution = {
    id: "Int",
    user: "User",
    userId: "Int",
    timeOpened: "DateTime",
    puzzleCollection: puzzle.collection,
    puzzleNumber: puzzle.puzzleNumber,
    part_1_complete: false,
    part_2_complete: false,
    part_1_solution: "Int",
    part_2_solution: "Int",
    part_1_time_of_completion: "DateTime",
    part_2_time_of_completion: "DateTime",
  };

  const { data } = api.user.getUserSolution.useQuery({
    collection: puzzle.collection,
    number: puzzle.puzzleNumber,
  });
  const createSolution = api.user.createUserSolution.useMutation({});

  const userData = data ?? emptyUserSolution;

  if (!userData) return <p>loading...</p>;

  const handleClick = () => {
    if (!data) {
      createSolution.mutate({
        collection: puzzle.collection,
        number: puzzle.puzzleNumber,
      });
    }
  };

  const deSlugTitle = (slug: string): string => {
    const words = slug.split("-");

    const titleCase = words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return titleCase;
  };

  return (
    <button
      onClick={handleClick}
      className=" rounded-lg border-2 border-transparent bg-gray-200 p-2 text-gray-800 hover:border-2 hover:border-yellow-400"
    >
      <Link
        href={`/puzzle/${userData.puzzleCollection}/${userData.puzzleNumber}`}
      >
        <div className="flex justify-center font-bold">
          {deSlugTitle(userData.puzzleCollection)}
        </div>
        <div>Puzzle No.{userData.puzzleNumber}</div>
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
    </button>
  );
};
