import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { readDirs, readFile } from "~/utils/puzzleFetching";

export const userRouter = createTRPCRouter({
  createPuzzleEntry: publicProcedure
    .input(z.object({ puzzleID: z.string(), part: z.string() }))
    .query(async ({ input: { puzzleID, part } }) => {
      const puzzleInfo = await readFile(puzzleID, part);

      return puzzleInfo;
    }),
  getUserSolution: publicProcedure
    .input(z.number())
    .query(async ({ ctx, input }) => {
      const solution = await ctx.db.userSolution.findFirst({
        where: { id: input },
      });

      return solution;
    }),
});
