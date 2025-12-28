'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";

interface LeadershipCardProps {
    name: string;
    title: string;
    image: string;
    message: string;
    linkedin?: string;
    reverse?: boolean;
    theme?: 'dark' | 'light';
}

const LeadershipCard = ({ name, title, image, message, linkedin, reverse = false, theme = 'dark' }: LeadershipCardProps) => {
    const isLight = theme === 'light';

    return (
        <section className={`relative w-full overflow-hidden ${isLight ? 'bg-white' : 'bg-black'} border-y ${isLight ? 'border-gray-100' : 'border-white/5'}`}>
            <div className={`relative z-10 flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-[600px]`}>

                {/* Profile Image Section */}
                <div className="relative w-full md:w-2/5 group overflow-hidden">
                    <div
                        className={`absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-1000 ease-in-out`}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    {/* Gradient Overlay for individual section */}
                    <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-${reverse ? 'r' : 'l'} ${isLight ? 'from-white via-white/10 to-transparent' : 'from-black via-black/20 to-transparent'}`}></div>
                </div>

                {/* Message Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center ${isLight ? 'bg-white' : 'bg-[linear-gradient(to_right,#090909_0%,#000000_100%)]'}`}
                >
                    <div className="flex flex-col space-y-6">
                        <div className="w-12 h-1 bg-[#FFA016]"></div>

                        <div className="space-y-1">
                            <h2 className={`text-3xl md:text-4xl font-black ${isLight ? 'text-black' : 'text-white'} uppercase tracking-tight`}>{name}</h2>
                            <p className="text-[#FFA016] text-sm font-bold uppercase tracking-widest">{title}</p>
                        </div>

                        <div className="relative">
                            <div className={`absolute top-0 left-0 text-7xl ${isLight ? 'text-black/5' : 'text-white/5'} font-serif -ml-8 -mt-6`}>"</div>
                            <p className={`${isLight ? 'text-gray-700' : 'text-gray-400'} text-base md:text-lg leading-relaxed font-medium relative z-10`}
                                dangerouslySetInnerHTML={{ __html: message }}
                            />
                        </div>

                        <div className="pt-8 flex items-center justify-between opacity-30">
                            <div className="flex items-center space-x-4">
                                <img src="/Logo2.png" alt="Logo" className={`w-8 h-8 object-contain`} />
                                <div className={`h-px w-20 ${isLight ? 'bg-black/10' : 'bg-white/20'}`}></div>
                            </div>

                            {linkedin && (
                                <a href={linkedin} target="_blank" rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full ${isLight ? 'bg-black/5' : 'bg-white/10'} backdrop-blur-md flex items-center justify-center ${isLight ? 'text-black' : 'text-white'} hover:bg-[#FFA016] hover:text-white transition-all duration-300 opacity-100`}>
                                    <FaLinkedin className="text-lg" />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Orbs */}
            <div className={`absolute ${reverse ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFA016]/${isLight ? '10' : '5'} rounded-full blur-[100px] pointer-events-none`}></div>
        </section>
    );
};

export default LeadershipCard;
