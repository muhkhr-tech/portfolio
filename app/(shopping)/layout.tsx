import type { Metadata } from "next";
import "@/app/globals.css";
import SidebarSection from "./components/sidebar";

export const metadata: Metadata = {
  title: "Belanjain Aja, Yuk!",
  description: "Belanja Bulanan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <SidebarSection/>
      <div className="w-full">{children}</div>
    </div>
  );
}
