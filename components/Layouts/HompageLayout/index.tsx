// import React from 'react';
// import Header from '../../Components/Header'

// const HomepageLayout = () => {
//   const backgroundImage = '/group.jpg'; // make sure it's in /public/

//   return (
//     <div className="relative min-h-screen text-white">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* Optional dark overlay */}
//       <div className="absolute inset-0 bg-black opacity-40 z-0" />

//       {/* Content */}
//       <div className="relative z-10">
//         <Header />
//         <div className="pt-32 text-center">
//           <h2 className="text-4xl font-bold">Welcome to IEEE CS UCP</h2>
//           <p className="mt-2 text-lg">Empowering Future Tech Leaders</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomepageLayout;

// import React from 'react';
// import Header from '../../Components/Header';
// import OpenDayCard from '../../Components/Herobox'; // Import the component
// import Herobox from '../../Components/Herobox';

// const HomepageLayout = () => {
//   const backgroundImage = '/group.jpg'; // make sure it's in /public/

//   return (
//     <div className="relative min-h-screen text-white">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* Optional dark overlay */}
//       <div className="absolute inset-0 bg-black opacity-40 z-0" />

//       {/* Content */}
//       <div className="relative z-10">
//         <Header />
//         <div className="pt-32 px-6">
//           <h2 className="text-4xl font-bold">
//              Welcome to IEEE CS UCP
//           </h2>

//           {/* Render the box component here */}
//           <Herobox />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomepageLayout;

// import React from 'react';
// import Header from '../../Components/Header';
// import OpenDayCard from '../../Components/Herobox';
// import Herobox from '../../Components/Herobox';

// const HomepageLayout = () => {
//   const backgroundImage = '/group.jpg'; // make sure it's in /public/

//   return (
//     <div className="relative min-h-screen text-white">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black opacity-40 z-0" />

//       {/* Content */}
//       <div className="relative z-10">
//         <Header />
//         <div className="pt-28 px-10 max-w-xl">
//           {/* Heading */}
//           <h2 className="text-4xl font-bold mb-4">Welcome to IEEE CS UCP</h2>

//           {/* Card */}
//           <Herobox />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomepageLayout;
// import React from 'react';
// import Header from '../../Components/Header';
// import Herobox from '../../Components/Herobox';

// const HomepageLayout = () => {
//   const backgroundImage = '/g7.jpg'; // make sure it's in /public/

//   return (
//     <div className="relative min-h-screen text-white">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black opacity-40 z-0" />

//       {/* Content */}
//       <div className="relative z-10">
//         <Header />

//         {/* Main Section */}
//         <div className="pt-100 px-20 flex flex-col items-start">
//           {/* Heading */}
//           <h2 className="text-4xl font-bold mb-1">Welcome to IEEE CS UCP</h2>

//           {/* Purple Box + Button */}
//           <Herobox />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomepageLayout;

// import React from 'react';
// import Header from '../../Components/Header';
// import Herobox from '../../Components/Herobox';

// const HomepageLayout = ({ children }) => 
// {
//   const backgroundImage = '/g7.jpg'; 

//   return (
//     <div>
//       <div className="relative min-h-screen text-white">
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{ backgroundImage: `url(${backgroundImage})` }}/>
//         <div className="absolute inset-0 bg-black opacity-40 z-0" />
//         <div className="relative z-10">
//           <Header />
//           <div className="pt-100 px-20 flex flex-col items-start">
//             <h2 className="text-4xl font-bold">Welcome to IEEE CS UCP</h2>
//             <Herobox />
//           </div>
//         </div>
//       </div>
//       <div>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default HomepageLayout;

// import React from 'react';
// import Header from '../../Components/Header';
// import Herobox from '../../Components/Herobox';
// import Footer from '../../Components/Footer';

// const HomepageLayout = ({ children }) => {
//   const backgroundImage = '/g7.jpg';

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative min-h-screen text-white">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black opacity-40 z-0" />

//         {/* Content */}
//         <div className="relative z-10">
//           <Header />

//           <div className="pt-75 px-2 sm:px-10 md:px-20 lg:px-10 flex flex-col items-start space-y-4">
//             <h2 className="top-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//               Welcome to IEEE CS UCP
//             </h2>
//             <Herobox />
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div>

//         {children}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default HomepageLayout;

// import React from 'react';
// import Header from '../../Components/Header';
// import Herobox from '../../Components/Herobox';
// import Footer from '../../Components/Footer';
// import { motion, AnimatePresence } from "framer-motion";
// const HomepageLayout = ({ children }) => {
//   const backgroundImage = '/g7.jpg';

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative min-h-screen text-white">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0 backdrop-blur-sm"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black opacity-40 z-0" />

//         {/* Header + Hero Content */}
//         <div className="relative z-10">
//           <Header />

//           <div className="pt-[390px] px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-start space-y-4">
//           {/* <motion.h2
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8, ease: "easeOut" }}
//   className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-[#FFA016] to-white text-transparent bg-clip-text"
// >
//   Welcome to IEEE Computer Society UCP
// </motion.h2> */}
//         <AnimatePresence>
//         {showOverlay && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="absolute inset-0 z-30 flex justify-center items-center backdrop-blur-md bg-black/30"
//           >
//             <h1 className="text-[10vw] font-extrabold uppercase text-white whitespace-nowrap">
//             Welcome to IEEE Computer Society UCP
//             </h1>
//           </motion.div>
//         )}
//       </AnimatePresence>
//             {/* <Herobox /> */}
//           </div>
//         </div>
//       </div>

//       {/* Children Sections */}
//       <div>{children}</div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HomepageLayout;

// import React, { useState, useEffect } from 'react';
// import Header from '../../Components/Header';
// import Footer from '../../Components/Footer';
// import { motion, AnimatePresence } from "framer-motion";

// const [showOverlay, setShowOverlay] = useState(true);

// useEffect(() => {
//   const timer = setTimeout(() => setShowOverlay(false), 3000); // hides overlay after 3 sec
//   return () => clearTimeout(timer);
// }, []);

// const HomepageLayout = ({ children }) => {
//   const backgroundImage = '/g7.jpg';

//   // 🔧 Add showOverlay state
//   const [showOverlay, setShowOverlay] = useState(true);

//   // Optional: Auto-hide overlay after few seconds
//   useEffect(() => {
//     const timer = setTimeout(() => setShowOverlay(false), 3000); // 3 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative min-h-screen text-white">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/40 z-0 backdrop-blur-sm" />

//         {/* Header + Hero Content */}
//         <div className="relative z-10">
//           <Header />
//           <div className="pt-[390px] px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-start space-y-4 relative">
//   {/* Overlay Transparency Animation Only */}
//   <AnimatePresence>
//     {showOverlay && (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.5 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.8, ease: "easeInOut" }}
//         className="absolute inset-0 z-20 backdrop-blur-md bg-black/30"
//       />
//     )}
//   </AnimatePresence>

//   {/* Static Heading on Top */}
//   <div className="relative z-30 w-full flex justify-center">
//   <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFA016] hover:from-[#FFA016] hover:to-white transition-all duration-500 ease-in-out text-center whitespace-nowrap">
//   Welcome to IEEE Computer Society UCP
// </h1>


//   </div>
// </div>

//         </div>
//       </div>

//       {/* Children Sections */}
//       <div>{children}</div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HomepageLayout;

// import React, { useState, useEffect } from 'react';
// import Header from '../../Components/Header';
// import Footer from '../../Components/Footer';
// import { motion, AnimatePresence } from "framer-motion";

// const HomepageLayout = ({ children }) => {
//   const backgroundImage = '/g7.jpg'; // your background image path

//   // 🔧 Overlay visibility state
//   const [showOverlay, setShowOverlay] = useState(true);

//   // ⏳ Auto-hide overlay after 3 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => setShowOverlay(false), 2000); // 2 seconds timer to hide overlay
//     return () => clearTimeout(timer); // Cleanup on unmount
//   }, []);

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative min-h-screen text-white">
//         {/* 🌄 Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         />

//         {/* 🔲 Conditional Overlay with Simple Fade-out Animation (No Blur) */}
//         <AnimatePresence>
//           {showOverlay && (
//             <motion.div
//               key="fade"
//               initial={{ opacity: 2 }} // Starts visible
//               animate={{ opacity: 1 }} // Fades out
//               exit={{ opacity: 0 }} // Keep it invisible on exit
//               transition={{ duration: 2, ease: "easeInOut" }} // 2 seconds fade-out duration
//               className="absolute inset-0 z-10 bg-black/30" // Simple black overlay without blur
//             />
//           )}
//         </AnimatePresence>

//         {/* 🧱 Content */}
//         <div className="relative z-20"> {/* Ensure the content is above the overlay */}
//           <Header />
//           <div className="pt-[390px] px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-start space-y-4 relative">
//             {/* Heading with Gradient Text + Hover Effect */}
//             <div className="relative z-30 w-full flex justify-center">
//               <h1 className="text-1xl sm:text-2xl md:text-0xl lg:text-5xl xl:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFA016] hover:from-[#FFA016] hover:to-white transition-all duration-500 ease-in-out text-center whitespace-nowrap">
//                 Welcome to IEEE Computer Society UCP
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Children Sections */}
//       <div>{children}</div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HomepageLayout;

import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Herobox from '../../Components/Herobox';

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  const backgroundImage = '/g7.jpg';

  // Observe viewport - triggerOnce: false allows it to replay
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [showContent, setShowContent] = useState(false);

  // Show content with delay when in view, then hide after 1.5s
  useEffect(() => {
    let showTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    if (inView) {
      showTimer = setTimeout(() => {
        setShowContent(true);
        // "Be gone" logic with 1.5s gap
        hideTimer = setTimeout(() => {
          setShowContent(false);
        }, 3000); // Display for 3 seconds instead of 1.5s
      }, 500); // Wait for load/view
    } else {
      // Reset when scrolling away so it can re-animate
      setShowContent(false);
    }

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [inView]);

  return (
    <div>
      {/* Header always on top */}
      <Header />

      {/* Hero Section */}
      <section
        ref={ref}
        className="relative min-h-screen w-full overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: inView ? 1 : 1.1 }}
          transition={{ duration: 2.5, ease: "easeOut" }} // Slower parallax entrance
        />

        {/* Animated Gradient Overlay - Optimized for better blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>

        {/* Animated Grid Pattern - Sync with About Page */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Hero Content */}
        <AnimatePresence mode="wait">
          {showContent && (
            <motion.div
              key="hero-content"
              initial={{ opacity: 0, y: 30, filter: "blur(15px)", scale: 0.8 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{
                opacity: 0,
                y: -40,
                filter: "blur(20px)",
                scale: 1.2,
                transition: { duration: 1.5, ease: "easeInOut" } // Slower exit blur
              }}
              className="relative z-20 min-h-screen flex items-center justify-center px-4"
            >
              <div className="text-center w-full flex flex-col items-center">
                <motion.h1
                  className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase mb-4 leading-tight bg-gradient-to-r from-white via-white to-[#FFA016] bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] whitespace-normal sm:whitespace-nowrap overflow-visible p-2"
                >
                  IEEE Computer Society UCP
                </motion.h1>

                {/* Animated Underline - Sync with About Page */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "200px" }}
                  transition={{ delay: 0.5, duration: 1.5 }} // Slower underline draw
                  className="h-1 bg-[#FFA016] mb-8"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1.5 }} // Slower text fade
                  className="text-lg sm:text-xl md:text-2xl text-white/80 drop-shadow-2xl font-bold max-w-4xl mx-auto tracking-widest uppercase"
                >
                  Empowering Future Tech Leaders
                </motion.p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Masking - Enhanced for Blending with Logo Bar */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>

      </section>

      {/* Page Sections */}
      <div>{children}</div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomepageLayout;






