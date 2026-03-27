import React from 'react';
import HierarchyLayout from '../../components/Layouts/HierarchyLayout';
import HierarchyTeamSection from '@/components/ReusableComponents/HierarchyTeamSection';
import LeadershipCard from '@/components/ReusableComponents/LeadershipCard';


const coreLeadership = [
    {
  name: "Talha Badar",
  position: "President",
  image: "/talha.JPG",
  description: `Meet Talha Badar, a BSCS student at UCP whose university journey has been a remarkable story of growth and self-discovery. 🌟 Once a shy individual, Talha discovered his confidence and purpose through active participation in various societies and events. From contributing to the UCP Welfare Society, Dramatics Club (UDC), ACM, MLSA, and Rizq, he built a legacy of dedication and excellence. His year-long tenure with the UCP Welfare Society, serving in two key roles, became a transformative milestone in his personal and professional development. He also embarked on a new chapter with the Sawera Foundation, collaborating with an inspiring team to create meaningful change. 🚀
Talha further sharpened his teamwork and leadership skills.With a passion for academics and extracurriculars, Talha is determined to leave an impactful legacy—not just through hard work, but by making a real difference in every role he undertakes.`,
},{
  name: "Ahmad Mehmood",
  position: "Vice President",
  image: "/ahmad.JPG",
  description: "Ahmad Mehmood serves as the Vice President of UCP Welfare Society, playing a key role in organizing welfare initiatives and ensuring smooth coordination across teams. His dedication to community service and leadership helps drive impactful projects for those in need.",
},
{
  name: "Kaneez Fatima",
  position: "Vice President",
  image: "/kaneez.JPG",
  description: "Kaneez Fatima, Vice President of UCP Welfare Society, actively contributes to planning and executing welfare activities. Her commitment, teamwork, and passion for helping others play a vital role in spreading positivity and making a difference in the community.",
}
];



const teamMedia = [
    { name: "Hassan Jamshaid ", position: "Director", image: "/hassan1.JPG", description: "Leadership description here." },
    { name: "Fiza Akbar", position: "Co-Director", image: "/fiza.JPG", description: "Leadership description here." },
    { name: "Abeer Bilal", position: "Co-Director", image: "/abeer.JPG", description: "Leadership description here." },
];///fix
const teamMarketing = [
    { name: "Yashel Noor", position: "Director", image: "/yashel.JPG", description: "Leadership description here." },
    { name: "Ayesha Mumtaz", position: "Co-Director", image: "/ayesha.JPG", description: "Leadership description here." },
];
const teamCreative = [
    { name: "Tayyaba ", position: "Director", image: "/tayyaba.JPG", description: "Leadership description here." },
    { name: "Mubashara", position: "Co-Director", image: "/mubashara.JPG", description: "Leadership description here." },
];
const teamManagement = [
    { name: "Anwar Kareem", position: "Director", image: "/anwar.JPG", description: "Leadership description here." },
    { name: "Basim Baloch", position: "Co-Director", image: "/basim.JPG", description: "Leadership description here." },
];
const teamGraphics = [
    { name: "Anum Jabeen", position: "Director", image: "/anum2.JPG", description: "Leadership description here." },
    { name: "Kaneez Fatima", position: "Co-Director", image: "/kaneez3.JPG", description: "Leadership description here." },
];
const teamLogistics = [
    { name: "Jawad Waseem", position: "Director", image: "/jawad1.JPG", description: "Leadership description here." },
    { name: "Taimoor Ali", position: "Co-Director", image: "/taimoor.JPG", description: "Leadership description here." },
];
const teamCommunications = [
    { name: "Shafia Bukhari", position: "Director", image: "/shafia.JPG", description: "Leadership description here." },
    { name: "Zain ul Abdin", position: "Co-Director", image: "/zain.JPG", description: "Leadership description here." },
    { name: "Kaneez Fatima", position: "Co-Director", image: "/kaneez3.JPG", description: "Leadership description here." },
];
const teamOperations = [
    { name: "Zulqurnain Haider", position: "Director", image: "/zulqurnain.JPG", description: "Leadership description here." },
    { name: "Ahsan", position: "Co-Director", image: "/ahsan.JPG", description: "Leadership description here." },
];
const teamPublications = [
    { name: "Rubina Iftikhar", position: "Director", image: "/rubina1.JPG", description: "Leadership description here." },
    { name: "Esha Inam", position: "Co-Director", image: "/esha.JPG", description: "Leadership description here." },
];
const advisor = {
        name: "Muhammad Hammad ur Rehman",
        position: "Patron - UCP Welfare Society",
        image: "/sir.jpg",
        description: `M. Hammad ur Rehman is a dedicated professional specializing in Corporate Social Responsibility (CSR), Partnerships and Engagement, and Community Service. With strong expertise in volunteer management and customer service, he excels in building meaningful relationships and delivering impactful initiatives. A skilled communicator and public speaker, Hammad is passionate about training, collaboration, and driving positive social change.`
    };
//fixed hey
//hey
const Hierarchy2526 = () => {
    return (
        <HierarchyLayout
            title="Hierarchy 2025-26"
            subtitle="Shaping the future, today"
            backgroundImage="/g1.jpg"
            hideOverlay={true}
        >
            <div className="bg-black py-20">
                {/* <HierarchyTeamSection
                    title="Leadership 25-26"
                    members={hierarchyMembers}
                    showOverlay={false}
                /> */}
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

                <HierarchyTeamSection
                    title="Team Communications"
                    members={teamCommunications}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Media"
                    members={teamMedia}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Marketing"
                    members={teamMarketing}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Publications"
                    members={teamPublications}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Graphics"
                    members={teamGraphics}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Creative"
                    members={teamCreative}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Logistics"
                    members={teamLogistics}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Management"
                    members={teamManagement}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Operations"
                    members={teamOperations}
                    showOverlay={false}
                />
                {/* <HierarchyTeamSection
                    title="Team Publications"
                    members={teamPublications}
                    showOverlay={false}
                /> */}
            </div>
        </HierarchyLayout>
    );
};

export default Hierarchy2526;
