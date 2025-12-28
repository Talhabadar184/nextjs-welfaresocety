'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { trpc } from '@/lib/trpc-client'; // Import tRPC hook

import EventLayout from '../../components/Layouts/EventLayout';
import EventCard from '../../components/ReusableComponents/EventCard';
import ReusableBar from '../../components/ReusableComponents/ReusableBar';

const Events = () => {
    const router = useRouter();

    // Fetch events from DB via tRPC
    const { data: events, isLoading } = trpc.events.getAll.useQuery();

    const handleEventClick = (eventSlug: string) => {
        // Navigate to dynamic route based on slug
        router.push(`/events/${eventSlug}`);
    };

    if (isLoading) {
        return <div>Loading events...</div>
    }

    return (
        <EventLayout>
            <ReusableBar text="All Events & Updates" />
            {events?.map((event) => (
                <EventCard
                    key={event.id}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    description={event.description.substring(0, 200) + '...'} // Truncate for preview
                    socials={{
                        instagram: event.instagram || '',
                        facebook: event.facebook || '',
                        linkedin: event.linkedin || '',
                    }}
                    onSeeMore={() => handleEventClick(event.slug)}
                />
            ))}
        </EventLayout>
    );
};

export default Events;
