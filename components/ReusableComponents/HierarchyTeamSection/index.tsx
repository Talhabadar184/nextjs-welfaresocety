'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaInfoCircle } from "react-icons/fa";

interface Member {
    name: string;
    position: string;
    image: string;
    description: string;
}

interface HierarchyTeamSectionProps {
    title: string;
    members: Member[];
    showOverlay?: boolean;
}

const HierarchyTeamSection = ({ title, members, showOverlay = true }: HierarchyTeamSectionProps) => {
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    return (
        <section className="bg-black py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="flex items-center gap-4"
                    >
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                            {title.split(' ')[0]} <span className="text-[#FFA016]">{title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <div className="flex-grow h-[1px] bg-gradient-to-r from-[#FFA016]/50 to-transparent ml-4 hidden md:block" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {members.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group cursor-pointer relative"
                            onClick={() => setSelectedMember(member)}
                        >
                            <div className="relative overflow-hidden rounded-xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-[#FFA016]/50 hover:shadow-[0_0_30px_rgba(255,160,22,0.15)] group-hover:-translate-y-2">
                                <div className="aspect-[4/5] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={`w-full h-full object-cover ${showOverlay ? 'grayscale opacity-80' : 'grayscale-0 opacity-100'} group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700`}
                                    />
                                </div>

                                <div className="p-4 bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-0 left-0 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="w-8 h-1 bg-[#FFA016] mb-2 rounded-full" />
                                    <h3 className="text-lg font-bold uppercase text-white truncate">{member.name}</h3>
                                    <p className="text-[#FFA016] text-[10px] font-black uppercase tracking-widest">{member.position}</p>
                                </div>

                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-[#FFA016] text-black p-2 rounded-full shadow-lg">
                                        <FaInfoCircle size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-zinc-900 w-full max-w-4xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col md:flex-row"
                        >
                            <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-8 md:p-12 flex-1 relative">
                                <button
                                    className="absolute top-6 right-6 text-white/50 hover:text-[#FFA016] transition-colors"
                                    onClick={() => setSelectedMember(null)}
                                >
                                    <FaTimes size={24} />
                                </button>

                                <div className="w-12 h-1 bg-[#FFA016] mb-6 rounded-full" />
                                <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter mb-2">
                                    {selectedMember.name}
                                </h3>
                                <p className="text-[#FFA016] text-xs md:text-lg font-bold uppercase tracking-[0.2em] mb-8 italic">
                                    {selectedMember.position}
                                </p>
                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed border-l-2 border-[#FFA016]/30 pl-6 italic">
                                        "{selectedMember.description}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HierarchyTeamSection;
