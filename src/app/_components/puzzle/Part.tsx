import React, { type SetStateAction, type Dispatch } from "react";
import Markdown from "react-markdown";
import SolutionInputForm from "./SolutionInputForm";

type PartProps = {
  partNumber: 1 | 2;
  instructions: string;
  solution?: string | null;
  inputId: string;
  puzzleCollection: string;
  puzzleNumber: number;
  setShowConfetti: Dispatch<SetStateAction<boolean>>;
};

const Part: React.FC<PartProps> = ({
  partNumber,
  instructions,
  solution,
  inputId,
  puzzleCollection,
  puzzleNumber,
  setShowConfetti,
}) => {
  return (
    <>
      <div className="whitespace-pre-wrap">
        <Markdown>{instructions}</Markdown>
      </div>
      {solution ? (
        <div className="my-2 flex w-fit flex-col rounded-lg bg-slate-100 p-2 text-xl text-slate-700">
          Congratulations!
          <span>
            Part {partNumber} complete: your solution was{" "}
            <span className="text-xl font-extrabold">{solution}</span>
          </span>
        </div>
      ) : (
        <SolutionInputForm
          inputId={inputId}
          partNumber={partNumber}
          puzzleCollection={puzzleCollection}
          puzzleNumber={puzzleNumber}
          setShowConfetti={setShowConfetti}
        />
      )}
    </>
  );
};

export default Part;
