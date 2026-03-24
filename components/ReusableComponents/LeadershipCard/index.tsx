'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

interface LeadershipCardProps {
    name: string;
    title: string;
    image: string;
    message: string;
    linkedin?: string;
    theme?: 'light' | 'dark';
    reverse?: boolean;
}

const LeadershipCard = ({
    name,
    title,
    image,
    message,
    linkedin,
    theme = 'dark',
    reverse = false,
}: LeadershipCardProps) => {
    return (
        <section className={`py-16 md:py-24 px-6 md:px-12 ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
            <div className={`max-w-6xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full md:w-2/5"
                >
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#50b55a] to-[#16671c] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src={image}
                                alt={name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full md:w-3/5"
                >
                    <div className="flex flex-col">
                        <div className="w-16 h-1 bg-[#16671c] mb-6 rounded-full" />
                        <h2 className={`text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                            {name}
                        </h2>
                        <h3 className="text-[#16671c] text-sm md:text-lg font-bold uppercase tracking-widest mb-8">
                            {title}
                        </h3>
                        <p className={`text-base md:text-xl leading-relaxed italic border-l-4 border-[#FFA016]/20 pl-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                            "{message}"
                        </p>

                        {linkedin && (
                            <a
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 self-start p-3 bg-white/5 hover:bg-[#16671c] text-white hover:text-black rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
                            >
                                <FaLinkedin className="text-[#287dd7] text-xl md:text-2xl" />
                            </a>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadershipCard;
