import React from 'react';
import HierarchyLayout from '../../components/Layouts/HierarchyLayout';
import HierarchyTeamSection from '@/components/ReusableComponents/HierarchyTeamSection';

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

const teamManagement = [
    { name: "Muhammad Wajeeh ", position: "Director", image: "/wajeeh.JPG", description: "Leadership description here." },
    { name: "Fahad Abid", position: "Co-Director", image: "/Fahad.JPG", description: "Leadership description here." },
];
const teamMarketing = [
    { name: "Shafay Sarwar", position: "Director", image: "/shafay.JPG", description: "Leadership description here." },
    { name: "Syed Muneeb Shah", position: "Co-Director", image: "/muneeb.JPG", description: "Leadership description here." },
];
const teamCreative = [
    { name: "Areeba Mehtab", position: "Director", image: "/areeba.JPG", description: "Leadership description here." },
    { name: "Javeria Hussain", position: "Co-Director", image: "/javeria.JPG", description: "Leadership description here." },
];
const teamMedia = [
    { name: "Zahid Sultan", position: "Director", image: "/zahid.JPG", description: "Leadership description here." },
    { name: "Muhammad Abaidullah", position: "Co-Director", image: "/abaid.JPG", description: "Leadership description here." },
];
const teamGraphics = [
    { name: "Saqib Butt", position: "Director", image: "/saqib.JPG", description: "Leadership description here." },
    { name: "Abdullah Naveed", position: "Co-Director", image: "/abd.JPG", description: "Leadership description here." },
];
const teamLogistics = [
    { name: "Arslan Mustafa", position: "Director", image: "/Arslan.JPG", description: "Leadership description here." },
    { name: "M Farukh Mahmood", position: "Co-Director", image: "/farukh.JPG", description: "Leadership description here." },
];
const teamCommunications = [
    { name: "Ali Husnain", position: "Director", image: "/hus.JPG", description: "Leadership description here." },
    { name: "Abdul Rafay Waheed", position: "Co-Director", image: "/rafay.JPG", description: "Leadership description here." },
];
const teamHackathon = [
    { name: "Hamza Asim", position: "Director", image: "/hamza.JPG", description: "Leadership description here." },
    { name: "Muhammad Faseeh", position: "Co-Director", image: "/faseeh.JPG", description: "Leadership description here." },
];
const teamPublications = [
    { name: "Abdullah Habib", position: "Director", image: "/abd2.JPG", description: "Leadership description here." },
    // { name: "Member Name", position: "Co-Director", image: "/group.jpg", description: "Leadership description here." },
];
//fixed hey
//hey
const Hierarchy2526 = () => {
    return (
        <HierarchyLayout
            title="Hierarchy 2025-26"
            subtitle="Shaping the future, today"
            backgroundImage="/csnew.jpg"
            hideOverlay={true}
        >
            <div className="bg-black py-20">
                <HierarchyTeamSection
                    title="Leadership 25-26"
                    members={hierarchyMembers}
                    showOverlay={false}
                />

                <HierarchyTeamSection
                    title="Team Management"
                    members={teamManagement}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Marketing"
                    members={teamMarketing}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Creative"
                    members={teamCreative}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Media"
                    members={teamMedia}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Graphics"
                    members={teamGraphics}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Logistics"
                    members={teamLogistics}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Communications"
                    members={teamCommunications}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Hackathon"
                    members={teamHackathon}
                    showOverlay={false}
                />
                <HierarchyTeamSection
                    title="Team Publications"
                    members={teamPublications}
                    showOverlay={false}
                />
            </div>
        </HierarchyLayout>
    );
};

export default Hierarchy2526;
