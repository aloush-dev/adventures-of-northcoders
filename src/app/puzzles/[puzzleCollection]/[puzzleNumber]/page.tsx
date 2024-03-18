import { PuzzleMain } from "../../../_components/puzzle/PuzzleMain";
import {
  createPuzzleProgressForUser,
  getSpecificPuzzleProgressForUser,
} from "~/models/puzzles.model";
import { authOptions } from "~/server/auth";
import { getServerSession } from "next-auth";

export default async function PuzzlePage({
  params,
}: {
  params: { puzzleCollection: string; puzzleNumber: string };
}) {
  const { puzzleCollection, puzzleNumber } = params;
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) return <p>Error</p>;
  let puzzleWithUserProgress = await getSpecificPuzzleProgressForUser(
    +userId,
    puzzleCollection,
    +puzzleNumber,
  );
  if (!puzzleWithUserProgress) {
    await createPuzzleProgressForUser(+userId, puzzleCollection, +puzzleNumber);
    puzzleWithUserProgress = await getSpecificPuzzleProgressForUser(
      +userId,
      puzzleCollection,
      +puzzleNumber,
    );
  }
  if (!puzzleWithUserProgress) return <p>Error</p>;

  return <PuzzleMain puzzleInfo={puzzleWithUserProgress} />;
}
