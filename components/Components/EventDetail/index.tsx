'use client';

import React from 'react';

import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

// Markdown to HTML helper function
const markdownToHtml = (markdown: string) => {
  // Convert **bold** to <strong>bold</strong>
  const bold = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return bold;
};

const EventDetail = ({ eventData }: { eventData?: any }) => {
  const router = useRouter();

  // Prefer props, fallback to null (Redux removed)
  const event = eventData;

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <p>
          No event data found.{' '}
          <button onClick={() => router.back()} className="underline text-[#FFA016]">
            Go back
          </button>
        </p>
      </div>
    );
  }

  const { title, date, description, image, facebook, instagram, linkedin, sub_images } = event;

  // Map DB fields to what the component expects
  const subImages = sub_images;
  const socials = { facebook, instagram, linkedin };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-32 pb-16 text-black">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-white font-medium px-4 py-2 rounded-full bg-gradient-to-r from-black to-[#FFA016] hover:opacity-90 transition-all duration-300 shadow-md mb-6"
      >
        <span className="text-lg">←</span> Back to Events
      </button>

      {/* Main Event Image */}
      <div className="rounded-xl overflow-hidden mb-6">
        <img src={image} alt={title} className="w-full h-[420px] object-cover" />
      </div>

      {/* Sub Images Gallery */}
      {subImages?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Event Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {subImages.map((img: string, index: number) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`Sub Image ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Title & Metadata */}
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        <span className="mr-4">📅 {date}</span>
      </div>

      {/* Description */}
      <div
        className="text-lg text-gray-800 leading-relaxed whitespace-pre-line mb-6"
        dangerouslySetInnerHTML={{
          __html: markdownToHtml(description),
        }}
      />

      {/* Divider */}
      <div className="h-[2px] bg-gradient-to-r from-black to-[#FFA016] mb-6"></div>

      {/* Social Links */}
      <div className="flex gap-4 text-2xl text-[#FFA016]">
        {socials?.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:scale-110 transition-transform" />
          </a>
        )}
        {socials?.facebook && (
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:scale-110 transition-transform" />
          </a>
        )}
        {socials?.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:scale-110 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
