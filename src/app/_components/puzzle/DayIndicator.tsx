import React from "react";

type DayIndicatorProps = { day: number; part1: boolean; part2: boolean };

const DayIndicator: React.FC<DayIndicatorProps> = ({ day, part1, part2 }) => {
  return (
    <div className=" mx-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-200 p-4 font-extrabold text-gray-800">
      <div>{day}</div>
      <div className="flex justify-center items-center">
        {part1 ? <div className="h-2 w-2 rounded-full bg-gray-600 m-1"></div> : <div className="h-2 w-2 rounded-full bg-gray-200 m-1"></div>}
        {part2 ? <div className="h-2 w-2 rounded-full bg-gray-600 m-1"></div> : <div className="h-2 w-2 rounded-full bg-gray-200 m-1"></div>}
      </div>
    </div>
  );
};

export default DayIndicator;
