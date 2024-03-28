import UserNavBar from "@/components/UserNavBar";
import SidebarEvent from "@/components/SideBarEvent";

export default function EventLayout({
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
