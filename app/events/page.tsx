'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { trpc } from '@/lib/trpc-client'; // Import tRPC hook

import EventLayout from '../../components/Layouts/EventLayout';
import PremiumEventCard from '../../components/ReusableComponents/PremiumEventCard';

const Events = () => {
    const router = useRouter();

    // Fetch events from DB via tRPC
    const { data: events, isLoading } = trpc.events.getAll.useQuery();

    const handleEventClick = (eventSlug: string) => {
        router.push(`/events/${eventSlug}`);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-[#FFA016]/20 border-t-[#FFA016] rounded-full animate-spin" />
                    <p className="text-[#FFA016] font-black uppercase tracking-widest text-xs">Loading Events...</p>
                </div>
            </div>
        );
    }

    return (
        <EventLayout>
            {/* <div className="bg-black py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col mb-16 px-4">
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                                All <span className="text-[#FFA016]">Events</span>
                            </h2>
                            <div className="flex-grow h-[1px] bg-gradient-to-r from-[#FFA016]/50 to-transparent ml-4 hidden md:block" />
                        </div>
                        <p className="text-gray-400 max-w-2xl italic">Explore our legacy of technical workshops, seminars, and hackathons that empower the next generation of engineers.</p>
                    </div>

                    <div className="flex flex-col gap-10">
                        {events?.map((event) => (
                            <PremiumEventCard
                                key={event.id}
                                image={event.image}
                                title={event.title}
                                date={event.date}
                                description={event.description}
                                socials={{
                                    instagram: event.instagram || '',
                                    facebook: event.facebook || '',
                                    linkedin: event.linkedin || '',
                                }}
                                onSeeMore={() => handleEventClick(event.slug)}
                            />
                        ))}
                    </div>
                </div>
            </div> */}
            <div>
                coming soon
            </div>
        </EventLayout>
    );
};

export default Events;
