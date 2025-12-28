import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">
      {/* Header removed (in RootLayout) */}
      <div className="absolute top-0 left-0 w-full z-20 bg-gradient-to-r from-black to-[#FFA016]">
        {/* <Header /> */}
      </div>

      <main className="relative z-10 flex-grow  pt-20">


        {children}
      </main>

      {/* Footer removed (in RootLayout) */}
    </div>
  );
};

export default RegisterLayout;
