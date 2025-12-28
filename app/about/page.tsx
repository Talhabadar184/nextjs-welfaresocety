'use client';

import React from 'react';
import AboutLayout from '../../components/Layouts/AboutLayout';
import AboutSection from '../../components/Components/AboutSection';
import SocietyDescription from '../../components/Components/SocietyDescription';
import DeansMessage from '../../components/Components/DeansMessage';
import ReusableBar from '../../components/ReusableComponents/ReusableBar';
import PersonMessage2 from '../../components/ReusableComponents/PersonMessage2';
import PersonMessage from '../../components/ReusableComponents/PersonMessage';

const About = () => {
    return (
        <>
            <AboutLayout>
                <AboutSection />
                <SocietyDescription />
                <ReusableBar text="Dean Faculty of IT&CS" />
                <DeansMessage />
                <ReusableBar text=" Founder IEEE CS & RAS UCP CHAPTERS" />
                <PersonMessage2
                    name="Dr Syed Tanweer Shah Bukhari"
                    title="Senior Member IEEE"
                    image="/t1.jpeg"
                    linkedin="https://www.linkedin.com/in/stsbukhari/"
                    heading=""
                    message={`Dr. Syed Tanweer Shah Bukhari, a Senior Member of IEEE, is a highly respected academic and mentor in the field of computer science. He holds a Ph.D. from COMSATS University Islamabad and currently serves as an Assistant Professor at the University of Central Punjab (UCP). As one of the founding members and the first patron of the IEEE Computer Society (CS) and Robotics and Automation Society (RAS) UCP Chapters, he has played a pivotal role in shaping two of the university’s most dynamic technical communities. His visionary leadership and mentorship have empowered countless students to pursue innovation, research, and leadership within the IEEE community. Dr. Bukhari’s unwavering commitment to academic excellence and student development continues to inspire future generations of engineers and technologists at UCP and beyond.
`}
                />
                <ReusableBar text=" Advisor & Patron IEEE CS UCP" />
                <PersonMessage
                    name="Muhammad Zulkifl Hasan"
                    title="Advisor & Patron - IEEE CS UCP"
                    image="/f3.jpg"
                    linkedin="https://www.linkedin.com/in/johndoe"
                    heading=""
                    message={`Dr. Muhammad Zulkifl Hasan is an experienced academician and IT professional with over 15 years in higher education and industry, specializing in Computer Science, IT Infrastructure, Network Security, and Emerging Technologies. He holds a PhD in Computer Science (in progress) from Universiti Putra Malaysia, a Master’s in Computer Networking from the University of Bedfordshire, UK, and a Bachelor’s in Telecommunication Engineering. Dr. Hasan has held key roles, including Head of Department at NCBA&E, Principal Lecturer at multiple universities, and has led academic accreditation efforts. He possesses expertise in cybersecurity, cloud computing, ethical hacking, and academic supervision, with various certifications from Google, the University of Colorado, and others. He is also a member of several professional organizations, including IEEE and ACM.`}
                />
            </AboutLayout>
        </>
    );
};

export default About;
