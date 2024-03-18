import { z } from "zod";
import { getAllCollections } from "~/models/collections.model";
import {
  checkSolution,
  getAllPuzzleInfo,
  getAllPuzzlesProgressForUser,
} from "~/models/puzzles.model";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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
  checkSolution: protectedProcedure
    .input(
      z.object({
        inputId: z.string(),
        solution: z.string(),
        part: z.number(),
      }),
    )
    .mutation(({ input, ctx }) => {
      const { session } = ctx;
      if (!session) {
        throw new Error("Unauthorized");
      }
      const { id } = session.user;
      return checkSolution(
        +id,
        input.solution,
        input.inputId,
        +input.part as 1 | 2,
      );
    }),
  getAllPuzzlesProgressForUser: protectedProcedure
    .input(z.object({ id: z.number(), collectionName: z.string() }))
    .query(async ({ input }) => {
      return await getAllPuzzlesProgressForUser(input.id, input.collectionName);
    }),
});
