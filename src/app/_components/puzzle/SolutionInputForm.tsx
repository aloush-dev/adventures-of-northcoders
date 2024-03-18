"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import { api } from "~/trpc/react";

type SolutionInputFormProps = {
  partNumber: 1 | 2;
  inputId: string;
  puzzleCollection: string;
  puzzleNumber: number;
};

const SolutionInputForm: React.FC<SolutionInputFormProps> = ({
  partNumber,
  inputId,
}) => {
  const router = useRouter();
  const [attempt, setAttempt] = useState("");
  const [check, setCheck] = useState<"HIGH" | "LOW" | null>(null);
  const [inputBoxValue, setInputBoxValue] = useState("");
  const { mutate } = api.puzzle.checkSolution.useMutation({
    onSuccess: (data, { solution }) => {
      if (data === "CORRECT") {
        setCheck(null);
        setAttempt("");
        setInputBoxValue("");
        router.refresh();
        return;
      }
      setCheck(data);
      setAttempt("solution");
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
    <form onSubmit={handleSubmit} className="my-8 flex">
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
      {check && (
        <span>
          {attempt}: too {check}
        </span>
      )}
    </form>
  );
};

export default SolutionInputForm;
