import { router, publicProcedure } from './trpc';
import { z } from 'zod';
import { eventRouter } from './routers/event-router';
import { formRouter } from './routers/form-router';
import { contactRouter } from './routers/contact-router';

export const appRouter = router({
    health: publicProcedure.query(() => 'ok'),
    events: eventRouter,
    forms: formRouter,
    contact: contactRouter,
});

export type AppRouter = typeof appRouter;
