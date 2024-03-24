import { FaUser, FaTv, FaEnvelope , FaChartPie} from "react-icons/fa";

    export const navLinks = [
    {
        label: "Events",
        route: "/profile/userEvents",
        icon: <FaTv />,
    },
    {
        label: "Dashboard",
        route: "/profile/userDashboard",
        icon: <FaChartPie />,
    },
    {
        label: "Messages",
        route: "/profile/userMessages",
        icon: <FaEnvelope />,
    },
    {
        label: "Profile",
        route: "/profile/userProfile",
        icon: <FaUser />,
    },
    ];
