import Image from "next/image";

export default function NavbarSection() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-5 sm:mb-20">
      <div className="flex items-center justify-between">
        <Image
          src="/profile.jpeg"
          width={50}
          height={50}
          alt="Muh. Khaerur Rafiq"
          className="rounded-full"/>
        
        <div className="" id="navbar-default">
          <ul className="font-medium flex flex-col md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {/* <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              > */}
                Hi, saya Rafiq
                <p className="text-sm text-slate-600"><i>Web Developer</i></p>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}