import { getServerAuthSession } from "~/server/auth";
import { Splash } from "./_components/Splash";
import { ProgressSummary } from "./_components/progress/ProgressSummary";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <main className="min-h-screen-act flex flex-col items-center justify-center bg-gray-800 text-white">
      {session?.user.splash ? <Splash /> : <ProgressSummary />}
    </main>
  );
}
