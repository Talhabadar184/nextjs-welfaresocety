'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface Member {
    name: string;
    position: string;
    image: string;
    description: string;
}

interface UpperHierarchyProps {
    title: string;
    subtitle?: string;
    members: Member[];
    showTitle?: boolean;
}

const UpperHierarchy = ({
    title,
    subtitle,
    members,
    showTitle = true
}: UpperHierarchyProps) => {
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    return (
        <section className="bg-white py-20 px-8">
            <div className="max-w-7xl mx-auto">
                {showTitle ? (
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black uppercase mb-4 text-black">
                            {title.split(' ')[0]} <span className="text-[#FFA016]">{title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
                    </div>
                ) : (
                    <div className="flex flex-col mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black">
                            {title}
                        </h2>
                        <div className="w-20 h-1 bg-[#FFA016] mt-4 rounded-full" />
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
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
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center px-4 z-[999]" onClick={() => setSelectedMember(null)}>
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
