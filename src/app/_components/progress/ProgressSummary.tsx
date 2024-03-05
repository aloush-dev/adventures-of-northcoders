import { api } from "~/trpc/server";
import { ProgressCard } from "./ProgressCard";

export type Puzzle = {
  collection: string;
  puzzleNumber: number;
  part1Instructions: string;
  part2Instructions: string;
  openedCount: number;
  completedCount: number;
  createdAt: Date;
  createdBy: number | null;
};

export const ProgressSummary = async () => {
  const puzzles = await api.puzzle.getAllPuzzles.query();

  if (!puzzles) return <p>loading....</p>;

  return (
    <div className="grid grid-flow-row grid-cols-4 justify-items-center gap-4">
      {puzzles?.map((puzzle, index) => {
        return (
          <ProgressCard puzzle={puzzle} key={index} />
        );
      })}
    </div>
  );
};
