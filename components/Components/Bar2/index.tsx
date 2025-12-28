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

// Logo data with a specific class for the IEEE CS logo to target the hover effect
const logos = [
  {
    name: "UCP",
    icon: (
      <img
        src="ucp1.png"
        alt="ucp"
        className="w-50 sm:w-38 h-auto object-contain"
      />
    ),
  },
  {
    name: "IEEE CS",
    icon: (
      <img
        src="Logo2.png"
        alt="IEEE CS"
        className="w-8 sm:w-14 h-auto object-contain ieee-cs-logo" // Added specific class for hover effect
      />
    ),
  },
  {
    name: "IEEE",
    icon: <SiIeee className="text-white text-6xl sm:text-7xl" />,
  },
];

const LogoScroller = () => {
  return (
    <section className="relative bg-gradient-to-r from-black via-zinc-900 to-[#FFA016] py-6 overflow-x-auto">
      <div className="flex flex-nowrap items-center gap-6 px-4 sm:justify-center">
        {logos.map((logo, index) => (
          <div key={index} title={logo.name} className="flex-shrink-0">
            {logo.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoScroller;

