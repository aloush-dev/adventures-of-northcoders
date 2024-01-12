import React from "react";
import { PuzzleInputBox } from "./PuzzleInputBox";
import { PuzzleSubmitButton } from "./PuzzleSubmitButton";
import { IoSend } from "react-icons/io5";

type PuzzleMainProps = {
  hints: {
    keyword: string;
    smallHint: string;
    hintLink: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any;
  }[];
  puzzleInfo: {
    id: number;
    name: string;
    slug: string;
    p1Description: string;
    p2Description: string;
  };
};

export const PuzzleMain = ({ hints, puzzleInfo }: PuzzleMainProps) => {
  const processTextWithHints = (text: string) => {
    const words = text.split(/(\b(?:&&\w+&&)\b|\s|\n)/);

    return words.map((word, index) => {
      if (word === "\n") {
        return <br key={index} />;
      } else if (word.startsWith("&&") && word.endsWith("&&")) {
        const keyword = word.slice(2, -2);
        const hint = hints.find((h) => h.keyword === keyword);

        if (hint) {
          return <React.Fragment key={index}>{hint.component}</React.Fragment>;
        }
      } else {
        return word;
      }
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
      <div className="container flex flex-col px-4 py-16 ">
        <h2 className="py-4 text-4xl font-extrabold tracking-tight">
          {puzzleInfo.name}
        </h2>
        <p>{processTextWithHints(puzzleInfo.p1Description)}</p>

        <div className="my-8 flex">
          <PuzzleInputBox />
          <PuzzleSubmitButton>
            Submit
            <div className="px-2 text-xl">
              <IoSend />
            </div>
          </PuzzleSubmitButton>
        </div>
      </div>
    </div>
  );
};
