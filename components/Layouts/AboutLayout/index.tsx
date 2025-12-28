import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AboutSection from '../../Components/AboutSection';

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* About Section as background (under header) */}
      <div className="absolute top-0 left-0 w-full z-0">
        <AboutSection />
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

export default AboutLayout;
