'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarSection() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-5 sm:mb-5">
      <div className="flex justify-end items-center gap-4">
        {/* <Image
          src="/profile.jpeg"
          width={50}
          height={50}
          alt="Muh. Khaerur Rafiq"
          className="rounded-full"/> */}
        <div className="" id="navbar-default">
          <ul className="font-medium flex gap-4 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block ${pathname === '/' ? 'text-blue-700': 'text-whiterounded'} md:p-0`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block ${pathname.startsWith('/projects') ? 'text-blue-700': 'text-whiterounded'} md:p-0`}
              >
                Projek
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}