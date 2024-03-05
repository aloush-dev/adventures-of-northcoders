import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { readDirs, readFile } from "~/utils/puzzleFetching";

export const puzzleRouter = createTRPCRouter({
  getSpecificPuzzle: publicProcedure
    .input(
      z.object({
        collection: z.string(),
        puzzleNumber: z.number(),
      }),
    )
    .query(async ({ ctx, input: { collection, puzzleNumber } }) => {
      const puzzleInfo = await ctx.db.puzzle.findFirst({
        where: { collection, puzzleNumber },
      });

      return puzzleInfo;
    }),
  getAllPuzzles: publicProcedure.query(async ({ ctx }) => {
    const allPuzzles = await ctx.db.puzzle.findMany();

    return allPuzzles;
  }),
});
