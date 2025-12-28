import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';


const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">


      {/* Header removed (in RootLayout) */}
      <div className="relative z-10 bg-gradient-to-r from-black to-[#FFA016]">
        {/* <Header /> */}
      </div>

      {/* Page Content */}
      <main className="relative z-10 flex-grow bg-white">
        {children}
      </main>

      {/* Footer removed (in RootLayout) */}
    </div>
  );
};

export default ContactLayout;
