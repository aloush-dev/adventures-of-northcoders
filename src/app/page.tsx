import PuzzleMain from "./_components/puzzle/PuzzleMain";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <PuzzleMain />
      </div>
    </main>
  );
}

// const session = await getServerAuthSession();
// if (!session?.user) return null;
