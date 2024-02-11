'use client'

import "@/app/globals.css";
import SidebarSection from "./components/sidebar";
import { usePathname } from "next/navigation";
import NavbarBottomSection from "./components/navbarBottom";
import NavbarTopSection from "./components/navbarTop";

export default function ShoppingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()

  return (
    <div className="block sm:flex">
      <div className="block sm:hidden"><NavbarTopSection/></div> {/* mobile view */}
      <div className="block sm:hidden"><NavbarBottomSection pathname={pathname} /></div> {/* mobile view */}
      <div className="hidden sm:block"><SidebarSection pathname={pathname} /></div> {/* pc view */}
      <div className="w-full px-5 pt-0 sm:pt-10">
        {children}</div>
    </div>
  );
}
