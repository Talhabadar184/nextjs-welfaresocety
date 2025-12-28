'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

interface PremiumEventCardProps {
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

const PremiumEventCard = ({ image, title, date, description, socials, onSeeMore }: PremiumEventCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative flex flex-col md:flex-row gap-8 bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#FFA016]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,160,22,0.1)] p-6 md:p-8"
        >
            {/* Image Wrapper */}
            <div className="w-full md:w-2/5 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FFA016] text-[10px]" />
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">{date}</span>
                </div>
            </div>

            {/* Content Wrapper */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="w-12 h-1 bg-[#FFA016] mb-6 rounded-full group-hover:w-24 transition-all duration-500" />

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-[#FFA016] transition-colors duration-300 leading-tight">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 border-l-2 border-[#FFA016]/30 pl-6 italic line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <button
                        onClick={onSeeMore}
                        className="flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-[0.2em] hover:text-[#FFA016] transition-all group/btn"
                    >
                        Learn More
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:border-[#FFA016] group-hover/btn:bg-[#FFA016] group-hover/btn:text-black transition-all">
                            <FaArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                        </div>
                    </button>

                    {socials && (
                        <div className="flex items-center gap-5">
                            {socials.instagram && (
                                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFA016] transition-colors">
                                    <FaInstagram size={16} />
                                </a>
                            )}
                            {socials.facebook && (
                                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFA016] transition-colors">
                                    <FaFacebook size={16} />
                                </a>
                            )}
                            {socials.linkedin && (
                                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#FFA016] transition-colors">
                                    <FaLinkedin size={16} />
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default PremiumEventCard;
