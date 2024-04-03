"use client";
import UserNavBar from "@/components/UserNavBar";
import Sidebar from "@/components/SideBar";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function profileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = [
    "/profile",
    "/profile/userDashboard",
    "/profile/userEvents",
    "/profile/userMessages",
    "/profile/userProfile",
  ].includes(pathname);
  return (
    <main>
      <UserNavBar />
      <div className="flex">
        <div className={`${isActive ? "display" : "hidden"}`}>
          <Sidebar />
        </div>
        <div className="flex-1">
          <ScrollArea className="h-[calc(100dvh-80px)]">
            {children}
          </ScrollArea>
        </div>
      </div>
    </main>
  );
}
