'use client';

import React from 'react';
import HomepageLayout from '../components/Layouts/HompageLayout';
import UpperHierarchy from '../components/Components/UpperHierarchy';
import UpcomingEvents from '../components/Components/UpcomingEvents';
import LogoScroller from '../components/Components/Bar2';
import IeeeJoinSection from '../components/Components/IeeeJoinSection';
import AboutUsOverlaySection from '../components/Components/About';
import ExploreMoreSection from '../components/Components/ExploreMoreSection';
import InstagramGallery from '../components/Components/InstagramGallery';

const HomePage = () => {
  return (
    <>
      <HomepageLayout>
        <LogoScroller />

        <UpcomingEvents />
        <AboutUsOverlaySection />
        <IeeeJoinSection />
        <UpperHierarchy />
        <InstagramGallery />
        <ExploreMoreSection />
      </HomepageLayout>
    </>
  );
};

export default HomePage;
