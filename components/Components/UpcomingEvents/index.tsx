// // import React from "react";

// // const UpcomingEvents = () => {
// //   return (
// //     <section className="w-full bg-white px-6 py-5 lg:py-0 lg:px-0">
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

// //         <div className="flex flex-col justify-start ml-20">
// //           <h2 className="pt-50 text-4xl font-semibold text-black mb-10">Upcoming events</h2>
// //           <button className="bg-zinc-900 text-white text-sm font-semibold px-6 py-3 rounded-full hover:shadow-md transition w-fit">
// //             View all events
// //           </button>
// //         </div>


// //         <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full">

// //           <div className="bg-[#183B4E] text-white p-6 flex flex-col justify-center w-full h-full">
// //             <h3 className="text-2xl font-semibold">26 March 2025</h3>
// //             <p className="underline mt-2 text-sm">Hierarchy Meeting →</p>
// //           </div>

// //           <div className="w-full h-full">
// //             <img
// //               src="/group.jpg"
// //               alt="Students Group"
// //               className="w-full h-full object-cover"
// //             />
// //           </div>

// //           <div className="bg-[#E44A1D] text-white p-10 flex flex-col justify-center w-full h-full">
// //             <h3 className="text-2xl font-semibold">Campus Tours</h3>
// //             <p className="underline mt-2 text-sm">Every Wednesday →</p>
// //           </div>


// //           <div className="bg-[#7271AC] text-white p-10 flex flex-col justify-center w-full h-full">
// //             <h3 className="text-2xl font-semibold">30 - 31 December 2024</h3>
// //             <p className="underline mt-2 text-sm">TFT 2.0 →</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default UpcomingEvents;

'use client';

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AnimatedImageGallery from "../AnimatedImageGallery";
import { trpc } from '@/lib/trpc-client';

const UpcomingEvents = () => {
  const router = useRouter();

  // Fetch events. orderBy desc means ID 11 (oldest date in seed) comes first? 
  // Wait, seed inserted ID 1 = Codex (Feb). ID 11 = HITE (Oct).
  // We want upcoming (Feb). So we want the END of the list.
  // So we take .reverse() -> 1, 2, ...

  const { data, isLoading } = trpc.events.getAll.useQuery();

  // Memoize the random selection so it doesn't change on every render, strictly dependent on 'data' loading
  const randomEvents = React.useMemo(() => {
    if (!data) return [];
    // Create a copy and shuffle using Fisher-Yates or simple sort for small lists
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [data]);

  const upcomingEvents = randomEvents;

  if (isLoading) {
    return <div className="p-10 text-center">Loading events...</div>;
  }

  // Fallbacks if less than 3 events
  const event1 = upcomingEvents[0];
  const event2 = upcomingEvents[1];
  const event3 = upcomingEvents[2];
  const event4 = upcomingEvents[3];
  const event5 = upcomingEvents[4];


  // Images for the gallery (use event images or fallbacks)
  const galleryImages = upcomingEvents.map(e => e.image || "/g7.jpg");
  if (galleryImages.length === 0) galleryImages.push("/group.jpg");

  return (
    <section className="w-full bg-white px-4 sm:px-6 py-20 mb-6 md:mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Mobile-Only Padding Fix */}
        <div className="block lg:hidden h-10" />

        {/* Left Content */}
        <div className="pt-0 lg:pt-[50px] flex flex-col justify-start text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-black text-black mb-8 leading-tight">
            Upcoming <span className="text-[#2eb258]">Events</span>
          </h2>
          <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto lg:mx-0">
            Discover our latest tech events, workshops, and community gatherings
          </p>
          <Link href="/events">
            <button className="bg-black text-white text-sm font-bold px-8 py-4 rounded-full hover:bg-[#FFA016] hover:scale-105 transition-all duration-300 w-fit mx-auto lg:mx-0 shadow-lg">
              View All Events
            </button>
          </Link>
        </div>


        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 h-auto sm:h-[70vh] perspective-1000">
          {/* Box 1 (Event 1) - Purple */}
          <div className="bg-gradient-to-br from-[#4B0082] to-[#6B21A8] text-white p-8 flex flex-col justify-center w-full h-full relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-10 rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {event5 ? (
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 transform group-hover:translate-x-1 transition-transform">{event1.date}</h3>
                <p className="font-bold text-xl mb-3 line-clamp-2 transform group-hover:translate-x-1 transition-transform">{event1.title}</p>
                <p
                  className="underline mt-2 text-sm cursor-pointer hover:text-gray-300 inline-flex items-center gap-1 transform group-hover:translate-x-2 transition-transform"
                  onClick={() => router.push(`/events/${event5.slug}`)}
                >
                  More Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </div>
            ) : (
              <p>No upcoming event</p>
            )}
          </div>

          {/* Image */}
          <div className="w-full h-40 sm:h-full overflow-hidden relative group rounded-2xl shadow-xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="transform group-hover:scale-110 transition-transform duration-700 h-full">
              <AnimatedImageGallery images={galleryImages} />
            </div>
          </div>

          {/* Box 2 (Event 2) - Orange */}
          <div className="bg-gradient-to-br from-[#ffe135] to-[#9a8909] text-white p-8 flex flex-col justify-center w-full h-full relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-10 rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {event2 ? (
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 transform group-hover:translate-x-1 transition-transform">{event2.title}</h3>
                <p className="text-sm mb-3 font-semibold transform group-hover:translate-x-1 transition-transform">{event2.date}</p>
                <p
                  className="underline mt-2 text-sm cursor-pointer hover:text-gray-200 inline-flex items-center gap-1 transform group-hover:translate-x-2 transition-transform"
                  onClick={() => router.push(`/events/${event2.slug}`)}
                >
                  More Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </div>
            ) : (
              <p>Stay tuned!</p>
            )}
          </div>

          {/* Box 4 (Event 4) - Black */}
          <div className="bg-gradient-to-br from-black to-zinc-800 text-white p-8 flex flex-col justify-center w-full h-full relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-10 rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFA016]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {event4 ? (
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 transform group-hover:translate-x-1 transition-transform">{event4.date}</h3>
                <p className="font-bold text-xl mb-3 line-clamp-2 transform group-hover:translate-x-1 transition-transform">{event3.title}</p>
                <p
                  className="underline mt-2 text-sm cursor-pointer hover:text-gray-300 inline-flex items-center gap-1 transform group-hover:translate-x-2 transition-transform"
                  onClick={() => router.push(`/events/${event4.slug}`)}
                >
                  More Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </div>
            ) : (
              <p>Stay tuned!</p>
            )}
          </div>

          <div className="bg-gradient-to-br from-black to-zinc-800 text-white p-8 flex flex-col justify-center w-full h-full relative overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-10 rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFA016]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {event3 ? (
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 transform group-hover:translate-x-1 transition-transform">{event3.date}</h3>
                <p className="font-bold text-xl mb-3 line-clamp-2 transform group-hover:translate-x-1 transition-transform">{event3.title}</p>
                <p
                  className="underline mt-2 text-sm cursor-pointer hover:text-gray-300 inline-flex items-center gap-1 transform group-hover:translate-x-2 transition-transform"
                  onClick={() => router.push(`/events/${event3.slug}`)}
                >
                  More Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                </p>
              </div>
            ) : (
              <p>Stay tuned!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;






