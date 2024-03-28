'use client';
import UserNavBar from "@/components/UserNavBar";
import Sidebar from "@/components/SideBar";
import SidebarEvent from "@/components/SideBarEvent";
import { usePathname } from "next/navigation";

export default function profileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = ['/profile', '/profile/userDashboard', '/profile/userEvents', '/profile/userMessages', '/profile/userProfile'].includes(pathname);
  return (
    <main>
      <UserNavBar />
      <div className="flex">
        <div className={`${isActive ? 'display' : 'hidden'}`}><Sidebar /></div>
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
