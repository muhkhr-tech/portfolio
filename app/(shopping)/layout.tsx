import type { Metadata } from "next";
import "@/app/globals.css";
import SidebarSection from "./components/sidebar";

export const metadata: Metadata = {
  title: "Belanjain Aja!",
  description: "Belanja Bulanan",
};

export default function ShoppingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="block sm:flex">
      <SidebarSection/>
      <div className="w-full p-5">
        <h1></h1>
        {children}</div>
    </div>
  );
}
