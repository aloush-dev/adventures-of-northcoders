import { getServerAuthSession } from "~/server/auth";
import { Splash } from "./_components/Splash";
import { ProgressSummary } from "./_components/progress/ProgressSummary";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session)
    return (
      <div>
        <Splash authed={false} />
      </div>
    );

  return (
    <div>
      {session?.user.splash ? <Splash authed={true} /> : <ProgressSummary />}
    </div>
  );
}
