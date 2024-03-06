import { ProgressSummary } from "../_components/progress/ProgressSummary";
import { deSlugTitle } from "~/utils/utils";
import { getAllCollections } from "~/models/collections.model";

const ProgressPage = async () => {
  const collections = await getAllCollections();

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
