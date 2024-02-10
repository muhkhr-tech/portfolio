'use client'
import type { Metadata } from "next";
import "@/app/globals.css";
import SidebarSection from "./components/sidebar";
import NavbarSection from "./components/navbar";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Belanjain Aja!",
//   description: "Belanja Bulanan",
// };

export default function ShoppingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  return (
    <div className="block sm:flex">
      <div className="block sm:hidden"><NavbarSection pathname={pathname} /></div> {/* mobile view */}
      <div className="hidden sm:block"><SidebarSection pathname={pathname} /></div> {/* pc view */}
      <div className="w-full p-5">
        <h1></h1>
        {children}</div>
    </div>
  );
}
