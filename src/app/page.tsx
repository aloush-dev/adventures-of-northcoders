import { getServerAuthSession } from "~/server/auth";
import { Splash } from "./_components/Splash";
import { ProgressSummary } from "./_components/progress/ProgressSummary";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session)
    return (
      <main className="flex min-h-screen-act flex-col items-center justify-center bg-gray-800 text-white">
        <Splash authed={false} />
      </main>
    );

  return (
    <main className="flex min-h-screen-act flex-col items-center justify-center bg-gray-800 text-white">
      {session?.user.splash ? <Splash authed={true} /> : <ProgressSummary />}
    </main>
  );
}
