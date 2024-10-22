"use client";
import {
  FaTicketAlt,
  FaRegPaperPlane,
  FaChartPie,
  FaLayerGroup,
  FaRobot,
  FaTasks,
  FaTv,
  FaWrench
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const pathName = usePathname();
  const arr = pathName.split("/");
  const eventId = arr[3];
  console.log(eventId);
  const navLinks = [
    {
      label: "Dashboard",
      route: `/profile/userEvents/${eventId}/eventDashboard`,
      icon: <FaChartPie />,
    },
    {
      label: "Ticketing",
      route: `/profile/userEvents/${eventId}/eventTicketing`,
      icon: <FaTicketAlt />,
    },
    {
      label: "Co-Chat",
      route: `/profile/userEvents/${eventId}/eventChat`,
      icon: <FaRegPaperPlane />,
    },
    {
      label: "Task management",
      route: `/profile/userEvents/${eventId}/eventTasks`,
      icon: <FaTasks />,
    },
    {
      label: "Floor management",
      route: `/profile/userEvents/${eventId}/eventFloor`,
      icon: <FaLayerGroup />,
    },
    {
      label: "AI Assistant",
      route: `/profile/userEvents/${eventId}/eventAssistants`,
      icon: <FaRobot />,
    },
    {
      label: "Stream",
      route: `/profile/userEvents/${eventId}/eventStream`,
      icon: <FaTv />,
    },
    {
      label: "Settings",
      route: `/profile/userEvents/${eventId}/eventSettings`,
      icon: <FaWrench />,
    },
  ];
  return (
    <aside className="hidden h-[calc(100dvh-80px)] w-[260px] bg-white p-3 shadow-md shadow-purple-200/50 lg:flex">
      <div className="flex size-full flex-col gap-4 pt-3">
        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <ul className="hidden w-full flex-col items-start gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = link.route === pathname;
              return (
                <li
                  key={link.route}
                  className={`flex-center font-bold w-full whitespace-nowrap rounded-md bg-cover  transition-all hover:bg-main-purple hover:shadow-inner hover:text-white group ${
                    isActive ? "bg-main-purple text-white" : "text-black"
                  }`}
                >
                  <Link
                    className="flex size-full items-center gap-4 p-4"
                    href={link.route}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
