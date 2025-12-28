'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaArrowRight } from 'react-icons/fa';

interface EventCardProps {
    image: string;
    title: string;
    date: string;
    description: string;
    socials?: {
        instagram?: string;
        facebook?: string;
        linkedin?: string;
    };
    onSeeMore: () => void;
}

const EventCard = ({
    image,
    title,
    date,
    description,
    socials,
    onSeeMore,
}: EventCardProps) => {
    return (
        <section className="bg-white py-12 px-6 md:px-12 border-b border-gray-100 last:border-0">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full md:w-2/5 group"
                >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-3/5"
                >
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[#FFA016] text-sm font-black uppercase tracking-widest">{date}</span>
                            <div className="h-[1px] flex-1 bg-gray-100" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-4 group-hover:text-[#FFA016] transition-colors">
                            {title}
                        </h2>

                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 line-clamp-3">
                            {description}
                        </p>

                        <div className="flex items-center justify-between">
                            <button
                                onClick={onSeeMore}
                                className="flex items-center gap-2 text-black font-black uppercase text-sm tracking-widest group hover:text-[#FFA016] transition-all"
                            >
                                See Details <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            {socials && (
                                <div className="flex items-center gap-4">
                                    {socials.instagram && (
                                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA016] transition-colors">
                                            <FaInstagram size={20} />
                                        </a>
                                    )}
                                    {socials.facebook && (
                                        <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA016] transition-colors">
                                            <FaFacebook size={20} />
                                        </a>
                                    )}
                                    {socials.linkedin && (
                                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA016] transition-colors">
                                            <FaLinkedin size={20} />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EventCard;
