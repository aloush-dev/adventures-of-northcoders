import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUserSolution: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const solution = await ctx.db.userSolution.findFirst({
        where: { puzzleName: input, userId: Number(ctx.session?.user.id) },
      });

      return solution;
    }),
  createUserSolution: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.userSolution.create({
        data: {
          puzzleName: input,
          userId: Number(ctx.session?.user.id),
          timeOpened: new Date(),
        },
      });
    }),
});
