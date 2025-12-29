// import React from "react";
// import { SiIeee } from "react-icons/si";

// const logos = [
//     {
//         name: "UCP",
//         icon: (
//           <img
//             src="ucp1.png"
//             alt="ucp"
//             className="color-white w-50 sm:w-54 h-auto object-contain"
//           />
//         ),
//       },

//   {
//     name: "IEEE CS",
//     icon: (
//       <img
//         src="Logo2.png"
//         alt="IEEE CS"
//         className="w-8 sm:w-14 h-auto object-contain"
//       />
//     ),
//   },
//   {
//     name: "IEEE",
//     icon: <SiIeee className="text-white text-8xl sm:text-8xl" />,
//   },

// ];

// const LogoScroller = () => {
//   return (
//     <section className="bg-[#2b2153] py-6">
//       <div className="flex justify-center items-center gap-8 flex-wrap px-4">
//         {logos.map((logo, index) => (
//           <div key={index} title={logo.name}>
//             {logo.icon}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LogoScroller;

// import React from "react";
// import { SiIeee } from "react-icons/si";

// const logos = [
//   {
//     name: "UCP",
//     icon: (
//       <img
//         src="ucp1.png"
//         alt="ucp"
//         className="w-50 sm:w-38 h-auto object-contain"
//       />
//     ),
//   },
//   {
//     name: "IEEE CS",
//     icon: (
//       <img
//         src="Logo2.png"
//         alt="IEEE CS"
//         className="w-8 sm:w-14 h-auto object-contain"
//       />
//     ),
//   },
//   {
//     name: "IEEE",
//     icon: <SiIeee className="text-white text-6xl sm:text-7xl" />,
//   },
// ];

// const LogoScroller = () => {
//   return (
//     <section className="bg-black py-6 overflow-x-auto">
//       <div className="flex flex-nowrap items-center gap-6 px-4 sm:justify-center">
//         {logos.map((logo, index) => (
//           <div key={index} title={logo.name} className="flex-shrink-0">
//             {logo.icon}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LogoScroller;

// import React from "react";
// import { SiIeee } from "react-icons/si";

// // Logo data with a specific class for the IEEE CS logo to target animation
// const logos = [
//   {
//     name: "UCP",
//     icon: (
//       <img
//         src="ucp1.png"
//         alt="ucp"
//         className="w-50 sm:w-38 h-auto object-contain"
//       />
//     ),
//   },
//   {
//     name: "IEEE CS",
//     icon: (
//       <img
//         src="Logo2.png"
//         alt="IEEE CS"
//         className="w-8 sm:w-14 h-auto object-contain ieee-cs-logo" // Added specific class for animation
//       />
//     ),
//   },
//   {
//     name: "IEEE",
//     icon: <SiIeee className="text-white text-6xl sm:text-7xl" />,
//   },
// ];

// const LogoScroller = () => {
//   return (
//     <section className="bg-black py-6 overflow-x-auto">
//       <div className="flex flex-nowrap items-center gap-6 px-4 sm:justify-center">
//         {logos.map((logo, index) => (
//           <div key={index} title={logo.name} className="flex-shrink-0">
//             {logo.icon}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LogoScroller;

import React from "react";
import { SiIeee } from "react-icons/si";
import { motion, Variants } from "framer-motion";

// Logo data with updated sizes
const logos = [
  {
    name: "UCP",
    icon: (
      <img
        src="ucp1.png"
        alt="ucp"
        className="w-48 sm:w-56 h-auto object-contain"
      />
    ),
  },
  {
    name: "UCP Welfare Society",
    icon: (
      <img
        src="uws white.png"
        alt="IEEE CS"
        className="w-24 sm:w-28 h-auto object-contain"
      />
    ),
  },
  
  
];

const LogoScroller = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.8, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-black py-8 overflow-hidden border-t border-white/5">
      {/* Subtle blend shadow from hero */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-black to-transparent pointer-events-none opacity-60"></div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,160,22,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-10 sm:gap-20 px-8 relative z-10"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            title={logo.name}
            className="flex-shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 transform"
            whileHover={{
              scale: 1.15,
              rotate: index % 2 === 0 ? 2 : -2,
              filter: "drop-shadow(0 0 15px rgba(255,160,22,0.3))"
            }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            >
              {logo.icon}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Finishing Bottom shadow */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-40"></div>
    </section>
  );
};

export default LogoScroller;


