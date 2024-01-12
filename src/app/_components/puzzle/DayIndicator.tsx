'use client'
import React from "react";
import { motion } from "framer-motion";

type DayIndicatorProps = { day: number; part1: boolean; part2: boolean };

const DayIndicator: React.FC<DayIndicatorProps> = ({ day, part1, part2 }) => {
  return (
    <div className=" mx-2 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-gray-200 p-4 font-extrabold text-gray-800">
      <div>{day}</div>
      <div className="flex items-center justify-center">
        {part1 ? (
          <motion.div className="m-1 h-2 w-2 rounded-full bg-gray-600"></motion.div>
        ) : (
          <div className="m-1 h-2 w-2 rounded-full bg-gray-200"></div>
        )}
        {part2 ? (
          <motion.div className="m-1 h-2 w-2 rounded-full bg-gray-600"></motion.div>
        ) : (
          <div className="m-1 h-2 w-2 rounded-full bg-gray-200"></div>
        )}
      </div>
    </div>
  );
};

export default DayIndicator;
