'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CinematicHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    height?: string;
}

const CinematicHero = ({ title, subtitle, backgroundImage, height = "60vh" }: CinematicHeroProps) => {
    return (
        <section
            style={{ height }}
            className="relative w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">
                        {title.split(' ')[0]} <span className="text-[#FFA016]">{title.split(' ').slice(1).join(' ')}</span>
                    </h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg md:text-2xl text-gray-300 font-medium tracking-wide uppercase italic opacity-80"
                        >
                            {subtitle}
                        </motion.p>
                    )}

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="h-1 w-24 bg-[#FFA016] mt-8 mx-auto rounded-full"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default CinematicHero;
