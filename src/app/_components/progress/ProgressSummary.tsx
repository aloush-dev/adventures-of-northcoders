import { api } from "~/trpc/server";
import { ProgressCard } from "./ProgressCard";



export const ProgressSummary = async () => {
  const puzzles = await api.puzzle.getAllPuzzles.query();

  if (!puzzles) return <p>loading....</p>;

  return (
    <div className="flex gap-4">
      {puzzles?.map((puzzle, index) => {
        return <ProgressCard puzzle={puzzle} key={index} />;
      })}
    </div>
  );
};
