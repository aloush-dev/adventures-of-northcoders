import React from "react";
import MarkdownInput from "./MarkdownInput";
import { getServerAuthSession } from "~/server/auth";
import { normaliseTextFromForm } from "~/utils/utils";
import { addCommunityPuzzle } from "~/models/puzzles.model";
import MainButton from "../_components/ui/MainButton";

const page: React.FC = async () => {
  const session = await getServerAuthSession();
  if (!session?.user.id) {
    return <div>404 - Not found</div>;
  }
  async function handleSubmit(formData: FormData) {
    "use server";
    const data = Object.fromEntries(formData.entries());
    for (const key in data) {
      const string = data[key];
      if (typeof string === "string") {
        data[key] = normaliseTextFromForm(string);
      }
    }
    const puzzle = {
      part1Instructions: data["part-1"] as string,
      part2Instructions: data["part-2"] as string,
      puzzleName: data["puzzle-name"] as string,
      input: data["puzzle-input"] as string,
      answerPart1: data["solution-1"] as string,
      answerPart2: data["solution-2"] as string,
    };

    if (ensureAllCommunityFormFieldsExist(data) && session) {
      await addCommunityPuzzle({ ...puzzle, createdBy: +session.user.id });
      console.log("Puzzle added");
    }
  }
  return (
    <main className="p-5">
      <h2 className="mx-2 text-4xl font-bold">Create Your Own Puzzle</h2>
      <form action={handleSubmit}>
        <label className="my-4 flex flex-col">
          <div className="text-xl">Name Your Puzzle</div>
          <div className="text-sm font-bold">
            Give your puzzle a name in kebab case eg. my-puzzle
          </div>
          <input
            className="remove-arrow w-1/2 rounded-lg bg-gray-200 p-2 text-gray-600"
            name="puzzle-name"
            placeholder="puzzle-name"
          />
        </label>

        <label className="my-4 flex flex-col">
          <div className="text-xl">Part 1 Description</div>
          <div className="text-sm font-bold">
            Write a description for the part 1 of your puzzle, its a good idea to exclude an example of the input. This is written in markdown.
          </div>
          <MarkdownInput name="part-1" />
        </label>

        <label className="my-4 flex w-fit flex-col">
          <div className="text-xl">Part 1 Solution</div>
          <div className="text-sm font-bold">
            Whats the solution for part 1?
          </div>
          <input
            className="remove-arrow rounded-lg bg-gray-200 p-2 text-gray-600"
            name="solution-1"
            type="text"
            placeholder="Solution 1"
          />
        </label>

        <label className="my-4 flex flex-col">
          <div className="text-xl">Part 2 Description</div>
          <div className="text-sm font-bold">
          Write a description for the part 2 of your puzzle, its a good idea to exclude an example of the input. This is written in markdown.
          </div>
          <MarkdownInput name="part-2" />
        </label>

        <label className="my-4 flex flex-col">
          <div className="text-xl">Part 2 Solution</div>
          <div className="text-sm font-bold">
          Whats the solution for part 2?
          </div>
          <input
            className="remove-arrow w-1/2 rounded-lg bg-gray-200 p-2 text-gray-600"
            name="solution-2"
            type="text"
            placeholder="Solution 2"
          />
        </label>

        <label className="my-4 flex flex-col">
          <div className="text-xl">Puzzle Input</div>
          <div className="text-sm font-bold">
            This is the input which a user will download to solve your puzzle.
          </div>
          <textarea
            name="puzzle-input"
            placeholder="input here..."
            className="remove-arrow w-1/2 rounded-lg bg-gray-200 p-2 text-gray-600"
          ></textarea>
        </label>

        <button
          type="submit"
          className="flex items-center justify-center rounded-lg bg-gray-200 p-2 font-semibold text-gray-600"
        >
          Submit Puzzle
        </button>
      </form>
    </main>
  );
};

export default page;
type PuzzleInputForm = {
  "puzzle-name": string;
  "part-1": string;
  "part-2": string;
  "puzzle-input": string;
  "solution-1": string;
  "solution-2": string;
};
const ensureAllCommunityFormFieldsExist = (
  data: object,
): data is PuzzleInputForm => {
  const requiredFields = [
    { property: "puzzle-name", type: "string" },
    { property: "part-1", type: "string" },
    { property: "part-2", type: "string" },
    { property: "puzzle-input", type: "string" },
    { property: "solution-1", type: "string" },
    { property: "solution-2", type: "string" },
  ];

  return requiredFields.every((field) => {
    const value = data[field.property as keyof typeof data];
    return value && typeof value === field.type;
  });
};
