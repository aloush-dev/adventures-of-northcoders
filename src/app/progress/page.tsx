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
            <div className="flex flex-col" key={index}>
              <div className="m-10 flex items-center justify-center rounded-lg bg-gray-200 p-4 text-2xl font-semibold text-gray-600">
                {deSlugTitle(collection.collectionName)}
              </div>
              <ProgressSummary collectionName={collection.collectionName} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProgressPage;
