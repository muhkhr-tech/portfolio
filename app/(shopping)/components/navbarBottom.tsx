import Link from "next/link";
import Menu from "../lib/navigation/menu";

export default function NavbarBottomSection({pathname}: {pathname: string}) {
  const menu = Menu()

  return (
    <ul className="fixed bottom-0 flex items-start justify-between w-screen py-4 z-10 bg-base-100 px-3">
      {menu.map((item, index) => (
        <li key={index} className={pathname===item.path ? "self-center text-blue-700 p-2": "p-2"}>
          <Link href={item.path} className="flex flex-col items-center w-full"><span>{item.icon}</span> <span className="text-xs">{item.name}</span></Link></li>
      ))}
    </ul>
  )
}