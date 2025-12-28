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
                name="Dr. Muhammad Amjad Iqbal"
                title="Dean FOIT & CS"
                image="/dean.jpg"
                message="Dr. Muhammad Amjad Iqbal is an esteemed academic with over seven years of teaching experience at top Pakistani universities. Since joining UCP in 2010, he has been a key member of the Computer Science faculty. His research spans Machine Learning, Fuzzy Logic, and Facial Expression Recognition. His work on classifier combinations has significantly advanced these fields."
                linkedin="https://www.linkedin.com"
                theme="light"
            />

            <LeadershipCard
                name="Dr. Syed Tanweer Shah Bukhari"
                title="Founder IEEE CS & RAS UCP"
                image="/t1.jpeg"
                message="Dr. Syed Tanweer Shah Bukhari, a Senior Member of IEEE, is a highly respected academic and mentor in the field of computer science. As the founding member and first patron of the IEEE Computer Society UCP Chapter, he has played a pivotal role in shaping our technical community. His visionary leadership continues to inspire future generations of engineers."
                linkedin="https://www.linkedin.com/in/stsbukhari/"
                reverse
            />

            <LeadershipCard
                name="Muhammad Zulkifl Hasan"
                title="Advisor & Patron - IEEE CS UCP"
                image="/f3.jpg"
                message="Dr. Muhammad Zulkifl Hasan is an experienced academician and IT professional with over 15 years in higher education. He holds a PhD in Computer Science (in progress) and specializes in Cyber Security and Networking. As the current Advisor and Patron, he provides strategic direction and mentorship to help our students grow into future industry leaders."
                linkedin="https://www.linkedin.com/in/johndoe"
                theme="light"
            />
        </AboutLayout>
    );
};

export default About;
