/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "~/trpc/server";
import { PuzzleMain } from "../../../_components/puzzle/PuzzleMain";

export default async function PuzzlePage({
  params,
}: {
  params: { puzzleCollection: string; puzzleNumber: number };
}) {
  const puzzleInfo = await api.puzzle.getSpecificPuzzle.query({
    collection: params.puzzleCollection,
    puzzleNumber: Number(params.puzzleNumber),
  });

  const userSolution = await api.user.getUserSolution.query({
    number: Number(params.puzzleNumber),
    collection: params.puzzleCollection,
  });

  console.log(userSolution, "HEREEEEEEEEEEEEEEEEEEE");

  if (!puzzleInfo) return <p>loading...</p>;

  return <PuzzleMain puzzleInfo={puzzleInfo} />;
}
