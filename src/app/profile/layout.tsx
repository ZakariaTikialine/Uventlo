import type { Metadata } from "next";
import UserNavBar from "@/components/UserNavBar";
import Sidebar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "Uventlo",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <UserNavBar />
      <Sidebar />
      {children}
    </main>
  );
}
