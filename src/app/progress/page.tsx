import { ProgressSummary } from "../_components/progress/ProgressSummary";

const collections = ["Intro Week", "Community"];

const ProgressPage = async () => {
  return (
    <>
      <div className="flex">
        {collections.map((collection, index) => {
          return (
            <button
              className="m-10 flex items-center justify-center rounded-lg bg-gray-200 p-4 text-2xl font-semibold text-gray-600"
              key={index}
            >
              {collection}
            </button>
          );
        })}
      </div>
      <ProgressSummary />
    </>
  );
};

export default ProgressPage;
