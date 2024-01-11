import { db } from "~/server/db";
import { checkSolutionForInput } from "./solutions";

export async function openPuzzleForUser(userId: number, day: number) {
  return db.userSolution.update({
    where: { userId_day: { userId, day } },
    data: { timeOpened: new Date() },
  });
}
export async function validateSolutionForPart({
  userId,
  day,
  part,
  attempt,
}: {
  userId: number;
  day: number;
  part: number;
  attempt: number;
}) {
  const success = await checkSolutionForInput(day, userId, attempt);
  if (!success) throw new Error("Incorrect Solution");
  const data =
    part === 1
      ? { part_1_complete: true, part_1_solution: attempt }
      : { part_2_complete: true, part_2_solution: attempt };

  return db.userSolution.update({
    where: { userId_day: { userId, day } },
    data,
  });
}
