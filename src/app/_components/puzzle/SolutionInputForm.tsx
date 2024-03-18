"use client";
import { useRouter } from "next/navigation";
import React, { type Dispatch, type SetStateAction, useState } from "react";
import { IoSend } from "react-icons/io5";
import { api } from "~/trpc/react";

type SolutionInputFormProps = {
  partNumber: 1 | 2;
  inputId: string;
  puzzleCollection: string;
  puzzleNumber: number;
  setShowConfetti: Dispatch<SetStateAction<boolean>>;
};

const SolutionInputForm: React.FC<SolutionInputFormProps> = ({
  partNumber,
  inputId,
  setShowConfetti,
}) => {
  const router = useRouter();
  const [attempt, setAttempt] = useState("");
  const [check, setCheck] = useState<"HIGH" | "LOW" | null>(null);
  const [inputBoxValue, setInputBoxValue] = useState("");

  const { mutate } = api.puzzle.checkSolution.useMutation({
    onSuccess: (data, { solution }) => {
      if (data === "CORRECT") {
        setShowConfetti(true);
        setCheck(null);
        setAttempt("");
        setInputBoxValue("");
        router.refresh();

        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);

        return;
      }
      setCheck(data);
      setAttempt(solution);
      setInputBoxValue("");
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const solution = inputBoxValue;
    if (typeof solution !== "string") {
      return;
    }
    mutate({
      inputId,
      solution,
      part: partNumber,
    });
  }
  return (
    <form onSubmit={handleSubmit} className="my-8 flex flex-col">
      <div className="my-2">
        {check && (
          <span>
            Your answer:{attempt} is too {check}
          </span>
        )}
      </div>

      <div className="flex">
        <input
          className="remove-arrow rounded-lg bg-gray-200 p-2 text-gray-600"
          name="solution"
          type="text"
          value={inputBoxValue}
          onChange={(e) => setInputBoxValue(e.target.value)}
        ></input>
        <button
          className={`
    mx-2 flex items-center justify-center 
    rounded-lg bg-gray-200 p-2 
    font-semibold text-gray-600
    `}
          type="submit"
        >
          Submit
          <div className="px-2 text-xl">
            <IoSend />
          </div>
        </button>
      </div>
    </form>
  );
};

export default SolutionInputForm;
