'use client';

import React from 'react';
import HierarchyLayout from '../../components/Layouts/HierarchyLayout';
import LeadershipCard from '@/components/ReusableComponents/LeadershipCard';
import HierarchyTeamSection from '@/components/ReusableComponents/HierarchyTeamSection';

const Hierarchy2425 = () => {
    const advisor = {
        name: "Muhammad Hammad ur Rehman",
        position: "Patron - UCP Welfare Society",
        image: "/sir.jpg",
        description: `M. Hammad ur Rehman is a dedicated professional specializing in Corporate Social Responsibility (CSR), Partnerships and Engagement, and Community Service. With strong expertise in volunteer management and customer service, he excels in building meaningful relationships and delivering impactful initiatives. A skilled communicator and public speaker, Hammad is passionate about training, collaboration, and driving positive social change.`
    };

    const coreLeadership = [
            {
        name: "Talha Badar",
        position: "President",
        image: "/talha1.JPG",
        description: `Meet Talha Badar, a BSCS student at UCP whose university journey has been a remarkable story of growth and self-discovery. 🌟 Once a shy individual, Talha discovered his confidence and purpose through active participation in various societies and events. From contributing to the UCP Welfare Society, Dramatics Club (UDC), ACM, MLSA, and Rizq, he built a legacy of dedication and excellence. His year-long tenure with the UCP Welfare Society, serving in two key roles, became a transformative milestone in his personal and professional development. He also embarked on a new chapter with the Sawera Foundation, collaborating with an inspiring team to create meaningful change. 🚀
Talha further sharpened his teamwork and leadership skills.With a passion for academics and extracurriculars, Talha is determined to leave an impactful legacy—not just through hard work, but by making a real difference in every role he undertakes.`,
        },{
        name: "Saleema Masoom",
        position: "Vice President",
        image: "/saleema.JPG",
        description: `Meet our Vice President Saleema Masoom, she started her journey by volunteering in “Youth Development Conference “and ever since then she has been steadfastly dedicated to the noble cause of social work by doing social work with UWS.Saleema’s pivotal role Include managing budget for every event and to ensure the funds reach to deserving individuals. Her commitment to financial Transparency accountability shows how important she is to our societies mission goals and how much we can achieve because of her.`,
        }  
    ];

    // const executiveLeadership = [
    //     {
    //         name: "Ayaan Zaman Khattak",
    //         position: "Executive Director",
    //         image: "/f18.jpg",
    //         description: `Ayaan Zaman Khattak is the Executive Director, known for his commitment to purposeful leadership and team success. He has played a key role in managing large-scale events such as Tech for Tomorrow (TFT) 1 & 2 and HITE 1 & 2, honing his skills in planning, collaboration, and execution. Ayan excels in turning ideas into actionable strategies, ensuring seamless event execution. He values empowering others, fostering innovation, and creating platforms for learning and community engagement. In addition to event management, he actively participates in strategic decision-making and team mentorship. Ayan is passionate about driving growth, creativity, and impactful initiatives while leading with empathy and clarity.`
    //     },
    //     {
    //         name: "Muhammad Wajeeh ur Rahman",
    //         position: "Executive Member Core Committee",
    //         image: "/f30.jpg",
    //         description: `Muhammad Wajeeh ur Rehman is currently serving as an Executive Member of the IEEE UCP Chapter. In this role, he actively contributes to the planning and execution of initiatives that foster technological innovation, academic excellence, and professional development within the student body. As a committed Computer Science undergraduate, he is passionate about creating opportunities for learning, collaboration, and growth within the tech community. Through his involvement with IEEE, Muhammad has developed strong leadership, organizational, and communication skills, while working towards building an inclusive environment that empowers aspiring technologists. He firmly believes in the power of innovation to drive meaningful impact and strives to lead with purpose, integrity, and a vision for positive change.`
    //     }
    // ];

    const communications = [
        {
            name: "Bilal Hassan",
            position: "Director Communications",
            image: "/bilal.jpg",
            description: `Introducing Bilal Hassan, our devoted Director of Communications. He has gained valuable experience through his active involvement in welfare organizations like AlKhidmat Foundation Pakistan, SKMCH, and has contributed to impactful projects along with the Punjab Police and Traffic Police, Lahore. His professional endeavors include customer support, sales, and communications, at renowned companies like Tycoon Logistics, Rank Orbit (Pvt) Ltd. etc., along with contributions to platforms like the Voltaire Society UCP and participation in International conferences have boosted his communication and leadership skills making him a fitting candidate. Being passionate about serving society, Bilal is committed to making a meaningful impact while working for the UCP Welfare Society.`
        },
        {
            name: "Kaneez Fatima",
            position: "Manager Communications",
            image: "/kaneez2.jpg",
            description: `Meet Kaneez Fatima, a passionate 7th semester PharmD student, who excellently balances her academic pursuits alongside her role as Manager of Communications at the UCP Welfare Society. In the past, she has wholeheartedly volunteered during ESAAR e RAMADAN, participated in visits to old age homes and shelter homes, where she gained valuable insights. She is also serving as the Co-Director of Communications in the SKMCH club at UCP. Additionally, she has also participated in the Pharmacy International Symposium held at UCP, where she showcased her ability to make impactful impressions. Such experiences have equipped her with the fundamental skills to work effectively as a Communication Manager and has deepened her commitment to serving the society. She eagerly awaits future opportunities to further enhance her capabilities!`
        }
    ];

    const media = [
        {
            name: "Haris Atif",
            position: "Director Media",
            image: "/haris.jpg",
            description: `Meet our esteemed director of Media Haris Chaudhary. Whose journey in social work commenced in Youth development Conference. He traveled to several social welfare foundations and assisted in execution of UWS event Esaar E Ramadan. Haris is the driving force behind our compelling media content, he has crafted intriguing articles, stories and reels that resonates with our audience. As the director of media, his primary responsibility is to ensure that our content aligns seamlessly with our objectives and fosters a strong connection with our audiences.
He's the creative force behind our engaging social media content, from captivating reels to insightful stories, ensuring that all UWS events receive comprehensive coverage.`
        },
        {
            name: "Hassan Jamshaid",
            position: "Manager Media",
            image: "/hassan.jpg",
            description: `Meet our dedicated Manager of Social Media Hassan Jamshaid, whose journey in social work commenced by participating in youth development conference. He has visited various Social Welfare Organizations enriching in experience along the way and Hassan ‘s dedication shown through his role in participating in organizing UWS event Esaar e Ramadan. Hassan’s responsibility extends in managing our entire social media presence, ensuring our content connects with our audience meaningfully.`
        },{
            name: "Khubaib Ali",
            position: "Manager Media",
            image: "/khubaib.jpg",
            description: `Meet Muhammad Kubaib Ali Ghauri, a committed 7th semester student of Accounting and Finance currently working as the Manager of Media at the UCP Welfare Society. He initially began his journey as a general member, where he polished his skills and gained insight into the society’s method of operations. As the Manager of Media, he will utilize his expertise of content creation, event coverage, and social media strategies, ensuring that the initiatives of UWS reach and resonate with a wider audience. With such a challenging yet rewarding role, Kubaib feels like this position will allow him to grow personally and professionally while contributing to meaningful causes.`
        }
    ];

    const graphics = [
        {
            name: "Anum Jabeen",
            position: "Director Graphics",
            image: "/anum.jpg",
            description: `Meet Anum Jabeen, a passionate and creative 6th semester Biochemistry student. Currently serving as the Director of Graphics at UWS, she has actively contributed to various other societies in the past including the IGC, ULS, Nisa, and Takhleeqar Society, where she refined her teamwork and organizational capabilities. Anum has demonstrated her commitment to community service through her volunteer work with the Nighat Foundation, striving to create a positive impact. On behalf of the UWS, Anum participated and won 1st place in the SOTY’24 Spellathon competition. With a blend of academic excellence, creativity and service, Anum aspires to bring a positive change in the society.`
        },
        {
            name: "Kaneez Fatima",
            position: "Manager Graphics",
            image: "/kaneez1.jpg",
            description: `Introducing Kaneez Fatima, a dedicated 3rd semester BSBA student. She has worked as a committed UWS volunteer since her first semester, contributing to the success of numerous events. Additionally, Kaneez actively volunteers with the Alkhidmat Foundation, reflecting her commitment to social responsibility. Leveraging her experiences, she now serves as the Manager of Graphics at UWS, where she specializes in creating impactful visual content and focusing on initiatives that contribute to the growth and success of UWS. Grateful for the trust placed in her, Kaneez continues to showcase excellence and commitment in her endeavors.`
        },
    ];

    const marketing = [
        {
            name: "Ahmad Mehmood",
            position: "Director Marketing",
            image: "/ahmad1.jpg",
            description: `Meet Ahmad Mehmood, the hardworking Director of Marketing for UCP Welfare Society. Having over 2 years of experience in managing events and conferences for various societies, he has developed a passion for driving social impact. Previously, as Manager of Communications for UCP Welfare Society, he highlighted social causes and fostered meaningful connections. Now, as Director of Marketing, he feels excited and enthusiastic to leverage his expertise to amplify the mission of UWS by engaging with the community thus planting the seed of positive change.`
        },
        {
            name: "Ali Hassan",
            position: "Manager Marketing",
            image: "/ali.jpg",
            description: `Meet Ali Hassan, a visionary leader currently serving as the Assistant Director at HUM TV, holding the distinction of being one of the youngest Commercial Directors in Pakistan. He has also had the privilege of working with major companies like PayPal and feels honored to hold the position of Manager of Marketing at the UCP Welfare Society. Ali is deeply passionate about creating impactful campaigns, fostering community engagement, and leading initiatives that contribute to social welfare and uplift communities, which aligns perfectly with the mission of the UCP Welfare Society.`
        }
    ];

    const creative = [
        {
            name: "Miraj Asif",
            position: "Director Creative",
            image: "/miraj.jpg",
            description: `Junita Azhar is the Director of the Creative Department, where she leads a team of innovative thinkers and creatives, driving visionary projects and campaigns. She fosters a culture of imagination and collaboration, pushing boundaries and delivering impactful results. Her passion lies in harnessing creativity to solve problems, inspire audiences, and leave a lasting impression.`
        },
        {
            name: "Isra Azam",
            position: "Manager Creative",
            image: "/isra.jpg",
            description: `Areeba Mehtab is currently in her 6th semester of BSCS and is passionate about both technology and creativity. This passion is reflected in her role as the Co-Director of Creative at the IEEE UCP Computer Society, where she works on designing engaging and impactful visual content. Alongside her studies, she also runs a small resin art business, allowing her to explore her artistic side and grow as a creative entrepreneur.`
        }
    ];

    const management = [
        {
            name: "Abdullah Sadiq",
            position: "Director Management",
            image: "/abdullah.jpg",
            description: `He is privileged to serve as the Director of operation for our esteemed society. His professional journey commenced with his participation in a youth development conference. Over the past year, he has had the opportunity to visit various social welfare foundations and contributed to the coordination of Esar-e-Ramadan iftar dastarkhawans. In his role, he is responsible for overseeing all aspects of management, ensuring smooth operations and impactful initiatives for the society's advancement.`
        },
        {
            name: "Hassaan Virk",
            position: "Manager Management",
            image: "/hassaan.jpg",
            description: `Meet our dedicated manager of Management Hassan Ishtiaq Virk, he has been part of USHERS sub core team of management and recently has been involved in UWS events, Hassan has also been an integral part of management in Esaar E Ramadan management team. With his experience and passion for organizing events Hassan ensures smooth operations and effective coordination in all endeavors he undertakes.`
        }
    ];

    const logistics = [
        {
            name: "Kamran Sajjad",
            position: "Director Logistics",
            image: "/kamran.jpg",
            description: `Meet Kamran Sajjad, a 7th semester Software Engineering student, who currently serves as the Director of Logistics at UWS. Previously, he excelled as the Manager of Logistics at UWS, contributing to the success of key society events, such as the Art of Healing and Esar-e-Ramadan. His expertise lies in effective planning, resource management, and the seamless execution of operations. With his extensive experience, Kamran remains dedicated to enhancing the growth and success of UWS through strategic contributions.`
        },
        {
            name: "Jawad Waseem",
            position: "Manager Logistics",
            image: "/jawad.jpg",
            description: `Meet Jawad Waseem, a dedicated and passionate volunteer who has contributed to many of the social activities of “Life at Lahore” including their Inter faith Iftar and awareness campaigns. He is also a part of the UCP “IBTADA School” which is dedicated to teaching underprivileged kids in order to instill hope in their hearts and bring a meaningful change in their lives. Further showcasing his commitment to social welfare, Jawad had also joined the Akhuwat Foundation during their Ramzan campaign and thus tried to play his part in the betterment of the community. Additionally, he has zealously participated in various other societies, including the UCP Literary Society and Mosaic Society where he got the chance to learn and polish his skills while interacting with other passionate individuals.`
        }
    ];

    const operations = [
        {
            name: "Farukh Javed",
            position: "Director Operations ",
            image: "/farukh.jpg",
            description: `Meet Muhammad Farukh Javed, a Computer Science student at UCP who specializes in AI and cybersecurity. He currently serves as the Director of Management for the Welfare Society, after previously having contributed to the success of UWS as Manager of Operations. With over 2 years of experience of contributing to a number of societies and volunteering with different organizations, Farukh has contributed to both technological and non-technological events, as well as initiatives like Esaar-e-Ramzan and Dastarkhwans, both within UCP and beyond. His strengths lie in leadership and event planning, enthusiastically connecting with charitable organisations to support welfare.`
        },
        {
            name: "Ihsan Illahi ",
            position: "Manager Operations",
            image: "/ihsan.jpg",
            description: `Meet Ihsan Ellahi, a 5th semester student of BSCS who has been appointed as the Manager of Management at UWS. Having started as a general member, he has worked diligently to ensure the success of impactful society events, such as the Art of Healing and Essar-e-Ramadan. Ihsan’s strengths lie in effective planning, resource management, and smooth execution of operations. With his dedication and experience, Ihsan looks forward to continue his valuable contributions to UWS’s increasing success.`
        }
    ];

    
    const publications = [
        {
            name: "Rubina Iftikhar",
            position: "Director Comm & Pub",
            image: "/rubina.jpg",
            description: `Meet Rubina Malik, a 5th semester PharmD student currently serving as the Director of Publications. She has been an active member of the editorial team for UCP's “Rover Reflections Magazine” and has worked as a content writer in the Health and Pharmacy Club. She believes in the transformative power of words and strives to craft narratives that inspire action and amplify voices. Rubina’s passion for welfare stems from her O-level days, during which she engaged in impactful activities such as fundraising, visits to special children's homes and plantation drives etc. With a strong commitment to making a difference, she is eager to leave a meaningful mark in her current role.  `
        }
    ];

  


    //     {
    //         name: "Minahil Haseeb",
    //         position: "Executive Member HR",
    //         image: "/f29.jpg",
    //         description: `Minahil Haseeb is an executive member of the IEEE Computer Society, where she is dedicated to supporting fellow members, encouraging growth, and creating opportunities for continuous learning. Her role involves actively contributing to events, collaborating with team members, and ensuring a positive and inclusive environment within the society. With a strong interest in technology and community building, Minahil is committed to making a meaningful impact and helping others thrive through teamwork, support, and shared knowledge.`
    //     },
    //     {
    //         name: "Huzaifa Bhatti",
    //         position: "Executive Member Logistics",
    //         image: "/f36.jpg",
    //         description: `M. Huzaifa Bhatti is a passionate BSCS student at the University of Central Punjab with a strong interest in technology and computer science. He currently serves as an Executive Member in the Logistics Department of the IEEE Computer Society UCP Chapter, where he actively contributes to organizing academic and extracurricular events. With hands-on experience as an IT Technician and a solid background in computer repair, Huzaifa combines technical skills with effective coordination. He has also launched High Achievers Academy, an initiative focused on providing quality online education to high school students.`
    //     },
    //     {
    //         name: "Shafay Sarwar",
    //         position: "Executive Member Creative",
    //         image: "/f34.jpg",
    //         description: `Shafay Sarwar is an executive member of the IEEE Computer Society. He contributes to designing and executing visually compelling content that aligns with the technical vision and organizational goals. His role focuses on transforming innovative ideas into impactful visual narratives for events, campaigns, and digital platforms. He works closely with cross-functional teams to ensure creative consistency and excellence, promoting engagement and a strong visual identity.`
    //     },
    //     {
    //         name: "Javeria Hussain",
    //         position: "Executive Member Creative",
    //         image: "/f35.jpg",
    //         description: `Javeria Sarwar is an executive member of the IEEE Computer Society. She contributes to designing and executing visually compelling content that aligns with the technical vision and organizational goals. Her role focuses on transforming innovative ideas into impactful visual narratives for events, campaigns, and digital platforms. She works closely with cross-functional teams to ensure creative consistency and excellence, promoting engagement and a strong visual identity.`
    //     },
    //     {
    //         name: "Muhammad Abaidullah",
    //         position: "Executive Member Media",
    //         image: "/f32.jpg",
    //         description: `Muhammad Abaidullah is a passionate Computer Science student with a strong interest in artificial intelligence, cloud computing, and software development. He currently serves as a Media Executive Member in the IEEE Student Branch, where he actively contributes as part of the Social Media Handling Team. His role in IEEE has helped him enhance his leadership, communication, and technical skills by blending creativity with innovation. Muhammad is committed to continuous learning and aims to contribute to impactful tech initiatives that drive positive change through technology.`
    //     },
    //     {
    //         name: "Abdullah Mazhar",
    //         position: "Executive Member Marketing",
    //         image: "/f33.jpg",
    //         description: `Abdullah Mazhar is a passionate Frontend Developer with hands-on experience in building responsive and user-friendly web interfaces. He recently completed an internship at Software Pro, where he enhanced his skills in HTML, CSS, JavaScript, and modern UI design practices. During his internship, Abdullah contributed to real-world projects, gaining valuable insight into frontend workflows and team collaboration. He is currently completing his computer science degree at the University of Central Punjab (UCP). Abdullah is eager to apply his knowledge and continue growing as a developer.`
    //     },
    //     {
    //         name: "Muhammad Abubakar",
    //         position: "Executive Member Management",
    //         image: "/f31.jpg",
    //         description: `Muhammad Abubakar is serving as an Executive Member of the IEEE Computer Society Management Team, where he plays a key role in managing and driving initiatives that foster innovation, collaboration, and growth within the tech community. As a dedicated member of the management team, he works closely with fellow members to develop and implement strategies, manage events, and create opportunities for professionals and students to connect and learn. His passion for technology, leadership, and community building drives him to make a meaningful impact through his work, and he is committed to empowering others through service, innovation, and knowledge sharing.`
    //     },
    //     {
    //         name: "Syed Muhammad Hussain Bukhari",
    //         position: "Executive Member Management",
    //         image: "/f37.jpg",
    //         description: `Syed Mohammad Hussain Bukari is an executive member of the Team Management IEEE Computer Science Society. With a solid background in 3D graphics using Blender, he also possesses expertise in front-end development. His leadership and organizational skills were showcased through his active role in "Teach for Tomorrow 2" and several other seminars. Dedicated to fostering growth and learning, Hussain's experience in both technical and management domains reflects his versatile skill set and passion for innovation in the field of technology.`
    //     },
    //     {
    //         name: "Abdul raffay waheed",
    //         position: "Executive Member Management",
    //         image: "/f45.jpg",
    //         description: `Syed Mohammad Hussain Bukari is an executive member of the Team Management IEEE Computer Science Society. With a solid background in 3D graphics using Blender, he also possesses expertise in front-end development. His leadership and organizational skills were showcased through his active role in "Teach for Tomorrow 2" and several other seminars. Dedicated to fostering growth and learning, Hussain's experience in both technical and management domains reflects his versatile skill set and passion for innovation in the field of technology.`
    //     },
    //     {
    //         name: "Abdullah Kashif",
    //         position: "Executive Member Comm & Pub",
    //         image: "/f41.jpg",
    //         description: `Abdullah Kashif is a 6th semester software engineering student, currently serving as a Communication Executive and part of the management team in the IEEE Computer Society. He is looking forward to contributing to the society for upcoming events. Passionate about technology and communication, Abdullah aims to enhance his skills while actively participating in organizing and managing events that bring value to the tech community. His goal is to foster impactful connections and promote a collaborative environment within the society.`
    //     }
    // ];

    // const specializedRoles = [
    //     {
    //         name: "Muhammad Umar Aziz",
    //         position: "Career Services Officer",
    //         image: "/f40.jpg",
    //         description: `Muhammad Umar Aziz is a BSCS student at the University of Central Punjab with over 2 years of hands-on experience in software development. He has also been actively working as an Artificial Intelligence Engineer, exploring the cutting edge of AI and machine learning. Deeply passionate about coding, Umar loves solving real-world problems through technology. His journey in tech has equipped him with a solid foundation in both frontend and backend development, along with practical AI applications. Umar continuously strives to learn, grow, and contribute to impactful projects that push boundaries and create value.`
    //     },
    //     {
    //         name: "Muhammad Hassan Iftikhar",
    //         position: "Opportunity Curator",
    //         image: "/f42.jpg",
    //         description: `Muhammad Hassan Iftikhar is a Computer Science student at the University of Central Punjab with experience in full-stack development and a passion for artificial intelligence. He specializes in creating complete software solutions, focusing on both frontend and backend technologies to build efficient, scalable applications. His interest in AI drives him to explore machine learning and its potential to solve complex real-world problems. He is committed to continuously learning and expanding his technical skills. By combining his software development expertise and AI enthusiasm, he aims to contribute to innovative projects that make a meaningful impact on society.`
    //     },
    //     {
    //         name: "Umer Hassan",
    //         position: "Engagement Strategist",
    //         image: "/f43.jpg",
    //         description: `Umer Hassan is a 6th semester Computer Science student at the University of Central Punjab, pursuing a BSCS degree. With a strong passion for artificial intelligence, he aspires to become an AI Developer and contribute to innovative tech solutions in the future.`
    //     }
    // ];

    return (
        <HierarchyLayout
            title="Hierarchy 2024-25"
            subtitle="The legacy of brilliance"
            backgroundImage="/g3.jpg"
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

                {/* Executive Leadership Section
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
                </div> */}

                {/* Team Sections */}
                <div className="pb-20">
                    <HierarchyTeamSection title="Team Communication" members={communications} />
                    <HierarchyTeamSection title="Team Media" members={media} />
                    <HierarchyTeamSection title="Team Graphics" members={graphics} />
                    <HierarchyTeamSection title="Team Marketing" members={marketing} />
                    <HierarchyTeamSection title="Team Publication" members={publications} />
                    <HierarchyTeamSection title="Team Creative" members={creative} />
                    <HierarchyTeamSection title="Team Management" members={management} />
                    <HierarchyTeamSection title="Team Logistics" members={logistics} />
                    <HierarchyTeamSection title="Team Operations" members={operations} />
                </div>
            </div>
        </HierarchyLayout>
    );
};

export default Hierarchy2425;
