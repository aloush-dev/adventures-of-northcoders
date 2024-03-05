import { z } from "zod";
import { getAllCollections } from "~/models/collections.model";
import { getAllPuzzleInfo } from "~/models/puzzles.model";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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
  getAllPuzzles: publicProcedure.query(async () => {
    return await getAllPuzzleInfo();
  }),
  getPuzzleCollections: publicProcedure.query(async () => {
    return await getAllCollections();
  }),
});
