import { getAllPuzzlesProgressForUser } from "~/models/puzzles.model";
import { ProgressCard } from "./ProgressCard";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

export const ProgressSummary = async ({
  collectionName,
}: {
  collectionName: string;
}) => {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Error</p>;
  const id = session.user.id;

  const puzzles = await getAllPuzzlesProgressForUser(+id, collectionName);
  if (!puzzles) return <p>loading....</p>;

  return (
    <div className="flex gap-4 justify-center items-center">
      {puzzles?.map((puzzle, index) => {
        return <ProgressCard puzzle={puzzle} key={index} />;
      })}
    </div>
  );
};
