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

const hierarchyMembers = [
  {
  name: "Talha Badar",
  position: "President",
  image: "/talha.jpg",
  description: "Talha Badar, President of UCP Welfare Society, is a passionate leader committed to serving the community. With strong organizational and leadership skills, he leads welfare initiatives, manages large-scale events, and inspires the team to create meaningful social impact.",
},{
  name: "Ahmad Mehmood",
  position: "Vice President",
  image: "/ahmad.jpg",
  description: "Ahmad Mehmood serves as the Vice President of UCP Welfare Society, playing a key role in organizing welfare initiatives and ensuring smooth coordination across teams. His dedication to community service and leadership helps drive impactful projects for those in need.",
},
{
  name: "Kaneez Fatima",
  position: "Vice President",
  image: "/kaneez.JPG",
  description: "Kaneez Fatima, Vice President of UCP Welfare Society, actively contributes to planning and executing welfare activities. Her commitment, teamwork, and passion for helping others play a vital role in spreading positivity and making a difference in the community.",
}
  
  
];

const HomePage = () => {
  return (
    <>
      <HomepageLayout>
        <LogoScroller />

        <UpcomingEvents />
        <AboutUsOverlaySection />
        <IeeeJoinSection />
        <UpperHierarchy
          title="Leadership 2025-26"
          members={hierarchyMembers}
        />
        <InstagramGallery />
        <ExploreMoreSection />
      </HomepageLayout>
    </>
  );
};

export default HomePage;
