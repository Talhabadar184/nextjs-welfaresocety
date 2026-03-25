import React from 'react';
import HierarchyLayout from '../../components/Layouts/HierarchyLayout';
import HierarchyTeamSection from '@/components/ReusableComponents/HierarchyTeamSection';

const hierarchyMembers = [
    {
  name: "Talha Badar",
  position: "President",
  image: "/talha.JPG",
  description: "Talha Badar, President of UCP Welfare Society, is a passionate leader committed to serving the community. With strong organizational and leadership skills, he leads welfare initiatives, manages large-scale events, and inspires the team to create meaningful social impact.",
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
                <HierarchyTeamSection
                    title="Leadership 25-26"
                    members={hierarchyMembers}
                    showOverlay={false}
                />

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
