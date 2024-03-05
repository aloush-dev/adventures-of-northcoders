import { db } from "~/server/db";
import { assignRandomInputId } from "./utils/puzzleInputs";

export async function getAllPuzzlesProgressForUser(userId: number) {
  return db.userSolution.findMany({ where: { userId } });
}

export async function getAllPuzzleInfo() {
  return await db.puzzle.findMany();
}

export async function getSpecificPuzzleProgressForUser(
  userId: number,
  puzzleCollection: string,
  puzzleNumber: number,
) {
  return db.userSolution.findFirst({
    where: { userId, puzzleCollection, puzzleNumber },
    include: { input: { select: { puzzle: true } } },
  });
}

export async function createPuzzleProgressForUser(
  userId: number,
  puzzleCollection: string,
  puzzleNumber: number,
) {
  const inputId = assignRandomInputId(userId);
  return db.userSolution.create({
    data: {
      userId,
      puzzleCollection,
      puzzleNumber,
      inputId,
      timeOpened: new Date(),
    },
  });
}
