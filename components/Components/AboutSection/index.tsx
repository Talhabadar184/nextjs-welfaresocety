import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [showContent, setShowContent] = useState(false);
  const backgroundImage = '/g7.jpg';

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

  return (
    <section ref={ref} className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: inView ? 1 : 1.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.8)_100%)]"></div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Hero Content */}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key="about-title"
            initial={{ opacity: 0, y: 30, filter: "blur(15px)", scale: 0.8 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{
              opacity: 0,
              y: -40,
              filter: "blur(20px)",
              scale: 1.2,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="absolute inset-0 z-40 flex flex-col items-center justify-center p-4"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-center tracking-tighter"
            >
              <span className="bg-gradient-to-r from-white via-white to-[#FFA016] bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                About us
              </span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-[#FFA016] mt-4"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Masking for Smooth Section Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default AboutSection;

