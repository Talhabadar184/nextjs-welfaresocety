// import React from 'react';

// const HierarchySection = () => {
//   return (
//     <section
//       className="relative w-full h-[80vh] overflow-hidden bg-cover bg-center"
//       style={{
//         backgroundImage: "url('/g9.jpg')",
//       }}
//     >
    
//       {/* <div className="absolute inset-0 bg-white opacity-0 z-10" /> */}

      
//       <div className="absolute inset-0 z-20 flex justify-center items-center bg-black/30">
//         <h1 className="text-[9vw] font-extrabold uppercase bg-gradient-to-r from-white to-[#FFA016] bg-clip-text text-transparent">
//           Hierarchy 
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default HierarchySection;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HierarchySection = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[100vh] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/g9.jpg')",
      }}
    >
      {/* AnimatePresence for heading overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="hierarchy-overlay"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-20 flex justify-center items-center backdrop-blur-md bg-black/30"
          >
            <h1 className="text-[9vw] font-extrabold uppercase bg-gradient-to-r from-white to-[#FFA016] bg-clip-text text-transparent whitespace-nowrap text-center">
              Hierarchy
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HierarchySection;





           