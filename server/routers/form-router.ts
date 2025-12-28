import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { db } from '@/lib/db';

export const formRouter = router({
    register: publicProcedure
        .input(
            z.object({
                fullName: z.string(),
                regNumber: z.string(),
                universityEmail: z.string().email(),
                phoneNumber: z.string(),
                semester: z.string(),
                domain: z.string(),
                reason: z.string().optional(),
            })
        )
        .mutation(async ({ input }) => {
            return await db
                .insertInto('registrations')
                .values({
                    full_name: input.fullName,
                    reg_number: input.regNumber,
                    university_email: input.universityEmail,
                    phone_number: input.phoneNumber,
                    semester: input.semester,
                    domain: input.domain,
                    reason: input.reason,
                })
                .returningAll()
                .executeTakeFirst();
        }),
});
