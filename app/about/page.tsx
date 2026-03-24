'use client';

import React from 'react';
import AboutLayout from '../../components/Layouts/AboutLayout';
import AboutSection from '../../components/Components/AboutSection';
import SocietyDescription from '../../components/Components/SocietyDescription';
import LeadershipCard from '../../components/ReusableComponents/LeadershipCard';

const About = () => {
    return (
        <AboutLayout>
            <AboutSection />
            <SocietyDescription />

            <LeadershipCard
                name="Muhammad Hammmad ur Rehman"
                title="Head VIS & Patron UCP Welfare Society"
                image="/sir.jpg"
                message="M. Hammad ur Rehman is a dedicated professional specializing in Corporate Social Responsibility (CSR), Partnerships and Engagement, and Community Service. With strong expertise in volunteer management and customer service, he excels in building meaningful relationships and delivering impactful initiatives. A skilled communicator and public speaker, Hammad is passionate about training, collaboration, and driving positive social change."

                linkedin="https://www.linkedin.com/in/mhrehmanlhrpak/"
                theme="light"
            />
        </AboutLayout>
    );
};

export default About;
