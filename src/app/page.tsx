import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import PuzzleMain from "./_components/puzzle/PuzzleMain";
import ProgressTracker from "./_components/puzzle/ProgressTracker";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <ProgressTracker />
        <PuzzleMain />
      </div>
    </main>
  );
}

// const session = await getServerAuthSession();
// if (!session?.user) return null;
