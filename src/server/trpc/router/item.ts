import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const itemRouter = router({
  getAllByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.item.findMany({
        where: {
          category: {
            name: input.category,
          },
        },
      });
    }),
});
