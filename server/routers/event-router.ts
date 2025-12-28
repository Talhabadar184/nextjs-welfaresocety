import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { db } from '@/lib/db';

export const eventRouter = router({
    getAll: publicProcedure.query(async () => {
        return await db.selectFrom('events').selectAll().orderBy('id', 'desc').execute();
    }),
    getBySlug: publicProcedure
        .input(z.object({ slug: z.string() }))
        .query(async ({ input }) => {
            return await db
                .selectFrom('events')
                .selectAll()
                .where('slug', '=', input.slug)
                .executeTakeFirst();
        }),
});
