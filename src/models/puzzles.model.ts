import { db } from "~/server/db";

export async function getAllPuzzlesProgressForUser(
  userId: number,
  collection: string,
) {
  return db.puzzle.findMany({
    where: { collection },
    include: {
      UserSolution: {
        where: { userId },
        select: {
          part_1_complete: true,
          part_2_complete: true,
          timeOpened: true,
        },
      },
    },
  });
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
    include: {
      input: {
        select: { answerPart1: true, answerPart2: true, input: true, id: true },
      },
      puzzle: true,
    },
  });
}

export async function createPuzzleProgressForUser(
  userId: number,
  puzzleCollection: string,
  puzzleNumber: number,
) {
  const puzzle = await db.puzzle.findFirst({
    where: { collection: puzzleCollection, puzzleNumber },
  });
  if (!puzzle) {
    throw new Error("Puzzle not found");
  }
  const { id } = puzzle;
  const inputs = await db.input.findMany({
    where: { puzzleId: id },
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
      puzzleId: id,
    },
  });
}

export async function checkSolution(
  userId: number,
  solution: string,
  inputId: string,
  part: 1 | 2,
): Promise<"HIGH" | "LOW" | "CORRECT"> {
  console.log({ inputId, solution, part });

  const input = await db.input.findFirst({
    where: { id: inputId },
  });
  if (!input) {
    throw new Error("Input not found");
  }
  const solutionToCheck = part === 1 ? input.answerPart1 : input.answerPart2;
  if (solution === solutionToCheck) {
    await updatePuzzleProgressForUser(userId, inputId, part);
    return "CORRECT";
  }
  if (+solution > +solutionToCheck) {
    return "HIGH";
  }
  return "LOW";
}

export async function updatePuzzleProgressForUser(
  userId: number,
  inputId: string,
  part: 1 | 2,
) {
  const data =
    part === 1
      ? {
          part_1_complete: true,
          part_1_time_of_completion: new Date(),
        }
      : {
          part_2_complete: true,
          part_2_time_of_completion: new Date(),
        };
  return db.userSolution.update({
    where: {
      userId_inputId: {
        userId,
        inputId,
      },
    },
    data,
  });
}
