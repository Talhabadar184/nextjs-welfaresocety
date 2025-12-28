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
    name: "Ali Usman Khan",
    position: "President",
    image: "/ali.jpg",
    description: "Muhammad Zafar Ul Haq is the Founder and Chair of the IEEE Computer Society UCP Chapter, known for his visionary leadership and community impact.",
  },
  {
    name: "Rabail Fiaz",
    position: "Vice President",
    image: "/rabail2.jpg",
    description: "Ali Usman Khan Durrani, a Computer Science student at UCP, is passionate about leadership and coding, serving as Vice Chair of IEEE CS.",
  },
  {
    name: "Abdul Moeiz Majid Khan",
    position: "Vice President",
    image: "/abdulmoiz.JPG",
    description: "Ali Usman Khan Durrani, a Computer Science student at UCP, is passionate about leadership and coding, serving as Vice Chair of IEEE CS.",
  },
  {
    name: "Eisha Kahalid",
    position: "Joint Secretary",
    image: "/eisha.JPG",
    description: "Ayaan Zaman Khattak, Executive Director, is a strategic leader known for managing major events.",
  },
  {
    name: "Anwar Karim",
    position: "General Secretary",
    image: "/anwar2.JPG",
    description: "Abdul Moeiz, Secretary of IEEE CS UCP Chapter, is a dedicated Computer Science student passionate about community building.",
  },
  {
    name: "Junita Azhar",
    position: "Treasurer",
    image: "/junita.JPG",
    description: "Anwar Karim, Treasurer of IEEE CS UCP Chapter, is dedicated to tech-driven community growth.",
  },
  {
    name: "Hassan Jamshaid",
    position: "Webmaster",
    image: "/me.JPG",
    description: "Hassan Jamshaid, Webmaster of IEEE CS UCP Chapter, is a skilled Full Stack Developer who ensures a responsive, user-focused website.",
  },
  {
    name: "Bismah Irshad",
    position: "Coordinator",
    image: "/bismah.JPG",
    description: "Rabail Fiaz, Coordinator of IEEE CS UCP Chapter, has developed strong leadership and communication skills.",
  },
  {
    name: "Qasim Naseer",
    position: "Coordinator",
    image: "/qasim.JPG",
    description: "Description for the 8th member of the leadership team.",
  },
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
