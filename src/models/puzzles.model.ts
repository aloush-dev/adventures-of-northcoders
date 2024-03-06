import { db } from "~/server/db";

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
    where: { userId, puzzle: { collection: puzzleCollection, puzzleNumber } },
    include: { input: { select: { puzzle: true } } },
  });
}

export async function createPuzzleProgressForUser(
  userId: number,
  puzzleId: string,
) {
  const inputs = await db.input.findMany({
    where: { puzzleId },
    select: { id: true },
  });
  const inputForUser = inputs[Math.ceil(Math.random() * inputs.length)];
  if (!inputForUser) {
    throw new Error("No inputs found for this puzzle");
  }
  return db.userSolution.create({
    data: {
      inputId: inputForUser.id,
      userId,
      puzzleId,
    },
  });
}
