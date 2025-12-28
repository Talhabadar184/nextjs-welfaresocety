// import React from "react";

// const AboutSection = () => {
//   return (
//     <section
//       className="relative w-full h-[60vh] bg-gradient-to-r from-black to-[#FFA016] overflow-hidden"
//     >
//       <div className="absolute inset-0 z-30 flex justify-center items-center backdrop-blur-md bg-black/30">
//         <h1 className="text-[9vw] font-extrabold uppercase bg-gradient-to-r from-white to-[#FFA016] bg-clip-text text-transparent">
//           About
//         </h1>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

// // import React from "react";

// // const AboutSection = () => {
// //   const backgroundImageStyle = {
// //     backgroundImage: "url('/g7.jpg')",
// //     backgroundSize: "cover",
// //     backgroundPosition: "center",
// //     backgroundRepeat: "no-repeat",
// //   };

// //   return (
// //     <section
// //       className="relative w-full h-[60vh] overflow-hidden"
// //       style={backgroundImageStyle}
// //     >
// //       {/* Low blur overlay to soften the background slightly */}
// //       <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] z-10" />

// //       {/* Text with gradient clip */}
// //       <div className="absolute inset-0 z-30 flex justify-center items-center">
// //         <h1 className="text-[9vw] font-extrabold uppercase bg-gradient-to-r from-white to-[#FFA016] bg-clip-text text-transparent">
// //           About
// //         </h1>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutSection;




import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative w-full h-[90vh] bg-gradient-to-r from-black to-[#FFA016] overflow-hidden">
      <div className="absolute inset-0 z-30 flex justify-center items-center backdrop-blur-md bg-black/30">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeIn", // Framer Motion built-in easing function
          }}
          className="text-[9vw] font-extrabold uppercase bg-gradient-to-r from-white to-[#FFA016] bg-clip-text text-transparent"
        >
          About
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutSection;
