// import React from 'react';
// import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

// const EventCard = ({ image, title, date, description, onSeeMore, socials = {} }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center bg-white text-black rounded-xl overflow-hidden shadow-md p-6 gap-6 w-full max-w-7xl mx-auto border border-gray-200">
      
//       {/* Event Image */}
//       <div className="w-full md:w-1/3">
//         <img
//           src={image}
//           alt={title}
//           className="rounded-lg object-cover w-full h-[350px]"
//         />
//       </div>

//       {/* Text Content */}
//       <div className="flex flex-col w-full md:w-2/3 justify-between gap-4">
//         <div>
//           <h2 className="text-2xl font-bold mb-2">{title}</h2>
//           <p className="text-sm text-gray-600 font-medium">{date}</p>
//           <p className="mt-2 text-gray-800">{description}</p>
//         </div>

//         {/* Footer: See more + Socials */}
//         <div className="flex justify-between items-center pt-4 border-t border-gray-300 mt-4">
//           {/* Social Icons */}
//           <div className="flex space-x-4 text-xl text-[#FFA016]">
//             {socials.instagram && (
//               <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />
//               </a>
//             )}
//             {socials.facebook && (
//               <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
//                 <FaFacebook />
//               </a>
//             )}
//             {socials.linkedin && (
//               <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin />
//               </a>
//             )}
//           </div>

//           {/* See More */}
//           <button
//             onClick={onSeeMore}
//             className="text-[#FFA016] font-semibold hover:underline"
//           >
//             See more →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const EventCard = ({ image, title, date, description, onSeeMore, socials = {} }) => {
  return (
    <div className="flex flex-col md:flex-row items-center rounded-xl overflow-hidden p-6 gap-6 w-full max-w-7xl mx-auto">
      
      {/* Event Image */}
      <div className="w-full md:w-1/3 overflow-hidden rounded-lg">
  <img
    src={image}
    alt={title}
    className="rounded-lg object-cover w-full h-[350px] transform transition-transform duration-300 hover:scale-105"
  />
</div>


      {/* Text Content */}
      <div className="flex flex-col w-full md:w-2/3 justify-between gap-4">
        <div>
          <h2 className="text-black text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 font-medium">{date}</p>
          <p className="mt-2 text-gray-800">{description}</p>
        </div>

        {/* Gradient Line */}
        <div className="my-6 h-[2px] bg-gradient-to-r from-black to-[#FFA016]"></div>

        {/* Footer: Socials + See More */}
        <div className="flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl text-[#FFA016]">
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            )}
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
          </div>

          {/* See More */}
          <button
            onClick={onSeeMore}
            className="text-[#FFA016] font-semibold hover:underline"
          >
            See more →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

