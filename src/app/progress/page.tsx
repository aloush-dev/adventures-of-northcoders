import { api } from "~/trpc/server";
import { ProgressSummary } from "../_components/progress/ProgressSummary";
import { deSlugTitle } from "~/utils/utils";

const ProgressPage = async () => {
  const collections = await api.puzzle.getPuzzleCollections.query();

  return (
    <>
      <div className="flex">
        {collections.map((collection, index) => {
          return (
            <button
              className="m-10 flex items-center justify-center rounded-lg bg-gray-200 p-4 text-2xl font-semibold text-gray-600"
              key={index}
            >
              {deSlugTitle(collection.collectionName)}
            </button>
          );
        })}
      </div>
      <ProgressSummary />
    </>
  );
};

export default ProgressPage;
