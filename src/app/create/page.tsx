import React from "react";
import MarkdownInput from "./MarkdownInput";
import { getServerAuthSession } from "~/server/auth";
import { normaliseTextFromForm } from "~/utils/utils";
import { addCommunityPuzzle } from "~/models/puzzles.model";

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
    console.log(puzzle, session?.user.id);

    if (ensureAllCommunityFormFieldsExist(data) && session) {
      await addCommunityPuzzle({ ...puzzle, createdBy: +session.user.id });
      console.log("Puzzle added");
    }
  }
  return (
    <main className="p-5">
      <form action={handleSubmit} className="text-black">
        <input name="puzzle-name" placeholder="puzzle-name" className="w-1/2" />
        <div>
          <MarkdownInput name="part-1" />
          <input name="solution-1" type="text" placeholder="Solution 1" />
        </div>
        <div>
          <MarkdownInput name="part-2" />
          <input name="solution-2" type="text" placeholder="Solution 2" />
        </div>
        <div className="py-2">
          <textarea
            name="puzzle-input"
            placeholder="input here..."
            className="h-96 w-full text-black"
          ></textarea>
        </div>
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
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
