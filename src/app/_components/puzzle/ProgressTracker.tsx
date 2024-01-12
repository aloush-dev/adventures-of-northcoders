"use client";

import React, { useState } from "react";
import DayIndicator from "./DayIndicator";
import { motion } from "framer-motion";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const ProgressTracker = () => {
  const [open, setOpen] = useState(false);

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
    <motion.div className="flex flex-col items-center justify-between bg-gray-600 py-2 text-gray-100">
      <div className="flex items-center justify-between">
        <button onClick={() => setOpen(!open)} className="p-2 font-semibold">
          Sprint Progress
        </button>
        {open ? (
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-gray-400"
          >
            <IoMdArrowDropup />
          </button>
        ) : (
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-gray-400 "
          >
            <IoMdArrowDropdown />
          </button>
        )}
      </div>
      {open ? (
        <motion.div
          initial={{ y: -140 }}
          animate={{ y: -10 }}
          exit={{ y: -60 }}
          className="flex py-2 pt-4"
        >
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
        </motion.div>
      ) : null}
    </motion.div>
  );
};

export default ProgressTracker;
