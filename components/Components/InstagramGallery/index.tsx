import React from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa6";

const reels = [
  {
    url: "https://www.instagram.com/p/DVBc9KRj3H-/",
    thumbnail: "/reel1.png",
  },
  {
    url: "https://www.instagram.com/p/DVOFmspjMBr/",
    thumbnail: "/reel2.png",
  },
  {
    url: "https://www.instagram.com/p/DRK8dr4DKXN/",
    thumbnail: "/reel3.png",
  },
  {
    url: "https://www.instagram.com/p/DPemZjQDDEu/",
    thumbnail: "/reel4.png",
  },
];

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61581628452395", label: "Facebook" },
  { icon: FaInstagram, url: "https://www.instagram.com/ucp.welfaresociety/", label: "Instagram" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/ucp-welfare-society/", label: "LinkedIn" },
  { icon: FaWhatsapp, url: "https://whatsapp.com", label: "WhatsApp" },
];

const InstagramGallery = () => {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black uppercase mb-4 text-black">
            Follow <span className="text-[#118219]">Us</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">Stay connected with our latest updates and events</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-black hover:bg-[#FFA016] flex items-center justify-center transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="text-white text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {reels.map((reel, index) => (
            <a
              key={index}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/14] bg-gray-100 rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <img
                src={reel.thumbnail}
                alt={`Instagram Reel ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <FaInstagram className="text-2xl" />
                    <span className="font-bold">View on Instagram</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
