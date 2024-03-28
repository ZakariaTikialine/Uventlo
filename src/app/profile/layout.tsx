import UserNavBar from "@/components/UserNavBar";
import Sidebar from "@/components/SideBar";
import SidebarEvent from "@/components/SideBarEvent";

export default function profileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <UserNavBar />
      <div className="flex">
        <SidebarEvent />
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
