import { z } from "zod";
import {
  createPuzzleProgressForUser,
  getSpecificPuzzleProgressForUser,
} from "~/models/puzzles.model";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUserSolution: protectedProcedure
    .input(z.object({ collection: z.string(), number: z.number() }))
    .query(async ({ ctx, input: { collection, number } }) => {
      return await getSpecificPuzzleProgressForUser(
        Number(ctx.session?.user.id),
        collection,
        number,
      );
    }),
  createUserSolution: protectedProcedure
    .input(z.object({ collection: z.string(), number: z.number() }))
    .mutation(async ({ ctx, input: { collection, number } }) => {
      return await createPuzzleProgressForUser(
        Number(ctx.session?.user.id),
        collection,
        number,
      );
    }),
});
