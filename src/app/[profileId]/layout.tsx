import UserNavBar from "@/components/UserNavBar";
import Sidebar from "@/components/SideBar";
import SidebarEvent from "@/components/SideBarEvent";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function visitProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <UserNavBar />
      {children}
      <Footer />
    </main>
  );
}
