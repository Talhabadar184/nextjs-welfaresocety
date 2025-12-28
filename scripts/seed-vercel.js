import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config();

import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

// 🔍 Detect local DB
const isLocal =
    process.env.DATABASE_URL?.includes('localhost') ||
    process.env.DATABASE_URL?.includes('127.0.0.1');

console.log('DEBUG: Loaded DATABASE_URL:', process.env.DATABASE_URL);

// 🟢 Create pool (Supabase-safe)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isLocal ? false : { rejectUnauthorized: false },
});

// 🟢 Create Kysely instance
const db = new Kysely({
    dialect: new PostgresDialect({ pool }),
});


const events = [
    {
        slug: 'Codex',
        title: "Codex 2025 - Bharia University Lahore",
        date: "February 21, 2025",
        description: "The IEEE Computer Society UCP Chapter proudly announces another remarkable achievement by its members at the CodeX Competition, hosted by Bahria University. Demonstrating a powerful blend of technical skills and competitive spirit, UCP students earned top honors in both programming and gaming categories. Our team secured both Winner and Runner-Up positions in the Speed Programming competition, showcasing outstanding coding ability and quick problem-solving under pressure. In the gaming arena, UCP dominated as one of our members clinched 1st place in the Tekken 7 competition with unmatched skill and precision. These victories highlight the versatility and excellence of IEEE-CS UCP students, who continue to excel across diverse tech and talent platforms. We extend our heartfelt congratulations to the winners for their dedication, focus, and for once again bringing recognition to the University of Central Punjab.",
        image: "/bulc.jpg",
        sub_images: [],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'ComputingFest',
        title: "Computing Fest 2025 – UCP Wins 1st Position in AI Prompt Crafting",
        date: "February, 2025",
        description: "<strong> Computing Fest 2025 – UCP Wins 1st Position in AI Prompt Crafting!</strong><br>The IEEE Computer Society UCP Student Chapter proudly represented the University of Central Punjab at Computing Fest 2025, organized by the University of Home Economics, Lahore. We are thrilled to share that Zaid Shahid achieved first place in the highly competitive AI Prompt Crafting Competition. His outstanding performance reflects the innovative spirit and technical expertise of our students. Alongside Zaid, our dedicated team members Anail Fatima, Naumana Ali, Noor e Sahar, Ritaj Aziz, and Muhammad Faseeh also contributed their talent and passion to this remarkable achievement. Their participation highlights the strength of collaboration, problem-solving, and perseverance nurtured within our chapter. This victory is a testament to the hard work and commitment of the IEEE Computer Society UCP Student Chapter. We are incredibly proud of our students for their excellence and for bringing this honor to UCP.",
        image: "/cf3.jpg",
        sub_images: ["/cf1.jpg", "/cf2.jpg", "/cf4.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'threat-intelligence-session',
        title: "Threat Intelligence Session ",
        date: "January 15, 2025",
        description: "The IEEE Computer Society UCP Chapter successfully organized an insightful and highly engaging session titled “How Organizations Detect and Respond to Cyber Threats” on Wednesday, January 15, 2025, at Venue B-108, UCP Lahore. The session featured Mr. Abdul Mannan, a Threat Hunter at Genesis Technologies, who brought a wealth of experience in cybersecurity, data analysis, and user behavior analytics.\n\nMr. Mannan provided a deep dive into how modern organizations identify, assess, and respond to cyber threats. From advanced threat detection techniques to real-time system protection strategies, attendees gained firsthand knowledge of how cybersecurity professionals stay ahead in an ever-changing digital world. His practical examples and actionable advice made the session especially impactful for students aspiring to enter the cybersecurity field.\n\nWe extend our sincere appreciation to Mr. Irfan Latif, Senior Lecturer at UCP, for his vital support in facilitating the session. A big thank-you also goes out to all the attendees for their enthusiastic participation.\n\nStay tuned for more interactive learning opportunities and professional development events from the IEEE-CS UCP Chapter!",
        image: "/ti2.jpg",
        sub_images: ["/ti3.jpg", "/ti4.jpg", "/ti5.jpg", "/ti6.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'fyp',
        title: "Final Year Projects Open House Exhibition 2025",
        date: "January 11, 2025",
        description: "The Final Year Projects (FYP) Open House Session served as a dynamic platform for graduating students to showcase their innovative projects, bridging academic learning with real-world application. The event brought together academia, industry professionals, and aspiring technologists, creating an engaging environment for knowledge exchange and collaboration. Projects spanned a wide range of disciplines, including artificial intelligence, software engineering, IoT, and data analytics, reflecting students' technical proficiency and creative problem-solving abilities. A highlight of the session was an inspiring keynote speech by Mr. Usman Asif, CEO of Devsinc, who emphasized the importance of purpose-driven technology and innovation in addressing societal challenges. He encouraged students to embrace entrepreneurship, build impactful solutions, and remain resilient in the face of evolving industry demands. His insights provided valuable direction to emerging professionals, underscoring the role of young talent in shaping Pakistan's tech future. The event concluded with the announcement of the top three winning projects, with prizes awarded to the 1st, 2nd, and 3rd place teams in recognition of their exceptional innovation and execution. The Open House not only celebrated academic excellence but also fostered meaningful connections between students and industry leaders, paving the way for potential mentorships, internships, and career opportunities.",
        image: "/fyp1.jpg",
        sub_images: [
            "/fyp5.jpg",
            "/fyp6.jpg",
            "/fyp7.jpg",
            "/fyp8.jpg",
            "/fyp9.jpg",
            "/fyp14.jpg",
            "/fyp2.jpg",
            "/fyp3.jpg",
            "/usmanasif.jpg",
            "/fyp11.jpg",
            "/fyp12.jpg",
            "/fyp13.jpg",
        ],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'bridging-theory',
        title: "Bridging Theory and Practice: Real-world Applications of Software Engineering",
        date: "January 10, 2025",
        description: "The IEEE Computer Society UCP Chapter had the honor of hosting an inspiring and knowledge-rich session featuring Arsalan Javed, Principal Software Engineer and founder of TechnoVerse, a global IT solutions company based in Pakistan. The event, titled “Bridging Theory and Practice: Real-world Applications of Software Engineering,” took place on January 10, 2025, in Room B112, B Building, and drew a highly engaged audience of students and faculty.\n\nArsalan Javed shared practical insights from his extensive experience in the software industry, demonstrating how foundational engineering concepts translate into real-world solutions. Through case studies and personal anecdotes, he offered students a deeper understanding of the industry's demands and how innovation, adaptability, and expertise can solve complex problems in software development.\n\nThe session left attendees inspired and better equipped to align their academic learning with real-world expectations. A special thank-you goes to Misbah Naz, Senior Lecturer at FOIT&CS, UCP, whose support and coordination played a key role in the success of this event.",
        image: "/tv4.jpg",
        sub_images: ["/tv1.jpg", "/tv2.jpg", "/tv3.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'tech-women-info-session',
        title: "Tech Women Information Session",
        date: "December 31, 2024",
        description: "On December 31, 2024, the University of Central Punjab hosted a Tech Women Information Session featuring Hina Raza, a 2024 alumna of the prestigious program. Held in Mechanical Hall, the session offered an inspiring glimpse into Hina’s personal journey in STEM, where she highlighted the challenges and triumphs of being a woman in technology. She emphasized the critical role of mentorship, networking, and global exposure in shaping successful careers. Attendees received a comprehensive overview of the Tech Women program, including its structure, cultural exchange components, and professional development opportunities. Practical guidance on eligibility, personal statements, and interview preparation was also shared. The session empowered students, especially women, to pursue careers in technology with renewed confidence, understanding the value of international programs, strong application skills, and professional networks.",
        image: "/tw7.jpg",
        sub_images: ["/tw1.jpg", "/tw2.jpg", "/tw3.jpg", "/tw4.jpg", "/tw5.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'tech-for-tomorrow-2.0',
        title: "Tech for Tomorrow 2.0",
        date: "December 30-31, 2024",
        description: "Tech for Tomorrow 2.0, hosted on December 30–31, 2024, at the University of Central Punjab in Lahore, is a transformative initiative by the IEEE Computer Society’s Diversity & Inclusion Program. This event is dedicated to empowering girls and underprivileged individuals in Pakistan by promoting accessible and inclusive technology education. Attendees will explore cutting-edge topics through technical sessions on AI, machine learning, cybersecurity, and software development. Workshops offer hands-on experience in programming, robotics, and web development, while competitions like hackathons and coding challenges encourage creativity and critical thinking. The event also provides exceptional networking opportunities with industry professionals and peers, alongside valuable industry exposure through company visits and expert presentations. Additionally, participants gain volunteer experience in event management and team collaboration. Tech for Tomorrow 2.0 aims to equip students with practical skills, inspire innovation, and reinforce the importance of diversity in the tech world.",
        image: "/tech2.jpg",
        sub_images: ["/tech1.jpg", "/tech3.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'talent-quest-fest-2.0',
        title: "Talent Quest Fest 2.0 - UMT",
        date: "December 16-17, 2024",
        description: "The IEEE Computer Society UCP Chapter is proud to celebrate the achievements of its talented members at Talent Quest Fest 2.0, organized by UMT’s School of Science and Technology (SST). Our students demonstrated excellence across both technical and gaming competitions.\n\nIn the Call of Duty gaming competition, Isma Mohid Durrani and Ali Usman Khan claimed 2nd and 3rd positions respectively, showcasing impressive strategy and teamwork in a highly competitive environment.\n\nMeanwhile, in the Coding Spree, Arslan Khan stood out with exceptional problem-solving skills, earning the winner's title and reaffirming UCP’s strength in computer science and programming talent.\n\nThese victories are a testament to the diverse capabilities of IEEE-CS UCP members, from gaming innovation to coding excellence. We applaud their dedication and congratulate them for bringing pride to the University of Central Punjab!",
        image: "/umt3.jpg",
        sub_images: ["/umt1.jpg", "/umt2.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'mobile-development-workshop',
        title: "Mobile Application Development Workshop ",
        date: "December, 2024",
        description: "<strong>  What an amazing session!</strong>\n\nThe Mobile Application Development Workshop, conducted by Muhammad Danish, Senior Software Engineer at Tenx, was an engaging and impactful experience for all participants. This hands-on session focused on equipping students with practical skills essential for their final year projects and future careers in tech.\n\nKey areas covered included enhancing application responsiveness using Android Jetpack and implementing AI features in mobile apps using Kotlin. The interactive format allowed students to apply their learning in real-time, boosting both confidence and technical capability.\n\nA heartfelt thank you to Muhammad Danish for generously sharing his knowledge, and to all the enthusiastic attendees whose active participation made the workshop a success. This event stands as a testament to the value of industry-academia collaboration in shaping the next generation of mobile developers.",
        image: "/m2.jpg",
        sub_images: ["/m1.jpg", "/m3.jpg", "/m4.jpg", "/m5.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'tech-for-tomorrow-1.0',
        title: "Tech for Tomorrow 1.0",
        date: "October 17-19, 2024",
        description: "Tech for Tomorrow, organized by the IEEE Computer Society’s Diversity & Inclusion (D&I) Program at the University of Central Punjab, took place from October 17–19, 2024. This impactful three-day event was designed to empower girls and underprivileged individuals in Pakistan by promoting accessibility and inclusivity in technology education. The event featured a diverse range of activities, including technical sessions on emerging technologies like AI, cybersecurity, and cloud computing; hands-on workshops in programming, robotics, and web development; and high-energy competitions such as coding challenges, hackathons, and robotics contests. Attendees also benefited from networking opportunities with industry professionals and peers, gaining exposure to real-world career paths through company visits and talks from industry leaders. In addition to technical enrichment, the event offered valuable volunteer experiences, fostering skills in event management, teamwork, and communication. Overall, 'Tech for Tomorrow' provided a holistic learning environment, blending technical growth, practical application, and community engagement—while reinforcing the critical importance of diversity and inclusion in the tech world.",
        image: "/g7.jpg",
        sub_images: [],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    },
    {
        slug: 'ieee-hite-2024',
        title: "IEEE HITE 2024 Conference",
        date: "October 17 2024",
        description: "IEEE HITE 2024, held over two days in December at the University of Central Punjab, was a collaborative initiative by UCP's Faculty of Information Technology & Computer Science (FOIT & CS), Faculty of Engineering (FOE), IEEE Lahore Section, and specialized IEEE societies. The event aimed to explore and share advancements in artificial intelligence, robotics, software engineering, power systems, and communication technologies through an engaging blend of keynote sessions, research presentations, workshops, and panel discussions. Day 1 featured keynote talks on virtual reality in medical training, low-cost air quality monitoring, and AI innovations, while Day 2 focused on quantum cryptography and intelligent IoT systems. Across two days, 48 technical papers were presented, covering predictive analytics, autonomous robotics, and renewable energy optimization. Workshops on remote sensing and robotics offered hands-on learning experiences, and panel discussions addressed the societal impact of AI. The event provided participants with exposure to real-world applications, emerging research in cutting-edge technologies, and practical skills in robotics and sensing. It also fostered valuable networking among students, researchers, and industry professionals, delivering both academic insight and professional development. IEEE HITE 2024 stood out as a landmark event that successfully bridged the gap between academia and industry, while promoting innovation, collaboration, and future-forward thinking.",
        image: "/hite2.jpg",
        sub_images: ["/hite1.jpg", "/hite4.jpg", "/hite3.jpg", "/hite5.jpg", "/hite6.jpg"],
        instagram: "https://www.instagram.com/ieee.cs.ucp/",
        facebook: "https://www.facebook.com/profile.php?id=61566259647198",
        linkedin: "https://www.linkedin.com/company/ieee-computer-society-ucp-student-chapter/posts/?feedView=all"
    }
]

// 🌱 Seed function
async function seed() {
    console.log('🌱 Starting database seed...');

    try {
        // ⚠️ WARNING: clears table
        await db.deleteFrom('events').execute();

        for (const event of events) {
            await db.insertInto('events').values(event).execute();
        }

        console.log('✅ Database seeding completed');
    } catch (error) {
        console.error('❌ Seeding failed');
        console.error(error);
        process.exit(1);
    } finally {
        await db.destroy();
        await pool.end();
    }
}

if (process.env.RUN_SEED !== 'true') {
    console.log('⏭️ Skipping seed');
    process.exit(0);
}


// 🚀 Run seed
seed();
