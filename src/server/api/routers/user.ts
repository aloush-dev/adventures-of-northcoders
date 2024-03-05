import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUserSolution: publicProcedure
    .input(z.object({ collection: z.string(), number: z.number() }))
    .query(async ({ ctx, input: { collection, number } }) => {
      const solution = await ctx.db.userSolution.findFirst({
        where: {
          puzzleCollection: collection,
          puzzleNumber: number,
          userId: Number(ctx.session?.user.id),
        },
      });

      return solution;
    }),
  createUserSolution: publicProcedure
    .input(z.object({ collection: z.string(), number: z.number() }))
    .mutation(async ({ ctx, input: { collection, number } }) => {
      return await ctx.db.userSolution.create({
        data: {
          puzzleCollection: collection,
          puzzleNumber: number,
          puzzleName: "",
          inputId: Number(ctx.session?.user.id),
          userId: Number(ctx.session?.user.id),
          timeOpened: new Date(),
        },
      });
    }),
});
