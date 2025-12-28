import React from 'react';
import HierarchyHero from '../../Components/HierarchyHero';

interface EventLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const EventLayout = ({
  children,
  title = "Events & Updates",
  subtitle = "Capturing the moments of innovation"
}: EventLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">

      {/* Premium Cinematic Hero with Same Animations */}
      <HierarchyHero
        title={title}
        subtitle={subtitle}
        backgroundImage="/group.jpg"
      />

      {/* Page Content */}
      <main className="relative z-10 flex-grow">
        {children}
      </main>
    </div>
  );
};

export default EventLayout;
