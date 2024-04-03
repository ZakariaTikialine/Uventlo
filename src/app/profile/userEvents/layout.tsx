'use client';
import SidebarEvent from "@/components/SideBarEvent";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area"


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
                <div className="flex-1">
                    <ScrollArea className="h-[calc(100dvh-80px)]">
                        {children}
                    </ScrollArea>
                    </div>
            </div>
            </main>
        );
    }
