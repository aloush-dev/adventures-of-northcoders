import React from "react";
import DayIndicator from "./DayIndicator";

const ProgressTracker = () => {
  const puzzles: {
    id: number;
    title: string;
    part1: boolean;
    part2: boolean;
  }[] = [
    { id: 1, title: "Object 1", part1: true, part2: false },
    { id: 2, title: "Object 2", part1: false, part2: false },
    { id: 3, title: "Object 3", part1: true, part2: true },
    { id: 4, title: "Object 4", part1: false, part2: false },
    { id: 5, title: "Object 5", part1: true, part2: false },
    { id: 6, title: "Object 6", part1: true, part2: true },
    { id: 7, title: "Object 7", part1: false, part2: false },
    { id: 8, title: "Object 8", part1: true, part2: false },
    { id: 9, title: "Object 9", part1: false, part2: false },
    { id: 10, title: "Object 10", part1: true, part2: true },
  ];

  return (
    <div className="flex">
      {puzzles.map((puzzle) => {
        return (
          <DayIndicator
            key={puzzle.id}
            day={puzzle.id}
            part1={puzzle.part1}
            part2={puzzle.part2}
          />
        );
      })}
    </div>
  );
};

export default ProgressTracker;
