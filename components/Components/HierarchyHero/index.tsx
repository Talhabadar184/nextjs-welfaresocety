'use client';

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HierarchyHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    hideOverlay?: boolean;
}

const HierarchyHero = ({ title, subtitle, backgroundImage, hideOverlay = false }: HierarchyHeroProps) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        let showTimer: NodeJS.Timeout;
        let hideTimer: NodeJS.Timeout;

        if (inView) {
            showTimer = setTimeout(() => {
                setShowContent(true);
                hideTimer = setTimeout(() => {
                    setShowContent(false);
                }, 1500);
            }, 500);
        } else {
            setShowContent(false);
        }

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, [inView]);

    const contentVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: "blur(15px)", scale: 0.8 },
        visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
        exit: {
            opacity: 0,
            y: -40,
            filter: "blur(20px)",
            scale: 1.2,
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    return (
        <section ref={ref} className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                initial={{ scale: 1.1 }}
                animate={{ scale: inView ? 1 : 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Modern Gradient Overlay */}
            {!hideOverlay && (
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.9)_100%)]"></div>
            )}

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-15">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            {/* Hero Content */}
            <AnimatePresence mode="wait">
                {showContent && (
                    <motion.div
                        key="hierarchy-hero-content"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-40 flex flex-col items-center justify-center p-4 text-center max-w-6xl"
                    >
                        <motion.h1
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter"
                        >
                            <span className="bg-gradient-to-r from-white via-white to-[#FFA016] bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                                {title}
                            </span>
                        </motion.h1>

                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-lg md:text-2xl text-gray-300 font-medium tracking-[0.2em] uppercase italic opacity-80 mt-4"
                            >
                                {subtitle}
                            </motion.p>
                        )}

                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "240px" }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00] mt-8 rounded-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
            >
                <span className="text-white/40 text-xs uppercase tracking-widest mb-2 font-bold">Scroll Down</span>
                <div className="w-1 h-12 bg-gradient-to-b from-[#FFA016] to-transparent rounded-full" />
            </motion.div>

            {/* Bottom Masking */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
};

export default HierarchyHero;
