// import React from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const members = [
//   {
//     name: "John Doe",
//     position: "Co-Founder",
//     image: "/image1.jpg", // Replace with actual image URL
//   },
//   {
//     name: "Jane Smith",
//     position: "CEO",
//     image: "https://via.placeholder.com/300", // Replace with actual image URL
//   },
//   {
//     name: "Emily Johnson",
//     position: "CTO",
//     image: "https://via.placeholder.com/300", // Replace with actual image URL
//   },
// ];

// const FoundingMembers = () => {
//   return (
//     <div className="bg-[#2A7D7D] text-white py-12 px-6">
//       <h2 className="text-4xl font-semibold mb-8">Founding Members</h2>
//       <div className="relative flex items-center justify-between">
//         {/* Left Arrow */}
//         <button className="absolute left-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronLeft className="text-lg" />
//         </button>

//         {/* Member Cards */}
//         <div className="flex gap-6 w-full justify-center">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg w-80 overflow-hidden"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4 text-black">
//                 <h3 className="text-xl font-bold">{member.name}</h3>
//                 <p className="text-gray-600">{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button className="absolute right-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronRight className="text-lg" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FoundingMembers;


// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// const members = [
//   {
//     name: "John Doe",
//     position: "Co-Founder",
//     image: "https://via.placeholder.com/300",
//     description: "John is an experienced entrepreneur with a passion for tech innovation.",
//   },
//   {
//     name: "Jane Smith",
//     position: "CEO",
//     image: "https://via.placeholder.com/300",
//     description: "Jane leads the company with a strong vision for the future.",
//   },
//   {
//     name: "Emily Johnson",
//     position: "CTO",
//     image: "https://via.placeholder.com/300",
//     description: "Emily specializes in software architecture and AI-driven solutions.",
//   },
// ];

// const FoundingMembers = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   return (
//     <div className="bg-[#2A7D7D] text-white py-12 px-6 relative">
//       <h2 className="text-4xl font-semibold mb-8">Founding Members</h2>

//       <div className="relative flex items-center justify-between">
//         {/* Left Arrow */}
//         <button className="absolute left-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronLeft className="text-lg" />
//         </button>

//         {/* Member Cards */}
//         <div className="flex gap-6 w-full justify-center">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg w-80 overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
//               onClick={() => setSelectedMember(member)}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4 text-black">
//                 <h3 className="text-xl font-bold">{member.name}</h3>
//                 <p className="text-gray-600">{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button className="absolute right-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronRight className="text-lg" />
//         </button>
//       </div>

//       {/* Popup Profile Modal */}
//       {selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white w-[600px] flex rounded-lg shadow-lg overflow-hidden relative">
//             {/* Left: Image */}
//             <img src={selectedMember.image} alt={selectedMember.name} className="w-1/3 object-cover" />

//             {/* Right: Details */}
//             <div className="p-6 flex-1">
//               <h3 className="text-2xl font-bold text-black">{selectedMember.name}</h3>
//               <p className="text-gray-600">{selectedMember.position}</p>
//               <p className="mt-4 text-gray-700">{selectedMember.description}</p>
//             </div>

//             {/* Close Button */}
//             <button
//               className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
//               onClick={() => setSelectedMember(null)}
//             >
//               <FaTimes className="text-xl" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FoundingMembers;

// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

// const members = [
//   {
//     name: "John Doe",
//     position: "Co-Founder",
//     image: "/image1.jpg",
//     description: "John is an experienced entrepreneur with a passion for tech innovation.",
//   },
//   {
//     name: "Jane Smith",
//     position: "CEO",
//     image: "https://via.placeholder.com/400",
//     description: "Jane leads the company with a strong vision for the future.",
//   },
//   {
//     name: "Emily Johnson",
//     position: "CTO",
//     image: "https://via.placeholder.com/400",
//     description: "Emily specializes in software architecture and AI-driven solutions.",
//   },
// ];

// const FoundingMembers = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   return (
//     <div className="bg-[#2A7D7D] text-white py-12 px-6 relative">
//       <h2 className="text-4xl font-semibold mb-8">Founding Members</h2>

//       <div className="relative flex items-center justify-between">
//         {/* Left Arrow */}
//         <button className="absolute left-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronLeft className="text-lg" />
//         </button>

//         {/* Member Cards */}
//         <div className="flex gap-6 w-full justify-center">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg w-96 overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
//               onClick={() => setSelectedMember(member)}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-72 object-cover"
//               />
//               <div className="p-6 text-black">
//                 <h3 className="text-2xl font-bold">{member.name}</h3>
//                 <p className="text-gray-600 text-lg">{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Arrow */}
//         <button className="absolute right-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronRight className="text-lg" />
//         </button>
//       </div>

//       {/* Popup Profile Modal */}
//       {selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white w-[700px] flex rounded-lg shadow-lg overflow-hidden relative">
//             {/* Left: Image */}
//             <img src={selectedMember.image} alt={selectedMember.name} className="w-1/3 h-72 object-cover" />

//             {/* Right: Details */}
//             <div className="p-8 flex-1">
//               <h3 className="text-3xl font-bold text-black">{selectedMember.name}</h3>
//               <p className="text-gray-600 text-xl">{selectedMember.position}</p>
//               <p className="mt-4 text-gray-700 text-lg">{selectedMember.description}</p>
//             </div>

//             {/* Close Button */}
//             <button
//               className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
//               onClick={() => setSelectedMember(null)}
//             >
//               <FaTimes className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FoundingMembers;

// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";


// const members = [
//   {
//     name: "John Doe",
//     position: "Co-Founder",
//     image: "https://via.placeholder.com/400",
//     description: "John is an experienced entrepreneur with a passion for tech innovation.",
//   },
//   {
//     name: "Jane Smith",
//     position: "CEO",
//     image: "https://via.placeholder.com/400",
//     description: "Jane leads the company with a strong vision for the future.",
//   },
//   {
//     name: "Emily Johnson",
//     position: "CTO",
//     image: "https://via.placeholder.com/400",
//     description: "Emily specializes in software architecture and AI-driven solutions.",
//   },

// ];

// const FoundingMembers = () => {
//   const [selectedMember, setSelectedMember] = useState(null);

//   return (
//     <div className="bg-teal-700  text-white py-12 px-6 relative ">
//       <h2 className="text-4xl font-extrabold uppercase mb-8">Founding Members</h2>

//       <div className="relative flex items-center justify-between">

//         <button className="absolute left-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronLeft className="text-lg" />
//         </button>


//         <div className="flex gap-6 w-full justify-center">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow-lg w-96 overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
//               onClick={() => setSelectedMember(member)}
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-72 object-cover"
//               />
//               <div className="p-6 text-black">
//                 <h3 className="text-2xl font-extrabold uppercase">{member.name}</h3>
//                 <p className="text-gray-600 text-lg font-bold uppercase">{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>


//         <button className="absolute right-0 text-white bg-[#1F5C5C] p-3 rounded-full shadow-md hover:bg-[#184848]">
//           <FaChevronRight className="text-lg" />
//         </button>
//       </div>


//       {selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white w-[700px] flex rounded-lg shadow-lg overflow-hidden relative">

//             <img src={selectedMember.image} alt={selectedMember.name} className="w-1/3 h-72 object-cover" />


//             <div className="p-8 flex-1">
//               <h3 className="text-3xl font-extrabold uppercase text-black">{selectedMember.name}</h3>
//               <p className="text-gray-600 text-xl font-bold uppercase">{selectedMember.position}</p>
//               <p className="mt-4 text-gray-700 text-lg">{selectedMember.description}</p>
//             </div>


//             <button
//               className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
//               onClick={() => setSelectedMember(null)}
//             >
//               <FaTimes className="text-2xl" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FoundingMembers;


import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaTimes, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const members = [
  {
    name: "M. Zafar ul Haq",
    position: "Chair ",
    image: "/zafar.jpg",
    description:
      "Muhammad Zafar Ul Haq is the Founder and Chair of the IEEE Computer Society UCP Chapter, known for his visionary leadership and community impact. A former member of OED Pakistan and the Federal Youth Parliament, he blends academic excellence with a passion for innovation and service.",
  },
  {
    name: "Ali Usman Khan",
    position: "Vice Chair ",
    image: "/f1.jpg",
    description: "Ali Usman Khan Durrani, a Computer Science student at UCP, is passionate about leadership and coding, serving as General Secretary of ICC and Vice Chair of IEEE CS. He excels in competitive programming, winning inter-university contests and thriving under pressure.",
  },
  {
    name: "Hassan Jamshaid",
    position: "Webmaster ",
    image: "/f5.jpg",
    description: "Hassan Jamshaid, Webmaster of IEEE CS UCP Chapter, is a skilled Full Stack Developer who ensures a responsive, user-focused website that reflects the chapter’s professional image and vision.",
  },
  {
    name: "Abdul Moeiz Majid",
    position: "General Secetary",
    image: "/moeiz.jpg",
    description: "Abdul Moeiz, Secretary of IEEE CS UCP Chapter, is a dedicated Computer Science student passionate about community building and tech-driven learning. His volunteer work reflects a strong sense of purpose, blending innovation with social impact.",
  },
  {
    name: "Anwar Karim",
    position: "Treasurer",
    image: "/anwar.jpg",
    description: "Anwar Karim, Treasurer of IEEE CS UCP Chapter, is a Computer Science student from Gilgit-Baltistan dedicated to tech-driven community growth. Actively involved in events like Tech for Tomorrow and programming sessions, he aims to leverage technology for societal impact.",
  },
  {
    name: "Ayaan Zaman Khattak",
    position: "Executive Director",
    image: "/ayaan.jpg",
    description: "Ayaan Zaman Khattak, Executive Director, is a strategic leader known for managing major events like TFT and HITE, excelling in planning, execution, and team empowerment. He champions innovation, growth, and community engagement with clarity and purpose.",
  },
  {
    name: "Rabail fiaz",
    position: "Coordinator",
    image: "/rabail.jpg",
    description: "Rabail Fiaz, Coordinator of IEEE CS UCP Chapter, has developed strong leadership, communication, and event management skills. With a solid computer science background, she is passionate about contributing to the tech community and staying ahead of industry trends.",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false, // Disable default arrows
  draggable: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const FoundingMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const sliderRef = React.useRef();

  useEffect(() => {
    if (inView) {
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="bg-gradient-to-r from-[#FFA016] via-[#ff8c00] to-[#FFA016] text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.3)_50%,transparent_75%,transparent_100%)] bg-[length:200px_200px]"></div>
      </div>

      {/* Overlay animation */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-30 flex justify-center items-center backdrop-blur-md bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white drop-shadow-2xl">
              Founding Members
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel section with re-triggered stagger animation on scroll */}
      <motion.div
        key={inView ? "in-view" : "out-of-view"} // force rerender animation
        className="w-full max-w-6xl mx-auto gap-4"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 2,
            },
          },
        }}
      >
        <Slider ref={sliderRef} {...sliderSettings}>
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="px-2"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 1 } },
              }}
            >
              <div
                className="bg-gradient-to-br from-black to-zinc-800 rounded-2xl shadow-2xl cursor-pointer overflow-hidden hover:scale-105 transition-all duration-300 border border-white/10 group"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-70 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6 text-white relative">
                  {/* Orange accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00]"></div>
                  <h3 className="text-xl font-black uppercase mt-2">{member.name}</h3>
                  <p className="text-[#FFA016] text-md font-bold uppercase">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>

        {/* Right side arrow */}
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-[#FFA016] hover:text-white transition-colors z-40"
        >
          <FaArrowRight />
        </button>
      </motion.div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center px-4 z-50">
          <div className="bg-gradient-to-br from-zinc-900 to-black w-full max-w-3xl flex flex-col sm:flex-row rounded-2xl shadow-2xl overflow-hidden relative border border-white/20">
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full sm:w-1/3 h-64 object-cover"
            />

            <div className="p-8 flex-1 text-white">
              <div className="w-16 h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00] mb-4"></div>
              <h3 className="text-3xl font-black uppercase">{selectedMember.name}</h3>
              <p className="text-[#FFA016] text-xl font-bold uppercase mb-4">{selectedMember.position}</p>
              <p className="text-gray-300 text-md leading-relaxed">{selectedMember.description}</p>
            </div>

            <button
              className="absolute top-4 right-4 text-white hover:text-[#FFA016] transition-colors"
              onClick={() => setSelectedMember(null)}
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default FoundingMembers;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const members = [
//   {
//     name: "M. Zafar ul Haq",
//     position: "Chair",
//     image: "/f2.jpg",
//   },
//   {
//     name: "Ali Usman Khan",
//     position: "Vice Chair",
//     image: "/f1.jpg",
//   },
//   {
//     name: "Hassan Jamshaid",
//     position: "Webmaster",
//     image: "/f5.jpg",
//   },
//   {
//     name: "Abdul Moeiz Majid Khan",
//     position: "General Secretary",
//     image: "/f6.jpg",
//   },
//   {
//     name: "Anwar Karim",
//     position: "Treasurer",
//     image: "/f7.jpg",
//   },
// ];

// const FoundingMembers = () => {
//   const [showOverlay, setShowOverlay] = useState(false);
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

//   useEffect(() => {
//     if (inView) {
//       setShowOverlay(true);
//       const timer = setTimeout(() => setShowOverlay(false), 2000);
//       return () => clearTimeout(timer);
//     }
//   }, [inView]);

//   return (
//     <section
//       ref={ref}
//       className="relative w-full max-w-full mx-auto h-[400px] bg-[#FFa016] font-sans shadow-md overflow-hidden"
//     >
//       {/* Animation for Founding Members Title */}
//       <AnimatePresence>
//         {showOverlay && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="absolute inset-0 z-30 flex justify-center items-center backdrop-blur-md bg-black/30"
//           >
//             <h1 className="text-[8vw] font-extrabold uppercase text-white whitespace-nowrap">
//               Founding Members
//             </h1>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Staggered Images Animation */}
//       <motion.div
//         className="flex w-full h-full overflow-hidden"
//         initial="hidden"
//         animate="show"
//         variants={{
//           hidden: {},
//           show: {
//             transition: {
//               staggerChildren: 0.3, // Staggered delay between each image
//               delayChildren: 2, // Delay the images' animation after the overlay
//             },
//           },
//         }}
//       >
//         {members.map((member, index) => (
//           <motion.button
//             key={index}
//             className="relative flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out w-[20%] hover:opacity-85 border-none focus:outline-none"
//             initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
//             animate={{ opacity: 1, y: 0 }} // Fade in and slide up to original position
//             transition={{
//               duration: 0.5,
//             }}
//           >
//             <div className="relative w-full h-full flex justify-center items-center">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover aspect-[4/5] rounded-none"
//               />
//             </div>
//             <div className="absolute bottom-3 left-3 right-3 z-10 px-3 py-1.5 backdrop-blur-md rounded-md bg-gradient-to-r from-black to-[#FFA016] text-white text-center">
//               <h2 className="text-sm font-semibold">{member.name}</h2>
//               <p className="text-xs text-gray-300">{member.position}</p>
//             </div>
//           </motion.button>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default FoundingMembers;





