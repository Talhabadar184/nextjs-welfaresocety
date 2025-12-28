'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HierarchyCardProps {
    name: string;
    position: string;
    image: string;
    onClick: () => void;
}

const HierarchyCard = ({ name, position, image, onClick }: HierarchyCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            className="group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square overflow-hidden relative">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="p-5 text-white relative">
                    {/* Persistent Top accent line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00]"></div>

                    <h3 className="text-lg font-black uppercase mt-2 mb-1 group-hover:text-[#FFA016] transition-colors leading-tight">
                        {name}
                    </h3>
                    <p className="text-[#FFA016] text-xs font-bold uppercase tracking-widest">
                        {position}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default HierarchyCard;
