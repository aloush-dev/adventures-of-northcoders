import { getServerSession } from "next-auth";
import Link from "next/link";
import { type FC } from "react";
import { checkSolution } from "~/models/puzzles.model";
import { authOptions } from "~/server/auth";

type SolutionPageProps = {
  params: {
    puzzleCollection: string;
    puzzleNumber: string;
    part: string;
  };
  searchParams: { solution: string; inputId: string };
};

const SolutionPage: FC<SolutionPageProps> = async ({
  params,
  searchParams,
}) => {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Error</p>;
  const { solution, inputId } = searchParams;
  const { puzzleCollection, part, puzzleNumber } = params;
  const correctness = await checkSolution(
    +session.user.id,
    solution,
    inputId,
    +part as 1 | 2,
  );
  const message = {
    LOW: <p>Your solution is too low</p>,
    HIGH: <p>Your solution is too high</p>,
    CORRECT: <p>Your solution is correct!</p>,
  };
  return (
    <main>
      {message[correctness]}
      <Link href={`/puzzle/${puzzleCollection}/${puzzleNumber}`}>
        Back to puzzle
      </Link>
    </main>
  );
};

export default SolutionPage;
