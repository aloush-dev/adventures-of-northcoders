import React from "react";
import { PuzzleInputBox } from "./PuzzleInputBox";
import { PuzzleSubmitButton } from "./PuzzleSubmitButton";
import { IoSend } from "react-icons/io5";
import { redirect } from "next/navigation";

type SolutionInputFormProps = {
  partNumber: 1 | 2;
  inputId: string;
  puzzleCollection: string;
  puzzleNumber: number;
};

const SolutionInputForm: React.FC<SolutionInputFormProps> = ({
  partNumber,
  inputId,
  puzzleCollection,
  puzzleNumber,
}) => {
  async function handleSubmit(formData: FormData) {
    "use server";
    const solution = formData.get("solution");
    if (typeof solution !== "string") {
      return;
    }
    redirect(
      `/puzzle/${puzzleCollection}/${puzzleNumber}/${partNumber}/solution?solution=${solution}&inputId=${inputId}`,
    );
  }
  return (
    <form action={handleSubmit} className="my-8 flex">
      <PuzzleInputBox />
      <PuzzleSubmitButton>
        Submit
        <div className="px-2 text-xl">
          <IoSend />
        </div>
      </PuzzleSubmitButton>
    </form>
  );
};

export default SolutionInputForm;
