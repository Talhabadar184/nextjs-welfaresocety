'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

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

const UpperHierarchy = () => {
    const [selectedMember, setSelectedMember] = useState<typeof hierarchyMembers[0] | null>(null);

    return (
        <section className="bg-white py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-black uppercase mb-4 text-black">
                        Leadership <span className="text-[#FFA016]">2025-26</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Meet our executive team driving innovation and excellence</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hierarchyMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5 text-white relative">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00]"></div>
                                    <h3 className="text-lg font-black uppercase mt-2 mb-1">{member.name}</h3>
                                    <p className="text-[#FFA016] text-sm font-bold uppercase">{member.position}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedMember && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center px-4 z-50" onClick={() => setSelectedMember(null)}>
                    <div className="bg-gradient-to-br from-zinc-900 to-black w-full max-w-3xl flex flex-col sm:flex-row rounded-2xl shadow-2xl overflow-hidden relative border border-white/20" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedMember.image}
                            alt={selectedMember.name}
                            className="w-full sm:w-1/3 h-64 object-cover"
                        />

                        <div className="p-8 flex-1 text-white">
                            <div className="w-16 h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00] mb-4"></div>
                            <h3 className="text-3xl font-black uppercase">{selectedMember.name}</h3>
                            <p className="text-[#FFA016] text-xl font-bold uppercase mb-4">{selectedMember.position}</p>
                            <p className="text-gray-300 text-md leading-relaxed">{selectedMember.description}</p>
                        </div>

                        <button
                            className="absolute top-4 right-4 text-white hover:text-[#FFA016] transition-colors"
                            onClick={() => setSelectedMember(null)}
                        >
                            <FaTimes className="text-2xl" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default UpperHierarchy;
