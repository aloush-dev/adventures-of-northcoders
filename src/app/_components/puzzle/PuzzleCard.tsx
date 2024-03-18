"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { api } from "~/trpc/react";
import { deSlugTitle } from "~/utils/utils";

interface PuzzleCardProps {
  collection: { collectionName: string };
}

const PuzzleCard: React.FC<PuzzleCardProps> = ({ collection }) => {
  const { data: session } = useSession();
  const id = session?.user?.id;

  const puzzles = api.puzzle.getAllPuzzlesProgressForUser.useQuery({
    id: id !== undefined ? +id : 0,
    collectionName: collection.collectionName,
  });

  if (!session || !id) return null;
  if (!puzzles) return <p>loading....</p>;

  return (
    <div className="flex flex-col">
      {puzzles.data?.map((puzzle, index) => {
        return (
          <Link
            className=" m-2 flex items-center justify-between rounded-lg border-2 border-transparent bg-gray-200 p-2 px-6 text-gray-800 hover:border-2 hover:border-yellow-400"
            href={`/puzzles/${collection.collectionName}/${puzzle.puzzleNumber}`}
            key={index}
          >
            {deSlugTitle(puzzle.puzzleName)}
            {puzzle.UserSolution[0]?.part_1_complete &&
            puzzle.UserSolution[0]?.part_2_complete ? (
              <div className="rounded-lg bg-green-700 p-1 px-2 text-sm font-bold text-white">
                COMPLETE
              </div>
            ) : (
              ""
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default PuzzleCard;
