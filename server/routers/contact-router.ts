import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { db } from '@/lib/db';

export const contactRouter = router({
    submit: publicProcedure
        .input(
            z.object({
                name: z.string().min(2, "Name is too short"),
                email: z.string().email("Invalid email address"),
                subject: z.string().min(5, "Subject is too short"),
                message: z.string().min(10, "Message is too short"),
            })
        )
        .mutation(async ({ input }) => {
            return await db
                .insertInto('contact_messages')
                .values({
                    name: input.name,
                    email: input.email,
                    subject: input.subject,
                    message: input.message,
                })
                .returningAll()
                .executeTakeFirst();
        }),
});
