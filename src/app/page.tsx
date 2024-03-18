import { getServerAuthSession } from "~/server/auth";
import { Splash } from "./_components/Splash";
import { ProgressSummary } from "./_components/progress/ProgressSummary";
import { getAllCollections } from "~/models/collections.model";
import { deSlugTitle } from "~/utils/utils";

export default async function Home() {
  const session = await getServerAuthSession();
  const collections = await getAllCollections();

  if (!session)
    return (
      <div>
        <Splash authed={false} />
      </div>
    );

  return (
    <div>
      {session?.user.splash ? (
        <Splash authed={true} />
      ) : (
        <>
          {collections.map((collection, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <div className="m-10 flex items-center justify-center rounded-lg bg-gray-200 p-4 text-2xl font-semibold text-gray-600">
                  {deSlugTitle(collection.collectionName)}
                </div>
                <ProgressSummary collectionName={collection.collectionName} />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
