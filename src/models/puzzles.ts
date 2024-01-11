import { db } from "~/server/db";
import { type PuzzleDbFormat } from "./model-types";

export async function addPuzzle(puzzle: PuzzleDbFormat) {
  return db.puzzle.create({
    data: {
      dayNumber: puzzle.dayNumber,
      part1: puzzle.part1,
      part2: puzzle.part2,
    },
  });
}
export async function getPuzzlePart1(day: number): Promise<{ part1: string }> {
  return db.puzzle.findUniqueOrThrow({
    where: { dayNumber: day },
    select: { part1: true },
  });
}
export async function getPuzzlePart2(day: number): Promise<{ part2: string }> {
  return db.puzzle.findUniqueOrThrow({
    where: { dayNumber: day },
    select: { part2: true },
  });
}
