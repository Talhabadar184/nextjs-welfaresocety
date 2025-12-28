'use client';

import React from 'react';
import HierarchyLayout from '../../components/Layouts/HierarchyLayout';
import LeadershipCard from '@/components/ReusableComponents/LeadershipCard';
import HierarchyTeamSection from '@/components/ReusableComponents/HierarchyTeamSection';

const Hierarchy2425 = () => {
    const advisor = {
        name: "Muhammad Zulkifl Hasan",
        position: "Advisor - IEEE CS UCP",
        image: "/f3.jpg",
        description: `Dr. Muhammad Zulkifl Hasan is an experienced academician and IT professional with over 15 years in higher education and industry, specializing in Computer Science, IT Infrastructure, Network Security, and Emerging Technologies. He holds a PhD in Computer Science (in progress) from Universiti Putra Malaysia, a Master’s in Computer Networking from the University of Bedfordshire, UK, and a Bachelor’s in Telecommunication Engineering. Dr. Hasan has held key roles, including Head of Department at NCBA&E, Principal Lecturer at multiple universities, and has led academic accreditation efforts. He possesses expertise in cybersecurity, cloud computing, ethical hacking, and academic supervision, with various certifications from Google, the University of Colorado, and others. He is also a member of several professional organizations, including IEEE and ACM.`
    };

    const coreLeadership = [
        {
            name: "Muhammad Zafar Ul Haq",
            position: "Chair - IEEE CS UCP",
            image: "/f2.jpg",
            description: `Muhammad Zafar Ul Haq is a visionary leader and transformative innovator, serving as the Founder and Chair of the IEEE Computer Society UCP Chapter. An ex-member of OED Pakistan and the Federal Youth Parliament, and actively affiliated with renowned organizations such as Youth General Assembly (YGA), Chitral Welfare Society Lahore, and Amnesty International, he has driven numerous impactful collaborations while contributing some brilliant work for humanity as a human rights activist. Rising from Pakistan’s remote northern regions, he turned challenges into opportunities—excelling as a dedicated Computer Science student and college-level teacher. His relentless pursuit of excellence bridges academic rigor with real-world impact, inspiring future leaders to innovate with purpose. “Empowering the nation through innovation, education, and unwavering service to humanity.”`
        },
        {
            name: "Ali Usman Khan Durrani",
            position: "Vice Chair - IEEE CS UCP",
            image: "/f1.jpg",
            description: `Ali Usman Khan Durrani is a Computer Science student at the University of Central Punjab with a strong passion for leadership and coding. As the General Secretary of the International Crisis Chamber and Vice Chair of the IEEE Computer Society, he has always enjoyed bringing people together and making a meaningful impact. Ali is also deeply involved in competitive programming and has participated in several inter-university competitions, where he not only competed but proudly secured wins. These experiences have helped him grow under pressure, think critically, and stay motivated to continue learning and pushing his limits.`
        },
        {
            name: "Hassan Jamshaid",
            position: "Webmaster - IEEE CS UCP",
            image: "/f5.jpg",
            description: `Hassan Jamshaid is the Webmaster of the IEEE Computer Society UCP Chapter and a skilled Full Stack Developer with a passion for building seamless and engaging digital experiences. In his role, he is responsible for creating and maintaining the chapter’s official website, establishing a strong online presence that reflects the organization’s vision and values. With expertise in both front-end and back-end technologies, he ensures the site is not only visually appealing but also functional, accessible, and responsive. His commitment to clean code, user-centered design, and continuous improvement contributes to the chapter’s outreach, engagement, and professional image in the tech community.`
        },
        {
            name: "Abdul Moiez Majid Khan",
            position: "General Secretary - IEEE CS UCP",
            image: "/f6.jpg",
            description: `Abdul Moeiz is the Secretary of the IEEE Computer Society at the University of Central Punjab (UCP), where he is passionate about fostering collaboration, leading impactful initiatives, and creating meaningful learning experiences for fellow tech enthusiasts. As a committed Computer Science student, he is driven by a deep interest in community building and knowledge sharing. His volunteer work with SKMCH and Pakistan Citizens Alliance has helped shape his character, teaching him empathy, purpose, and a strong sense of social responsibility. He strives to merge innovation with impact, empowering growth through service and learning.`
        },
        {
            name: "Anwar Karim",
            position: "Treasurer - IEEE CS UCP",
            image: "/f7.jpg",
            description: `Anwar Karim is a passionate and driven student from Gilgit-Baltistan, currently pursuing his Bachelor's degree in Computer Science at the University of Central Punjab. He serves as the Treasurer of the IEEE Computer Society UCP Chapter, where he actively engages with like-minded individuals and contributes to the growth of the community. Since March 2024, he has participated in various events, including the International Conference on "Tech for Tomorrow," Open House showcases for Final Year Projects, and numerous programming events and sessions organized by the IEEE Computer Society. These experiences have deepened his understanding of computer science and instilled in him a strong sense of purpose and responsibility to leverage technology for the betterment of society.`
        }
    ];

    const executiveLeadership = [
        {
            name: "Ayaan Zaman Khattak",
            position: "Executive Director",
            image: "/f18.jpg",
            description: `Ayaan Zaman Khattak is the Executive Director, known for his commitment to purposeful leadership and team success. He has played a key role in managing large-scale events such as Tech for Tomorrow (TFT) 1 & 2 and HITE 1 & 2, honing his skills in planning, collaboration, and execution. Ayan excels in turning ideas into actionable strategies, ensuring seamless event execution. He values empowering others, fostering innovation, and creating platforms for learning and community engagement. In addition to event management, he actively participates in strategic decision-making and team mentorship. Ayan is passionate about driving growth, creativity, and impactful initiatives while leading with empathy and clarity.`
        },
        {
            name: "Muhammad Wajeeh ur Rahman",
            position: "Executive Member Core Committee",
            image: "/f30.jpg",
            description: `Muhammad Wajeeh ur Rehman is currently serving as an Executive Member of the IEEE UCP Chapter. In this role, he actively contributes to the planning and execution of initiatives that foster technological innovation, academic excellence, and professional development within the student body. As a committed Computer Science undergraduate, he is passionate about creating opportunities for learning, collaboration, and growth within the tech community. Through his involvement with IEEE, Muhammad has developed strong leadership, organizational, and communication skills, while working towards building an inclusive environment that empowers aspiring technologists. He firmly believes in the power of innovation to drive meaningful impact and strives to lead with purpose, integrity, and a vision for positive change.`
        }
    ];

    const coordinators = [
        {
            name: "Muhammad Faizan",
            position: "Coordinator - Male",
            image: "/f8.jpg",
            description: `Muhammad Faizan is currently serving as the Coordinator of the IEEE Computer Society Chapter at the University of Central Punjab (UCP), where he actively contributes to organizing impactful tech events, workshops, and seminars that bridge the gap between students and the evolving tech industry. With a strong passion for innovation, leadership, and community building, he strives to create a collaborative environment that encourages learning, networking, and professional growth. His role allows him to engage with talented individuals, foster teamwork, and play a part in nurturing the next generation of tech leaders.`
        },
        {
            name: "Rabail Fiaz",
            position: "Coordinator - Female",
            image: "/f9.jpg",
            description: `Rabail Fiaz is a Coordinator of the IEEE Computer Society UCP Chapter. She has had the opportunity to develop valuable skills and experience in leadership, teamwork, and communication. Through this role, she enhanced her ability to effectively communicate technical ideas and manage events and workshops. With a strong foundation in computer science and a drive to stay up-to-date with industry trends, she is excited to make a positive impact in the tech community.`
        }
    ];

    const media = [
        {
            name: "Ahmad Raza",
            position: "Director Media",
            image: "/f10.jpg",
            description: `Ahmad Raza is the Media Director of the IEEE Computer Society, responsible for covering all events and strategically managing the society's social media presence. His role focuses on enhancing the society's visibility and impact through creative content and digital outreach. Ahmad is passionate about storytelling and leveraging social media platforms to engage with the community, share knowledge, and amplify the society's message. He works closely with the team to ensure consistent branding and messaging across all digital channels, strengthening the connection between the society and its audience.`
        },
        {
            name: "Furqan Azhar",
            position: "Co-Director Media",
            image: "/f11.jpg",
            description: `Furqan Azhar is currently pursuing a degree in Computer Science at UCP and is leading HR operations at the IEEE Computer Society UCP Chapter. His focus is on building a strong, motivated team and creating opportunities for students to explore tech, leadership, and innovation. Furqan actively organizes events, workshops, and networking opportunities that encourage collaboration and growth within the student community. He is dedicated to empowering students to develop both technical and leadership skills while fostering a supportive environment for personal and development.`
        }
    ];

    const graphics = [
        {
            name: "Eisha Khalid",
            position: "Director Graphics",
            image: "/f12.jpg",
            description: `Eisha is currently pursuing her Bachelor's in Computer Science and is passionate about design and creativity. As the Director of Graphics at the IEEE Computer Society, she enjoys turning ideas into visuals and loves experimenting with new styles and tools. Being part of the IEEE Computer Society has helped her grow both as a designer and as a team player. Eisha is always excited to learn new things and take on creative challenges. Whether it's making posters, social media designs, or helping with event branding, she strives to bring her best to everything she does.`
        }
    ];

    const marketing = [
        {
            name: "Qasim Naseer",
            position: "Director Marketing",
            image: "/f14.jpg",
            description: `Qasim Naseer has worked with MySQL, Python, JavaScript, and C++, demonstrating strong skills in OOP, Data Structures, and Algorithms. With a variety of projects and one internship providing real-world experience, he is adept at managing databases and designing intuitive user interfaces. Qasim has dedicated himself to enhancing his managerial and professional skills while actively supporting technological progress. He believes that by continuing to learn and grow, he can contribute more to development and make a meaningful impact in the tech field.`
        },
        {
            name: "Bismah Irshad",
            position: "Co-Director Marketing",
            image: "/f15.jpg",
            description: `Bismah Irshad is a passionate Computer Science student with a keen interest in problem-solving and exploring new technologies. She believes in teamwork, creativity, and making a meaningful impact through innovative ideas. As the Co-Director of Marketing, she is excited to contribute to planning campaigns, building a strong brand identity, and connecting with students through engaging content. Bismah is committed to inspiring growth, sharing knowledge, and creating opportunities for all.`
        }
    ];

    const creative = [
        {
            name: "Junita Azhar",
            position: "Director Creative",
            image: "/f20.jpg",
            description: `Junita Azhar is the Director of the Creative Department, where she leads a team of innovative thinkers and creatives, driving visionary projects and campaigns. She fosters a culture of imagination and collaboration, pushing boundaries and delivering impactful results. Her passion lies in harnessing creativity to solve problems, inspire audiences, and leave a lasting impression.`
        },
        {
            name: "Areeba Mehtab",
            position: "Co-Director Creative",
            image: "/f24.jpg",
            description: `Areeba Mehtab is currently in her 6th semester of BSCS and is passionate about both technology and creativity. This passion is reflected in her role as the Co-Director of Creative at the IEEE UCP Computer Society, where she works on designing engaging and impactful visual content. Alongside her studies, she also runs a small resin art business, allowing her to explore her artistic side and grow as a creative entrepreneur.`
        }
    ];

    const management = [
        {
            name: "Mohid Durrani",
            position: "Director Management",
            image: "/f13.jpg",
            description: `Mohid Durrani is the Director Management at the IEEE Computer Society UCP Chapter, where he plays a pivotal role in overseeing event logistics, team coordination, and strategic planning. Known for his strong organizational and leadership abilities, Mohid ensures that every event and initiative runs smoothly and efficiently. His passion for management and attention to detail allow him to lead with clarity and purpose, fostering a collaborative environment for team success. Mohid is dedicated to creating impactful experiences that contribute to the growth and engagement of the tech community at UCP.`
        },
        {
            name: "Arslan Mustafa",
            position: "Co-Director Management",
            image: "/f16.jpg",
            description: `Arslan Mustafa is a dedicated 6th-semester BSCS student serving as the Co-Director of Management at the IEEE Computer Society UCP Chapter. He contributes to driving initiatives, fostering innovation, and promoting technological excellence within the society, leveraging his skills to support a vibrant community of like-minded individuals. Arslan plays a key role in planning and executing events, ensuring seamless coordination and impactful outcomes. His commitment to continuous learning and effective teamwork helps create a dynamic environment for growth and collaboration.`
        }
    ];

    const logistics = [
        {
            name: "Abdul Moeez Tariq",
            position: "Director Logistics",
            image: "/f21.jpg",
            description: `Abdul Moeez Tariq serves as the Director of Logistics at IEEE Computer Society UCP. With a strong foundation in web development, database management, and programming, he combines technical expertise with organizational skills to ensure seamless execution of events and activities. Known for his dedication, teamwork, and problem-solving abilities, Moeez brings efficiency and structure to logistics operations, contributing actively to the society’s success.`
        },
        {
            name: "Fahad Tanveer",
            position: "Co-Director Logistics",
            image: "/f23.jpg",
            description: `Fahad Tanveer is the Co-Director of Logistics at IEEE Computer Society UCP. He is dedicated to organizing and managing events efficiently, ensuring smooth execution and coordination. With a strong interest in technology and teamwork, Fahad contributes actively to the society's success while continuously learning and growing in his role.`
        }
    ];

    const hackathon = [
        {
            name: "Hamza Asim",
            position: "Director Hackathon",
            image: "/f19.jpg",
            description: `Hamza Asim actively participates in competitions and focuses on developing strong management skills. His involvement in various gaming and programming events has broadened his technical and organizational experience. As the admin of FOIT groups with over 2,600 members, he has built valuable networking ties with students across academic levels. Driven by a passion for teaching, Hamza runs a monetized YouTube channel called Blitzerine Codes, where he teaches programming with an emphasis on logical thinking and real problem-solving. His goal is to foster a community of skilled, logic-driven developers who learn beyond rote memorization.`
        }
    ];

    const hr = [
        {
            name: "Abdul Manaf",
            position: "Director HR",
            image: "/f25.jpg",
            description: `Abdul Manaf is the HR Director at the IEEE Computer Society, UCP Chapter. Currently pursuing a degree in Computer Science at UCP, he is leading HR operations with a focus on building a strong, motivated team and creating opportunities for students to explore tech, leadership, and innovation. He actively works on talent development, team engagement, and organizing initiatives that foster collaboration and professional growth within the society. Abdul is committed to creating an inclusive environment where every student feels valued and empowered to contribute.`
        },
        {
            name: "Jahanzaib Ahmad",
            position: "Co-Director HR",
            image: "/f26.jpg",
            description: `Jahanzaib Ahmad is a Computer Science student with a passion for technology, teamwork, and leadership. As the Co-Director of HR at the IEEE UCP Computer Society, he actively contributes to managing and coordinating team efforts while building strong connections within the tech community. Jahanzaib is dedicated to fostering a collaborative environment that empowers students to grow both personally and professionally. He also plays a key role in planning HR initiatives that enhance team engagement and communication.`
        }
    ];

    const publications = [
        {
            name: "Abdullah Habib",
            position: "Director Comm & Pub",
            image: "/f27.jpg",
            description: `Abdullah Habib is a passionate Computer Science student in BSCS Batch 26 at the University of Central Punjab (UCP). With a strong focus on technology and communication, he is committed to continuous learning and making impactful contributions to every project. Abdullah has honed excellent communication skills, enabling effective collaboration, and excels in problem-solving and innovation. Based in Lahore, he seeks opportunities to apply his skills while pursuing his studies. Outside academics, he enjoys exploring tech innovations, learning about geopolitics, and actively volunteering.`
        },
        {
            name: "Muhammad Ali Husnain",
            position: "Co-Director Comm & Pub",
            image: "/f28.jpg",
            description: `M Ali Husnain is currently serving as the Director of Communication at the IEEE Computer Society. With a strong focus on impactful messaging and strategic outreach, he leads communication efforts, oversees content creation, and ensures consistency across all platforms. His dedication contributes significantly to enhancing the visibility and professionalism of the society’s initiatives.`
        }
    ];

    const finance = [
        {
            name: "Muhammad Ahmad Arshad",
            position: "Director Finance",
            image: "/f39.jpg",
            description: `Muhammad Ahmad Arshad serves as the Director of Finance at the IEEE Computer Society. He is responsible for overseeing financial planning, budgeting, and resource allocation to ensure the organization’s fiscal stability and growth. Leading a team in managing financial operations, analyzing expenditures, and implementing strategic cost-control measures, Ahmad collaborates closely with other departments to align financial strategies with organizational goals. Through diligent reporting and analysis, he strives to maintain transparency, support informed decision-making, and drive long-term financial sustainability. His commitment to accuracy, efficiency, and accountability underpins all aspects of his work.`
        }
    ];

    const executivesMembers = [
        {
            name: "Minahil Haseeb",
            position: "Executive Member HR",
            image: "/f29.jpg",
            description: `Minahil Haseeb is an executive member of the IEEE Computer Society, where she is dedicated to supporting fellow members, encouraging growth, and creating opportunities for continuous learning. Her role involves actively contributing to events, collaborating with team members, and ensuring a positive and inclusive environment within the society. With a strong interest in technology and community building, Minahil is committed to making a meaningful impact and helping others thrive through teamwork, support, and shared knowledge.`
        },
        {
            name: "Huzaifa Bhatti",
            position: "Executive Member Logistics",
            image: "/f36.jpg",
            description: `M. Huzaifa Bhatti is a passionate BSCS student at the University of Central Punjab with a strong interest in technology and computer science. He currently serves as an Executive Member in the Logistics Department of the IEEE Computer Society UCP Chapter, where he actively contributes to organizing academic and extracurricular events. With hands-on experience as an IT Technician and a solid background in computer repair, Huzaifa combines technical skills with effective coordination. He has also launched High Achievers Academy, an initiative focused on providing quality online education to high school students.`
        },
        {
            name: "Shafay Sarwar",
            position: "Executive Member Creative",
            image: "/f34.jpg",
            description: `Shafay Sarwar is an executive member of the IEEE Computer Society. He contributes to designing and executing visually compelling content that aligns with the technical vision and organizational goals. His role focuses on transforming innovative ideas into impactful visual narratives for events, campaigns, and digital platforms. He works closely with cross-functional teams to ensure creative consistency and excellence, promoting engagement and a strong visual identity.`
        },
        {
            name: "Javeria Hussain",
            position: "Executive Member Creative",
            image: "/f35.jpg",
            description: `Javeria Sarwar is an executive member of the IEEE Computer Society. She contributes to designing and executing visually compelling content that aligns with the technical vision and organizational goals. Her role focuses on transforming innovative ideas into impactful visual narratives for events, campaigns, and digital platforms. She works closely with cross-functional teams to ensure creative consistency and excellence, promoting engagement and a strong visual identity.`
        },
        {
            name: "Muhammad Abaidullah",
            position: "Executive Member Media",
            image: "/f32.jpg",
            description: `Muhammad Abaidullah is a passionate Computer Science student with a strong interest in artificial intelligence, cloud computing, and software development. He currently serves as a Media Executive Member in the IEEE Student Branch, where he actively contributes as part of the Social Media Handling Team. His role in IEEE has helped him enhance his leadership, communication, and technical skills by blending creativity with innovation. Muhammad is committed to continuous learning and aims to contribute to impactful tech initiatives that drive positive change through technology.`
        },
        {
            name: "Abdullah Mazhar",
            position: "Executive Member Marketing",
            image: "/f33.jpg",
            description: `Abdullah Mazhar is a passionate Frontend Developer with hands-on experience in building responsive and user-friendly web interfaces. He recently completed an internship at Software Pro, where he enhanced his skills in HTML, CSS, JavaScript, and modern UI design practices. During his internship, Abdullah contributed to real-world projects, gaining valuable insight into frontend workflows and team collaboration. He is currently completing his computer science degree at the University of Central Punjab (UCP). Abdullah is eager to apply his knowledge and continue growing as a developer.`
        },
        {
            name: "Muhammad Abubakar",
            position: "Executive Member Management",
            image: "/f31.jpg",
            description: `Muhammad Abubakar is serving as an Executive Member of the IEEE Computer Society Management Team, where he plays a key role in managing and driving initiatives that foster innovation, collaboration, and growth within the tech community. As a dedicated member of the management team, he works closely with fellow members to develop and implement strategies, manage events, and create opportunities for professionals and students to connect and learn. His passion for technology, leadership, and community building drives him to make a meaningful impact through his work, and he is committed to empowering others through service, innovation, and knowledge sharing.`
        },
        {
            name: "Syed Muhammad Hussain Bukhari",
            position: "Executive Member Management",
            image: "/f37.jpg",
            description: `Syed Mohammad Hussain Bukari is an executive member of the Team Management IEEE Computer Science Society. With a solid background in 3D graphics using Blender, he also possesses expertise in front-end development. His leadership and organizational skills were showcased through his active role in "Teach for Tomorrow 2" and several other seminars. Dedicated to fostering growth and learning, Hussain's experience in both technical and management domains reflects his versatile skill set and passion for innovation in the field of technology.`
        },
        {
            name: "Abdul raffay waheed",
            position: "Executive Member Management",
            image: "/f45.jpg",
            description: `Syed Mohammad Hussain Bukari is an executive member of the Team Management IEEE Computer Science Society. With a solid background in 3D graphics using Blender, he also possesses expertise in front-end development. His leadership and organizational skills were showcased through his active role in "Teach for Tomorrow 2" and several other seminars. Dedicated to fostering growth and learning, Hussain's experience in both technical and management domains reflects his versatile skill set and passion for innovation in the field of technology.`
        },
        {
            name: "Abdullah Kashif",
            position: "Executive Member Comm & Pub",
            image: "/f41.jpg",
            description: `Abdullah Kashif is a 6th semester software engineering student, currently serving as a Communication Executive and part of the management team in the IEEE Computer Society. He is looking forward to contributing to the society for upcoming events. Passionate about technology and communication, Abdullah aims to enhance his skills while actively participating in organizing and managing events that bring value to the tech community. His goal is to foster impactful connections and promote a collaborative environment within the society.`
        }
    ];

    const specializedRoles = [
        {
            name: "Muhammad Umar Aziz",
            position: "Career Services Officer",
            image: "/f40.jpg",
            description: `Muhammad Umar Aziz is a BSCS student at the University of Central Punjab with over 2 years of hands-on experience in software development. He has also been actively working as an Artificial Intelligence Engineer, exploring the cutting edge of AI and machine learning. Deeply passionate about coding, Umar loves solving real-world problems through technology. His journey in tech has equipped him with a solid foundation in both frontend and backend development, along with practical AI applications. Umar continuously strives to learn, grow, and contribute to impactful projects that push boundaries and create value.`
        },
        {
            name: "Muhammad Hassan Iftikhar",
            position: "Opportunity Curator",
            image: "/f42.jpg",
            description: `Muhammad Hassan Iftikhar is a Computer Science student at the University of Central Punjab with experience in full-stack development and a passion for artificial intelligence. He specializes in creating complete software solutions, focusing on both frontend and backend technologies to build efficient, scalable applications. His interest in AI drives him to explore machine learning and its potential to solve complex real-world problems. He is committed to continuously learning and expanding his technical skills. By combining his software development expertise and AI enthusiasm, he aims to contribute to innovative projects that make a meaningful impact on society.`
        },
        {
            name: "Umer Hassan",
            position: "Engagement Strategist",
            image: "/f43.jpg",
            description: `Umer Hassan is a 6th semester Computer Science student at the University of Central Punjab, pursuing a BSCS degree. With a strong passion for artificial intelligence, he aspires to become an AI Developer and contribute to innovative tech solutions in the future.`
        }
    ];

    return (
        <HierarchyLayout
            title="Hierarchy 2024-25"
            subtitle="The legacy of brilliance"
            backgroundImage="/g9.jpg"
        >
            <div className="bg-black">
                {/* Advisor Section */}
                <LeadershipCard
                    name={advisor.name}
                    title={advisor.position}
                    image={advisor.image}
                    message={advisor.description}
                    theme="dark"
                />

                {/* Main Leadership Section */}
                <div className="py-20 flex flex-col gap-0">
                    <div className="max-w-7xl mx-auto px-6 mb-12 w-full text-center">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            Core <span className="text-[#FFA016]">Leadership</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#FFA016] mt-4 mx-auto rounded-full" />
                    </div>
                    {coreLeadership.map((member, index) => (
                        <LeadershipCard
                            key={index}
                            name={member.name}
                            title={member.position}
                            image={member.image}
                            message={member.description}
                            theme="dark"
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>

                {/* Executive Leadership Section */}
                <div className="py-20 flex flex-col gap-0 border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 mb-12 w-full text-center">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                            Executive <span className="text-[#FFA016]">Committee</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#FFA016] mt-4 mx-auto rounded-full" />
                    </div>
                    {executiveLeadership.map((member, index) => (
                        <LeadershipCard
                            key={index}
                            name={member.name}
                            title={member.position}
                            image={member.image}
                            message={member.description}
                            theme="dark"
                            reverse={index % 2 === 0}
                        />
                    ))}
                </div>

                {/* Team Sections */}
                <div className="pb-20">
                    <HierarchyTeamSection title="Coordinators" members={coordinators} />
                    <HierarchyTeamSection title="Team Media" members={media} />
                    <HierarchyTeamSection title="Team Graphics" members={graphics} />
                    <HierarchyTeamSection title="Team Marketing" members={marketing} />
                    <HierarchyTeamSection title="Team Creative" members={creative} />
                    <HierarchyTeamSection title="Team Management" members={management} />
                    <HierarchyTeamSection title="Team Logistics" members={logistics} />
                    <HierarchyTeamSection title="Team Hackathon" members={hackathon} />
                    <HierarchyTeamSection title="Team HR" members={hr} />
                    <HierarchyTeamSection title="Team Comm & Pub" members={publications} />
                    <HierarchyTeamSection title="Team Finance" members={finance} />
                    <HierarchyTeamSection title="Executive Members" members={executivesMembers} />
                    <HierarchyTeamSection title="Specialized Roles" members={specializedRoles} />
                </div>
            </div>
        </HierarchyLayout>
    );
};

export default Hierarchy2425;
