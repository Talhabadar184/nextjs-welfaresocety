import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import EventImageSlider from '../../Components/EventImgaeSlider';

const eventImages = [
  "/group.jpg",
  "fyp1.jpg",
  '/fyp3.jpg',

];

const EventLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-white overflow-hidden">

      {/* Image Slider Section (in normal flow) */}
      <div className="w-100vh h-[700px]">
        <EventImageSlider images={eventImages} />
      </div>

      {/* Header removed (in RootLayout) */}

      {/* Page Content */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>

      {/* Footer removed (in RootLayout) */}
    </div>
  );
};

export default EventLayout;
