import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import HierarchySection from '../../Components/HierarchySection';

const HierarchyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-hidden">

      {/* Background section (part of normal flow now) */}
      <HierarchySection />

      {/* Header removed (in RootLayout) */}

      {/* Page Content */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>

      {/* Footer removed (in RootLayout) */}
    </div>
  );
};

export default HierarchyLayout;
