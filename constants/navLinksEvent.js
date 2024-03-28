import { FaTv, FaEnvelope , FaChartPie , FaLayerGroup , FaRobot , FaTasks} from "react-icons/fa";

export const navLinks = [
    {
        id : 1,
        label: "Dashboard",
        route: "/profile/userEvents/eventDashboard",
        icon: <FaChartPie />,
    },
    {
        id : 2,
        label: "Ticketing",
        route: "/profile/userEvents/eventTicketing",
        icon: <FaTv />,
    },
    {
        id : 3,
        label: "Co-Chat",
        route: "/profile/userEvents/eventChat",
        icon: <FaEnvelope />,
    },
    {
        id : 4,
        label: "Task management",
        route: "/profile/userEvents/eventTasks",
        icon: <FaTasks />,
    },
    {
        id : 5,
        label: "Floor management",
        route: "/profile/userEvents/eventFloor",
        icon: <FaLayerGroup />,
    },
    {
        id : 6,
        label: "AI Assistant",
        route: "/profile/userEvents/eventAssistants",
        icon: <FaRobot />,
    },
];
