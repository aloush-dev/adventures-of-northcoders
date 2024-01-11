import { db } from "~/server/db";
import { type InputWithSolution } from "./model-types";
import { getUserInputValue } from "./utils";

export async function addSolutions(solutions: InputWithSolution[]) {
  return db.input.createMany({ data: solutions });
}

export async function checkSolutionForInput(
  day: number,
  userId: number,
  attempt: number,
): Promise<boolean> {
  const inputForUser = getUserInputValue(userId);
  const { answer } = await db.input.findUniqueOrThrow({
    where: { day_id: { day, id: inputForUser } },
    select: { answer: true },
  });
  return attempt === answer;
}
