import React from 'react';
import HierarchyLayout from '../../components/Layouts/HierarchyLayout';
import HierarchyTeamSection from '@/components/ReusableComponents/HierarchyTeamSection';

const hierarchyMembers = [
    {
        name: "Ali Usman Khan",
        position: "President",
        image: "/ali.jpg",
        description: "Muhammad Zafar Ul Haq is the Founder and Chair of the IEEE Computer Society UCP Chapter, known for his visionary leadership and community impact.",
    },
    {
        name: "Rabail Fiaz",
        position: "Vice President",
        image: "/rabail2.jpg",
        description: "Ali Usman Khan Durrani, a Computer Science student at UCP, is passionate about leadership and coding, serving as Vice Chair of IEEE CS.",
    },
    {
        name: "Abdul Moeiz Majid Khan",
        position: "Vice President",
        image: "/abdulmoiz.jpg",
        description: "Ali Usman Khan Durrani, a Computer Science student at UCP, is passionate about leadership and coding, serving as Vice Chair of IEEE CS.",
    },
    {
        name: "Eisha Kahalid",
        position: "Joint Secretary",
        image: "/eisha.jpg",
        description: "Ayaan Zaman Khattak, Executive Director, is a strategic leader known for managing major events.",
    },
    {
        name: "Anwar Karim",
        position: "General Secretary",
        image: "/anwar2.jpg",
        description: "Abdul Moeiz, Secretary of IEEE CS UCP Chapter, is a dedicated Computer Science student passionate about community building.",
    },
    {
        name: "Junita Azhar",
        position: "Treasurer",
        image: "/junita.jpg",
        description: "Anwar Karim, Treasurer of IEEE CS UCP Chapter, is dedicated to tech-driven community growth.",
    },
    {
        name: "Hassan Jamshaid",
        position: "Webmaster",
        image: "/me.jpg",
        description: "Hassan Jamshaid, Webmaster of IEEE CS UCP Chapter, is a skilled Full Stack Developer who ensures a responsive, user-focused website.",
    },
    {
        name: "Bismah Irshad",
        position: "Coordinator",
        image: "/bismah.jpg",
        description: "Rabail Fiaz, Coordinator of IEEE CS UCP Chapter, has developed strong leadership and communication skills.",
    },
    {
        name: "Qasim Naseer",
        position: "Coordinator",
        image: "/qasim.jpg",
        description: "Description for the 8th member of the leadership team.",
    },
];

const Hierarchy2526 = () => {
    return (
        <HierarchyLayout
            title="Cabinet 2025-26"
            subtitle="Shaping the future, today"
            backgroundImage="/csnew.jpg"
            hideOverlay={true}
        >
            <div className="bg-black py-20">
                <HierarchyTeamSection
                    title="Leadership 25-26"
                    members={hierarchyMembers}
                    showOverlay={false}
                />

                <div className="py-24 text-center border-t border-white/5 bg-zinc-950/50 backdrop-blur-sm mt-12 mx-6 md:mx-12 rounded-3xl border border-white/10">
                    <div className="w-16 h-1 bg-[#FFA016] mb-8 mx-auto rounded-full" />
                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                        Full Cabinet <span className="text-[#FFA016]">Reveal</span> Coming Soon
                    </h3>
                    <p className="text-gray-400 text-lg md:text-xl italic max-w-2xl mx-auto px-6">
                        "The next generation of leaders is preparing to carry the torch of excellence."
                    </p>
                </div>
            </div>
        </HierarchyLayout>
    );
};

export default Hierarchy2526;
