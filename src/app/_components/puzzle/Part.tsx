import React from "react";
import Markdown from "react-markdown";
import SolutionInputForm from "./SolutionInputForm";

type PartProps = {
  partNumber: 1 | 2;
  instructions: string;
  solution?: string | null;
  inputId: string;
  puzzleCollection: string;
  puzzleNumber: number;
};

const Part: React.FC<PartProps> = ({
  partNumber,
  instructions,
  solution,
  inputId,
  puzzleCollection,
  puzzleNumber,
}) => {
  return (
    <>
      <div className="whitespace-pre-wrap">
        <Markdown>{instructions}</Markdown>
      </div>
      {solution ? (
        <p>
          Part {partNumber} complete: your solution was {solution}
        </p>
      ) : (
        <SolutionInputForm
          inputId={inputId}
          partNumber={partNumber}
          puzzleCollection={puzzleCollection}
          puzzleNumber={puzzleNumber}
        />
      )}
    </>
  );
};

export default Part;
