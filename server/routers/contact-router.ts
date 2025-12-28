import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { db } from '@/lib/db';

export const contactRouter = router({
    submit: publicProcedure
        .input(
            z.object({
                name: z.string().min(1, "Name is required"),
                email: z.string().min(1, "Email is required"),
                subject: z.string().min(1, "Subject is required"),
                message: z.string().min(1, "Message is required"),
            })
        )
        .mutation(async ({ input }) => {
            console.log('Contact form submission received:', input);
            try {
                const result = await db
                    .insertInto('contact_messages')
                    .values({
                        name: input.name,
                        email: input.email,
                        subject: input.subject,
                        message: input.message,
                    })
                    .returningAll()
                    .executeTakeFirst();
                console.log('Database insertion successful:', result);
                return result;
            } catch (error) {
                console.error('Database insertion failed:', error);
                throw error;
            }
        }),
});
