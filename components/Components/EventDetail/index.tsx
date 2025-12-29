import { FaInstagram, FaFacebook, FaLinkedin, FaCalendarAlt, FaChevronLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

// Markdown to HTML helper function
const markdownToHtml = (markdown: string) => {
  // Convert **bold** to <strong>bold</strong>
  const bold = markdown ? markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : '';
  return bold;
};

const EventDetail = ({ eventData }: { eventData?: any }) => {
  const router = useRouter();

  // Prefer props, fallback to null (Redux removed)
  const event = eventData;

  if (!event) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-white/60 mb-6 font-bold uppercase tracking-widest text-xs">No event data found.</p>
          <button
            onClick={() => router.back()}
            className="px-8 py-3 bg-[#FFA016] text-black font-black uppercase text-xs rounded-full hover:scale-105 transition-transform"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const { title, date, description, image, facebook, instagram, linkedin, sub_images } = event;

  // Map DB fields to what the component expects
  const subImages = sub_images;
  const socials = { facebook, instagram, linkedin };

  const backBtnVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const mainImageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };

  const galleryVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pb-24 text-white">
      {/* Back Button */}
      <motion.button
        variants={backBtnVariants}
        initial="hidden"
        animate="visible"
        onClick={() => router.back()}
        className="group flex items-center gap-3 text-white/50 hover:text-[#FFA016] transition-colors mb-12 uppercase font-black text-[10px] tracking-[0.2em]"
      >
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#FFA016] transition-all">
          <FaChevronLeft size={10} />
        </div>
        Back to Events
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Image & Gallery */}
        <div className="lg:col-span-7">
          <motion.div
            variants={mainImageVariants}
            initial="hidden"
            animate="visible"
            className="rounded-3xl overflow-hidden relative shadow-2xl border border-white/5 mb-8 group"
          >
            <img src={image} alt={title} className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* Gallery */}
          {subImages?.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-white font-black uppercase tracking-widest text-[10px]">Event Gallery</h3>
                <div className="flex-grow h-[1px] bg-white/5" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {subImages.map((img: string, index: number) => (
                  <motion.div
                    key={index}
                    variants={galleryVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl overflow-hidden aspect-square border border-white/5 group"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-12 xl:col-span-5 flex flex-col pt-4">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-4 py-1.5 bg-[#FFA016]/10 border border-[#FFA016]/20 rounded-full flex items-center gap-2">
                <FaCalendarAlt className="text-[#FFA016] text-[10px]" />
                <span className="text-[#FFA016] text-[10px] font-black uppercase tracking-widest">{date}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
              {title}
            </h1>

            <div className="w-20 h-1 bg-[#FFA016] mb-10 rounded-full" />

            <div
              className="prose prose-invert max-w-none text-gray-400 text-base md:text-lg leading-relaxed whitespace-pre-line border-l-2 border-[#FFA016]/10 pl-8 italic mb-12"
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(description),
              }}
            />

            {/* Socials */}
            <div className="pt-12 border-t border-white/5 space-y-4">
              <p className="text-white/40 font-black uppercase text-[10px] tracking-[0.2em]">Share & Connect</p>
              <div className="flex gap-6">
                {socials?.instagram && (
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-[#FFA016] hover:text-black transition-all">
                    <FaInstagram size={20} />
                  </a>
                )}
                {socials?.facebook && (
                  <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-[#FFA016] hover:text-black transition-all">
                    <FaFacebook size={20} />
                  </a>
                )}
                {socials?.linkedin && (
                  <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-[#FFA016] hover:bg-[#FFA016] hover:text-black transition-all">
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
