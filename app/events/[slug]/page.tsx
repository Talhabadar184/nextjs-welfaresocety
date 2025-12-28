'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { trpc } from '@/lib/trpc-client';
import EventDetailLayout from '@/components/Layouts/EventDetailLayout';
import EventDetail from '@/components/Components/EventDetail';

const EventPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    // Fetch specific event by slug
    const { data: event, isLoading } = trpc.events.getBySlug.useQuery({ slug });

    if (isLoading) {
        return (
            <EventDetailLayout>
                <div className="min-h-screen flex items-center justify-center">Loading...</div>
            </EventDetailLayout>
        )
    }

    // If we want to use the existing EventDetail component, we basically need to mock the "Redux state" behavior 
    // or refactor EventDetail to accept props. Refactoring is better.
    // However, user said "no design changes".
    // I will modify `components/Components/EventDetail/index.tsx` (which I copied) to accept props optionally, 
    // or I will wrap it here.

    // Ideally, EventDetail should just take `event` as a prop.

    // Let's pass the event object to a modified EventDetail that accepts props.
    return (
        <EventDetailLayout>
            <EventDetail eventData={event} />
        </EventDetailLayout>
    );
};

export default EventPage;
