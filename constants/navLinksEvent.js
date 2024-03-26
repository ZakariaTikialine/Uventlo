import { FaUser, FaTv, FaEnvelope , FaChartPie} from "react-icons/fa";

    export const navLinks = [
    {
        label: "Dashboard",
        route: "/profile/userEvents/eventDashboard",
        icon: <FaChartPie />,
    },
    {
        label: "Tecketation",
        route: "/profile/userEvents/eventTecketation",
        icon: <FaTv />,
    },
    {
        label: "Co Chat",
        route: "/profile/userEvents/eventChat",
        icon: <FaEnvelope />,
    },
    {
        label: "Tasks",
        route: "/profile/userEvents/eventTasks",
        icon: <FaUser />,
    },
    {
        label: "Assistants",
        route: "/profile/userEvents/eventAssistants",
        icon: <FaUser />,
    },
    {
        label: "Floor",
        route: "/profile/userEvents/eventFloor",
        icon: <FaUser />,
    },
    ];