import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { readDirs, readFile } from "~/utils/puzzleFetching";

export const puzzleRouter = createTRPCRouter({
  getPuzzleByid: publicProcedure
    .input(z.object({ puzzleID: z.string(), part: z.string() }))
    .query(async ({ input: { puzzleID, part } }) => {
      const puzzleInfo = await readFile(puzzleID, part);

      return puzzleInfo;
    }),
  getAllPuzzles: publicProcedure.query(async () => {
    const allPuzzles = await readDirs();

    return allPuzzles;
  }),
});
