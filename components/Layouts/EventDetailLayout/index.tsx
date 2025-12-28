import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import EventDetail from '../../Components/EventDetail';

const EventDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white text-black overflow-x-hidden">

      <div className="relative z-10 bg-gradient-to-r from-black to-[#FFA016]">
        {/* Header removed (in RootLayout) */}
        <div className="relative z-10">
          {/* <Header /> */}
        </div>
      </div>



      <main className="relative z-10 flex-grow">
        {children}
      </main>

      {/* Footer removed (in RootLayout) */}
    </div>
  );
};

export default EventDetailLayout;
