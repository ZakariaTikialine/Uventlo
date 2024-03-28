'use client';
import SidebarEvent from "@/components/SideBarEvent";
import { usePathname } from "next/navigation";

export default function profileLayout({
    children,params ,
    }: Readonly<{
    children: React.ReactNode;
    params: { evetnId: string };
        }>) {
        const pathname = usePathname();
        const isActive = ['/profile', '/profile/userDashboard', '/profile/userEvents', '/profile/userMessages', '/profile/userProfile'].includes(pathname);
        return (
            <main>
            <div className="flex">
                <div className={`${isActive ? 'hidden' : 'display'}`}><SidebarEvent /></div>
                <div className="flex-1">{children}</div>
            </div>
            </main>
        );
    }
