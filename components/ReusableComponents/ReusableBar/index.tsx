'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ReusableBarProps {
    text: string;
}

const ReusableBar = ({ text }: ReusableBarProps) => {
    return (
        <div className="relative w-full overflow-hidden bg-black py-10 md:py-16">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFA016] to-transparent" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-6"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.15em] text-white">
                    {text}
                </h2>
                <div className="mt-4 flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#FFA016] rounded-full" />
                    <div className="w-2 h-2 bg-[#FFA016] rotate-45" />
                    <div className="h-[2px] w-12 bg-[#FFA016] rounded-full" />
                </div>
            </motion.div>
        </div>
    );
};

export default ReusableBar;
