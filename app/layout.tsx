import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarSection from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafiq | Portofolio",
  description: "Saya Rafiq seorang web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-xl mx-auto p-4">
          <NavbarSection/>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
